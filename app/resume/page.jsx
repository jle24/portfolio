import React from 'react';

const Page = () => {
  return (
    <div className='w-full flex-center flex-col mb-5'>
      <h1 className='head_text mb-10'>Resume</h1>
      <iframe
        src='/pdfs/Jonathan_Le_Resume.pdf'
        width='75%' // Set the width to 100% to fit the container
        height='500px' // Set the desired height in pixels or any other unit
        />
    </div>
  );
}

export default Page;
