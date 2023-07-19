import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export  const Navbar =()=>{

    let links = [
      {name:"HOME", link:"/"},
      {name:"ABOUT", link:"/about"},
      {name:"SERVICES", link:"/services"},
      {name:"MEMBER", link:"/member"},
    ]

    let [open, setOpen] = useState(false)

    return (
      <>
        <div className="z-0 mb-12">
          <div className="shadow-md w-full fixed top-0 left-0 z-20">
            <div className="md:flex items-center justify-between bg-white py-1 md:px-10 px-7">
              <div className="font-bold text-2xl cursor-pointer flex items-center">
                <img
                  src="/asset/cyber-logo.png"
                  alt="logo"
                  className="w-16 pl-2"
                />
                <h1 className='lg:ml-4 max-sm:m-auto sm:m-auto text-primary'>CYBER UNUSA</h1>
              </div>
              <div
                className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
                onClick={() => setOpen(!open)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  name={open ? "close" : "menu"}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>

              <ul
                className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                  open ? "top-16" : "top-[-490px]"
                } `}
              >
                {links.map((link) => (
                  <li
                    key={link.name}
                    className="md:ml-6 text-lg font-semibold md:my-0 my-7"
                  >
                    
                    <Link to={`${link.link}`} ><p
                      
                      className="text-gray-800 hover:text-gray-400 duration-500"
                    >
                      {link.name}
                    </p></Link>
                  </li>
                ))}
                <Link to="/login">
                  <button className="px-3 py-2 md:ml-6 font-semibold bg-[#13A085] text-white rounded-md hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out">
                    LOGIN
                  </button>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
}