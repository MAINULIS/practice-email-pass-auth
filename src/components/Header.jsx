import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    return (
        <div className='bg-neutral-100 px-4 py-5 mx-auto'>

            <div className='flex items-center justify-between'>
                {/* company name */}
                <div className='text-neutral-700 ml-10 tracking-wide font-bold  text-xl'>
                    <Link >Practice Email Pass Auth</Link>
                </div>

                {/* nav items */}
                <div>
                    <ul className='inline-flex items-center space-x-6 pr-4  hidden lg:flex'>
                        <li>
                            <NavLink to="/"
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login"
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >Sign In</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signUp"
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >Sign Up</NavLink>
                        </li>
                        <a href="/"> <img className="w-10 h-10 rounded-full" src="/public/avatar.jpeg" alt="Rounded avatar" /></a>
                    </ul>

                </div>
                {/* responsive for mobile */}
                <div className='lg:hidden'>
                    {/* dropDown menu */}
                    <button onClick={() => setIsOpenMenu(true)}
                    >
                        <Bars3BottomRightIcon className='w-5 text-gray-600' />
                    </button>
                    {
                        isOpenMenu && (
                            <div className='absolute top-0 left-0 w-full z-10'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    {/* company name */}
                                    <div className='flex items-center justify-between mb-4'>
                                        <div>
                                            <Link ><span className='text-xl tracking-wide font-semibold text-neutral-700 '>Practice</span></Link>
                                        </div>
                                        {/* drop down close btn */}
                                        <div>
                                            <button onClick={() => setIsOpenMenu(false)}
                                            >
                                                <XMarkIcon className='w-5 text-gray-600' />
                                            </button>
                                        </div>
                                    </div>
                                    {/* mobile nav items */}
                                <nav>
                                    <ul className='space-y-5'>
                                        <li>
                                            <NavLink to="/"
                                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                                            >Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/login"
                                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                                            >Sign In</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/signUp"
                                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                                            >Sign Up</NavLink>
                                        </li>
                                        <Link to="/"> <img className="w-10 h-10 rounded-full" src="/avatar.jpeg" alt="Rounded avatar" /></Link>
                                    </ul>
                                </nav>
                                </div>
                                
                            </div>

                        )}

                </div>
            </div>

        </div>
    );
};

export default Header;