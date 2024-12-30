import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';
import useImageGeneration from './hooks/useImageGeneration';

function App() {
  const {
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
  } = useImageGeneration();

  return (
    <div className='body'>
      <Sidebar />
      <Header
        loginModal={loginModal}
        setloginModal={setloginModal}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
      <Main
        url={url}
        submit={submit}
        modelModal={modelModal}
        setModelModal={setModelModal}
        model={model}
        setModel={setModel}
        timer={timer}
        second={second}
        setSecond={setSecond}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
}

export default App;