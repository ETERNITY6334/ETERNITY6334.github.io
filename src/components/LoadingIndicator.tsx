import React from 'react';
import { SyncLoader } from 'react-spinners';

function LoadingIndicator({ timer }: any) {
  return (
    <div>
      <SyncLoader color={'black'} loading={true} className='GeneratingAnime' speedMultiplier={0.8} />
      <p className='Generating'>이미지를 생성 중입니다...</p>
      <p>예상 남은 시간: {timer}초</p>
    </div>
  );
}

export default LoadingIndicator;