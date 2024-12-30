import { useState, useEffect } from 'react';
import { getImage } from '../api/imageApi';

function useImageGeneration() {
  const [url, setUrl] = useState('');
  const [submit, setSubmit] = useState(true);
  const [modelModal, setModelModal] = useState(false);
  const [model, setModel] = useState('flux');
  const [timer, setTimer] = useState(0);
  const [second, setSecond] = useState(3);
  const [loginModal, setloginModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleSubmit = async () => {
    try {
      const prompt = (document.getElementById('prompt') as HTMLTextAreaElement).value;
      if (prompt === '') {
        alert('prompt를 입력해주세요');
        return setSubmit(true);
      }
      setSubmit(false);
      setTimer(second);
      const result = await getImage(prompt, model);
      setUrl(result.url);
      setSubmit(true);
    } catch (error) {
      console.log(error);
      setSubmit(true);
    }
  };

  return {
    url,
    submit,
    modelModal,
    setModelModal,
    model,
    setModel,
    timer,
    second,
    setSecond,
    handleSubmit,
    loginModal,
    setloginModal,
    loggedIn,
    setLoggedIn
  };
}

export default useImageGeneration;