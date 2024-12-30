import React from 'react';
import LoginModal from './LoginModal'

function Header({ loginModal, setloginModal, loggedIn, setLoggedIn }: any) {
  return (
    <header>
      <p>Image Generator</p>
      {/* <div className='LoginRegisterButtons'>
        <button>로그인</button>
        <button onClick={() => { setloginModal(true); }}>회원가입</button>
      </div> */}
      <LoginModal
        isOpen={loginModal}
        onClose={() => setloginModal(false)}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
    </header>
  );
}

export default Header;