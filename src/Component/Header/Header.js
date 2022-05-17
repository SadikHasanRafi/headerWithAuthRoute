import React from 'react';

const Header = () => {
    const  style = {
        header:`flex h-32 gap-16 mr-40 justify-center w-1/2 items-center text-[22px] font-semibold font-mono text-cyan-100 `,
        headerElements:' w-auto h-auto hover:bg-cyan-100 hover:text-neutral-800 hover:shadow-md hover:shadow-black p-[7px] px-5'
    }
    return (
        <div className='flex bg-neutral-800'>
            <div className='w-1/2 h-auto '>

            </div>

            <ul className={style.header}>
                <li className={style.headerElements} >Home</li>
                <li className={style.headerElements} >Order</li>
                <li className={style.headerElements} >About</li>
                <li><button className='font-semibold'>Sign Up</button></li>
                <li><button className='font-semibold'>Sign In</button></li>
                <li><button className='font-semibold'>Sign Out</button></li>
            </ul>
           
        </div>
    );
};

export default Header;