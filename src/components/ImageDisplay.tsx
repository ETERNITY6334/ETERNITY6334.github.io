import React from 'react';

function ImageDisplay({ url }: any) {
  if (!url) return null;

  return (
    <div>
      <img src={url} alt='generated image' className='imageUrl' />
    </div>
  );
}

export default ImageDisplay;