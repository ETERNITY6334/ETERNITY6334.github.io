import React from 'react';
import Modal from 'react-modal';
import { customStyles } from '../utils/styles';

function LoginModal({ isOpen, onClose, loggedIn, setLoggedIn }: any) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      className='modal'
    >
      <button className="modal-close-button" onClick={onClose}>&#215;</button>
      <h1>회원가입 모달</h1>
      <div>
        {loggedIn ? (
          <div>
            <p>Google로 로그인했습니다!</p>
          </div>
        ) : (
          <button onClick={()=>{handleGoogleLogin(); setLoggedIn(true)}}>Google 로그인</button>
        )}
      </div>
    </Modal>
  );
}
const handleGoogleLogin = () => {
  const googleOAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=433355269658-48o98pfvejqksp4qpopi6bjdjrgb1dt4.apps.googleusercontent.com&redirect_uri=http://localhost:3000&response_type=code&scope=email profile`;
  return window.location.replace(googleOAuthUrl);
};

export default LoginModal;