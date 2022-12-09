import { useState } from "react";
import { BsArrowLeftCircle } from 'react-icons/bs'
import { AiFillPieChart } from 'react-icons/ai'
import { SiFuturelearn } from 'react-icons/si'
import { SiOpenaccess } from 'react-icons/si'
import { CgProfile } from 'react-icons/cg'

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    // <>
    //   {showSidebar ? (
    //     <button
    //       className="flex text-4xl text-white items-center cursor-pointer fixed left-40 top-6 z-50"
    //       onClick={() => setShowSidebar(!showSidebar)}
    //     >
          
    //     </button>
    //   ) : (
    //     <svg
    //       onClick={() => setShowSidebar(!showSidebar)}
    //       className="fixed z-30 flex items-center cursor-pointer left-10 top-6"
    //       fill="#2563EB"
    //       viewBox="0 0 100 80"
    //       width="40"
    //       height="40"
    //     >
    //       <rect width="100" height="10"></rect>
    //       <rect y="30" width="100" height="10"></rect>
    //       <rect y="60" width="100" height="10"></rect>
    //     </svg>
    //   )}

    //   <div
    //     className={`top-0 left-0 w-[35vw] bg-blue-600  p-10 pl-20 text-white fixed h-full z-40  ease-out-in duration-200 ${
    //       showSidebar ? "translate-x-0 " : "translate-y-full"
    //     }`}
    //   >
    //     <button onClick={() => setShowSidebar(!showSidebar)}>
    //     <h1 className="z-60 fixed top-0">A</h1>
    //     </button>

    //     <div
    //   className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
    // >
    //   <div className="text-gray-100 text-xl">
    //     <div className="p-2.5 mt-1 flex items-center">
    //       <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-assemiper"></i>
    //       <h1 className="font-bold text-gray-200 text-[15px] ml-3">Assemiper</h1>
    //     </div>
    //     <div className="my-2 bg-gray-600 h-[1px]"></div>
    //   </div>
    //   <div
    //     className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
    //   >
    //     <i className="bi bi-search text-sm"></i>
    //     <input
    //       type="text"
    //       placeholder="Search"
    //       className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
    //     />
    //   </div>
    //   <div
    //     className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
    //   >
    //     <i className="bi bi-house-door-fill"></i>
    //     <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
    //   </div>
    //   <div
    //     className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
    //   >
    //     <i className="bi bi-bookmark-fill"></i>
    //     <span className="text-[15px] ml-4 text-gray-200 font-bold">Associados</span>
    //   </div>
    //   <div className="my-4 bg-gray-600 h-[1px]"></div>
    //   <div
    //     className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
    //   >
    //     <i className="bi bi-chat-left-text-fill"></i>
    //     <div className="flex justify-between w-full items-center">
    //       <span className="text-[15px] ml-4 text-gray-200 font-bold">Outros</span>
    //       <span className="text-sm rotate-180" id="arrow">
    //         <i className="bi bi-chevron-down"></i>
    //       </span>
    //     </div>
    //   </div>
    //   <div
    //     className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
    //     id="submenu"
    //   >
    //     <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
    //       Documentos
    //     </h1>
    //     <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
    //       Imprimir
    //     </h1>
    //     <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
    //       Relação
    //     </h1>
    //   </div>
    //   <div
    //     className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
    //   >
    //     <i className="bi bi-box-arrow-in-right"></i>
    //     <span className="text-sm ml-4 text-gray-200 font-bold">Sair</span>
    //   </div>
    // </div>
    //   </div>
    // </>

    <>
            <div
                className={`${
                    open ? 'w-60' : 'w-fit'
                } hidden sm:block relative h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
            >
                <BsArrowLeftCircle
                    className={`${
                        !open && 'rotate-180'
                    } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
                    onClick={() => setOpen(!open)}
                />
                <Link to='/'>
                    <div className={`flex ${open && 'gap-x-4'} items-center`}>
                        <img src={Logo} alt='' className='pl-2' />
                        {open && (
                            <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
                                Goal Quest
                            </span>
                        )}
                    </div>
                </Link>

                <ul className='pt-6'>
                    {Menus.map((menu, index) => (
                        <Link to={menu.path} key={index}>
                            <li
                                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${
                                    location.pathname === menu.path &&
                                    'bg-gray-200 dark:bg-gray-700'
                                }`}
                            >
                                <span className='text-2xl'>{menu.src}</span>
                                <span
                                    className={`${
                                        !open && 'hidden'
                                    } origin-left duration-300 hover:block`}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
  );
};

export default Sidebar;