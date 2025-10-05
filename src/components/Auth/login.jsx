import { useState } from "react";


const Login = () => {
  
   const [email, SetEmail]=useState('');
   const [password , SetPassword]=useState('');

   const submitHandler=(e)=>{
      e.preventDefault(e)
      console.log("password");
      console.log("email");

   }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>

     <div className='border-2 rounded-xl border-emerald-600 p-20'>
       <form onSubmit={(e)=>{
         submitHandler(e);

       }}
       className='flex flex-col items-center justify-center'>
         <input value={email}
         onChange={(e)=>{
            SetEmail(e.target.value);
         }}
         required className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="text" placeholder="Email your email" />
         <br />
         <input
           value={password}
         onChange={(e)=>{
             SetPassword(e.target.value);
         }} 
         required className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type="text"  placeholder=" Enter Password"/>
          <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'  >Log In</button>       
       </form>
      
     </div>

    </div>
  )
};

export default Login;