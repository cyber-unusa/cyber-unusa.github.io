import React, { useEffect } from 'react';

const Workshop = () => {

    const externalURL = 'https://drive.google.com/drive/folders/1TlxL6_cgNy0cgQdCpoOfKTJ7Ool_VGdo?usp=sharing';
    const delayInMillis = 3000; 

    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            window.location.href = externalURL;
        }, delayInMillis);

        return () => {
            clearTimeout(redirectTimeout);
        };
    }, []);

  return (
    <div className='mx-auto w-40 h-40 mt-48'>
        <img src="/asset/logo.png" alt="" className='animate-bounce'/>
        <h1 className='text-center text-3xl font-semibold animate-pulse'>Loading...</h1>
    </div>
  )
}

export default Workshop
