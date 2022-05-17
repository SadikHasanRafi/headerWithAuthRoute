import React from 'react';

const Header = () => {
    const  style = {
        header:`flex h-32 gap-16 mr-40 justify-center w-1/2 items-center text-[22px] font-semibold font-mono text-cyan-100 `,
        headerElements:' w-auto h-auto  hover:bg-cyan-100 hover:text-neutral-800 hover:shadow-md ease-in duration-100 transition hover:shadow-black p-[7px] px-5',
        button:'font-semibold w-32 rounded-3xl hover:bg-slate-200 hover:border-2 hover:text-neutral-700 hover:shadow ease-in duration-150 transition hover:shadow-cyan-100 h-auto p-1 px-3 border-2'
    }
    return (
        <div className='flex bg-neutral-800'>
            <div className='w-1/2 h-auto '>

            </div>

            <ul className={style.header}>
                <li className={style.headerElements} >Home</li>
                <li className={style.headerElements} >Order</li>
                <li className={style.headerElements} >About</li>
                <li><button className={style.button}>Sign Up</button></li>
                <li><button className={style.button}>Sign In</button></li>
                <li><button className={style.button}>Sign Out</button></li>
            </ul>
           
        </div>
    );
};

export default Header;