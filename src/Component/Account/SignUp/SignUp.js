import React from 'react';

const SignUp = () => {

    const style = {
        form:'w-auto p-10 bg-slate-100 shadow-lg h-auto flex flex-col border justify-center items-center ',
        input:' text-xl mt-4 bg-cyan-50 rounded-xl text-center font-mono h-16 w-96 hover:border-slate-700 p-2 ',
        btn:' mt-8 py-4 px-36 rounded-full  font-mono text-xl hover:bg-neutral-700 hover:text-cyan-100 font-bold hover:shadow-lg border-slate-500 ease-in duration-100 transition border-[1px]'        
    }


    return (
        <div className='flex items-center justify-center mt-60 '>
            <form onSubmit='submit' className={style.form}>
                <input className={style.input} type="text" id="name"  placeholder='Name'/>
                <input className={style.input} type="email" id="email"  placeholder='Email'/>
                <input className={style.input} type="password" id="password" placeholder='Password' />
                <button className={style.btn} >Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;