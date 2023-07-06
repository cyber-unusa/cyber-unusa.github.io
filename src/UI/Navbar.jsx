import React,{useState} from 'react'
import cyber from '../assets/img/cyber-logo.png'

export  const Navbar =()=>{
  const[show,setShow]=useState(true);

    const handleNavCollapse = () => {

    }

    return (
      <>
        {/* <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
          <div className="container">
            <div className="flex items-center justify-between relative">
              <div className="px-4">
                <a href="#"><img src={cyber} alt="cyber" className='py-6 block' /></a>
              </div>
              <div className="flex items-center px-4">
                <button id='humberger' name='humberger' type='button' className='block absolute right-4' data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={`!isNavCollapsed ? true : false`} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                  <span className='humberger'></span>
                  <span className='humberger'></span>
                  <span className='humberger'></span>
                </button>
              </div>
            </div>
          </div>
        </header> */}
        <nav className="bg-white px-[25px] pt-[5px]">
          <div className="container flex items-center justify-between pr-25 px-30">
            <div className="flex items-center">
              <img
                src={cyber}
                alt=""
                className="w-[75px] h-[75px] mr-2"
              />
            </div>
            <div className="flex space-x-3">
              <span className="py-2 px-3 font-bold">HOME</span>
              <span className="py-2 px-3 font-bold">ABOUT</span>
              <span className="py-2 px-3 font-bold">MEMBER</span>
              <span className="py-2 px-3 font-bold">SERVICES</span>
              <button className="px-3 py-2 bg-[#13A085] text-white rounded-md">
                LOGIN
              </button>
            </div>
          </div>
        </nav>
      </>
    );
}