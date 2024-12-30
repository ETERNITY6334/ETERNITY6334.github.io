import React from 'react';
import Modal from 'react-modal';
import { customStyles } from '../utils/styles';

function ModelModal({ isOpen, onClose, setModel, setSecond }: any) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      className='modal'
    >
      <button className="modal-close-button" onClick={onClose}>&#215;</button>
      <h1>이미지 생성 모델</h1>
      <div
        className='model-content'
        onClick={() => { setModel('flux'); onClose(); setSecond(3) }}
      >
        <img src='https://art.artiva.kr/i/85fd9633-4e4a-43b4-9b9f-f041bb2cb910.png' alt="Flux" />
        <br />
        <h2>Flux</h2>
        <p>현실환경을 묘사하는데 매우 강력하며, 인물사진은 실제사진과 구분하기 어려울 정도의 정밀함을 보여줍니다.</p>
      </div>
      <div
        className='model-content'
        onClick={() => { setModel('flux-pro'); onClose(); setSecond(15) }}
      >
        <img src='https://art.artiva.kr/i/9efcff43-8d8d-457e-bde4-30eed9959446.png' alt="Flux-pro" />
        <br />
        <h2>Flux-pro</h2>
        <p>가장 높은 성능의 모델로, 프롬프트 이해, 퀄리티, 출력, 스타일 등 가장 최첨단의 성능을 가졌습니다.</p>
      </div>
    </Modal>
  );
}

export default ModelModal;