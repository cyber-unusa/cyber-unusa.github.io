import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="container relative">
        <div className="w-80 shadow-xl mx-auto rounded-md mt-16 lg:mt-4 lg:w-96 ">
            <img src="/asset/logo.png" alt="p" className='mx-auto w-36 mt-16' />
            <img src="/asset/vector/v3.png" alt="vector" className='hidden lg:block absolute -top-24 right-0 w-[560px]' />
            <img src="/asset/vector/v4.png" alt="vector" className='hidden lg:block absolute -bottom-[93px] left-0 w-72' />
            <form action="post">
                <div className='p-4'>
                    <label htmlFor="uname" className='block text-gray-700 font-bold mb-1'>NIM: </label>
                            <input
                            type='text'
                            name='uname'
                            id='uname' className='peer h-full w-full border-b border-primary bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-yel focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 mb-8'/>
                    <label htmlFor="pass" className='block text-gray-700 font-bold mb-1'>Password: </label>
                            <input
                            type='password'
                            name='pass'
                            id='pass' className='peer h-full w-full border-b border-primary bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-yel focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'/>
                </div>
                <div className='text-right'>
                    <a href='#' className='text-right font-semibold text-lowprim pr-4'>Forgot password?</a>
                </div>

                <button className='py-2 px-8 m-4 ml-20 lg:ml-36 mt-8 text-base font-bold rounded-full text-white bg-primary hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out'>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
