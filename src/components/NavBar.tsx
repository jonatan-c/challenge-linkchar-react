import React from 'react'
import { useLocation } from 'react-router-dom'
import icon1NavBar from '../assets/icon1-navbar.png'
import icon2NavBar from '../assets/icon2-navbar.png'
import icon3NavBar from '../assets/icon3-navbar.png'
import icon4NavBar from '../assets/icon4-navbar.png'
import menu from '../assets/menu.png'

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const {pathname} = useLocation()
 
  
  return (
    <>
      <nav className="  flex flex-wrap items-center justify-between sm:w-[98%] py-3 sm:px-[5%]  ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start font text-white-600 sm:text-[200%] text-[200%] font-bold cursor-pointer border-b-4 border-b-red-600">
            LinckChar
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded  block lg:hidden  outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <img className="bg-white " src={menu} alt="" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow   justify-between items-end flex-col sm:flex-row sm:items-center py-4 sm:py-0 absolute  top-14 right-7 bg-black/70 sm:z-0 z-30   sm:relative sm:top-0 sm:right-0 sm:bg-black  " +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            {/* List Titles */}
            <ul className=" flex  flex-col sm:flex-row px-4  sm:pl-20  ">
              <li className=" nav-item px-0 sm:px-2 cursor-pointer py-2">Movies</li>
              <li className=" nav-item px-0 sm:px-2 cursor-pointer py-2">TV shows</li>
              <li className=" nav-item px-0 sm:px-2 cursor-pointer py-2">Animations</li>
              <li className=" nav-item px-0 sm:px-2 cursor-pointer py-2">Plans</li>
            </ul>
            {/* List icons*/}
            <ul className="flex flex-col sm:flex-row  pl-0 sm:pl-0        ">
              <li>
                <img className="p-3 sm:p-3 cursor-pointer" src={icon1NavBar} />{" "}
              </li>
              <li>
                <img className="p-3 sm:p-3 cursor-pointer" src={icon2NavBar} />
              </li>
              <li>
                <img className="p-3 sm:p-3 cursor-pointer" src={icon3NavBar} />
              </li>
              <li>
                <img className="p-3 sm:p-3 cursor-pointer" src={icon4NavBar} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar

