import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../firebase.init';
import EmailPasswordSignUp from './EmailPasswordSignUp';


const SignUp = () => {

    const { emailPasswordSignUp } = EmailPasswordSignUp()

    const style = {
        form:'w-auto p-10 bg-slate-100 shadow-lg h-auto flex flex-col border justify-center items-center ',
        input:' text-xl mt-4 bg-cyan-50 rounded-xl text-center font-mono h-16 w-96 hover:border-slate-700 p-2 ',
        btn:' mt-8 py-4 px-36 rounded-full  font-mono text-xl hover:bg-neutral-700 hover:text-cyan-100 font-bold hover:shadow-lg border-slate-500 ease-in duration-100 transition border-[1px]'        
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(name,password,email)
        emailPasswordSignUp(name,email,password)     
    }
   

    return (
        <div className='flex items-center justify-center mt-60 '>
            <form onSubmit={handleSubmit} className={style.form}>
                <input className={style.input}  required type="text" id="name"  placeholder='Name'/>
                <input className={style.input}  required type="email" id="email"  placeholder='Email'/>
                <input className={style.input}  required type="password" id="password" placeholder='Password' />
                <button className={style.btn} type='submit' >Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;