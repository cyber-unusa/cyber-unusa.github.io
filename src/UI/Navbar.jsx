
export  const Navbar =()=>{
    return (
      <>
        <nav className="bg-white px-[25px] pt-[5px]">
          <div className="container flex items-center justify-between pr-25 px-30">
            <div className="flex items-center">
              <img
                src="/asset/cyber-logo.png"
                alt=""
                className="w-[75px] h-[75px] mr-2"
              />
              <span className="font-black text-xl">CYBER UNUSA</span>
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