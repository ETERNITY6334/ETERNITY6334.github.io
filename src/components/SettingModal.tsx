import React from 'react';
import Modal from 'react-modal';
import { customStyles } from './styles/SettingModal';
import './styles/SettingModal.css';

// Modal.defaultStyles.overlay.width

function SettingModal({ isOpen, onClose }: any) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      className='modal'
    >
      <button className="modal-close-button" onClick={onClose}>&#215;</button>
      <h1>설정</h1>
      <br />
      <div className='modal-content'>
        <p>기능 준비 중..</p>
      </div>
    </Modal>
  );
}

export default SettingModal;