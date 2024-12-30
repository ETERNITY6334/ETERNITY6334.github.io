import React from 'react';

function SubmitButton({ submit, handleSubmit }: any) {
  if (!submit) return null;

  return (
    <button className='submit' onClick={handleSubmit}>Submit</button>
  );
}

export default SubmitButton;