import React from 'react';
import ModelModal from './ModelModal';
import SubmitButton from './SubmitButton';
import ImageDisplay from './ImageDisplay';
import LoadingIndicator from './LoadingIndicator';
import { getRandomPrompt } from '../utils/prompts';

function Main({ url, submit, modelModal, setModelModal, model, setModel, timer, second, setSecond, handleSubmit, loginModal, setloginModal }: any) {
  return (
    <main className='mmaaiinn'>
      <hr className='hrHM' />
      <button
        onClick={() => setModelModal(true)}
        className='ModelSelectButton'>현재 모델: {model}</button>
      <br />
      <textarea id='prompt' className='prompt' placeholder={'ex) ' + getRandomPrompt()} />
      <br />
      <SubmitButton submit={submit} handleSubmit={handleSubmit} />
      <br />
      {submit ? <ImageDisplay url={url} /> : <LoadingIndicator timer={timer} />}
      <hr className='hrMF' />
      <ModelModal 
        isOpen={modelModal}
        onClose={() => setModelModal(false)}
        setModel={setModel}
        setSecond={setSecond}
      />
    </main>
  );
}

export default Main;