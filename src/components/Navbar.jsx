import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slices/SearchSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    return (
        <nav className='flex items-center flex-col flex- lg:flex-row justify-between py-3 px-3 mb-10 bg-black sticky top-0 z-10'>
            <div className='flex-shrink-0'>
                <img className='w-40 ' src="nav-logo.png" alt="FoodieFrenzy Logo" />
                {/* <h1 className='text-2xl font-bold text-white'>FoodieFrenzy</h1> */}
            </div>
            <div className='w-full lg:w-auto mt-4 lg:mt-0'>
                <input
                    type="search"
                    name='search'
                    placeholder='Search here'
                    autoComplete='off'
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                    className='p-3 border border-gray-400 text-sm rounded-2xl outline-none w-full lg:w-[25vw]'
                />
            </div>
        </nav>
    )
}

export default Navbar;
