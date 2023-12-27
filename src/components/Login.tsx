/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { login } from '../features/auths/authSlice';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const [check, setCheck] = useState(false)
  
    // const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
  
    const dispatch = useDispatch();
  
    const handleUsernameInput = (e:any) => setUsername(e.target.value);
    const handlePwdInput = (e:any) => setPassword(e.target.value);


    interface CustomError extends Error {
        response?: {
          data?: {
            detail?: string;
          };
          status?: number;
        };
        originalStatus?: number;
      }
      
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // setLoading(true);
        try {
          // @ts-ignore
          dispatch(login({ username, password }));
          setUsername("");
          setPassword("");
          // setLoading(false);
          navigate("/");
        } catch (error:any) {
          // setLoading(false);
          if (!error?.originalStatus) {
            setErrMsg(error.response?.data?.detail);
          } else if (error.originalStatus === 400) {
            setErrMsg(error.response?.data?.detail);
          } else if (error.originalStatus === 401) {
            setErrMsg(error.response?.data?.detail);
          } else {
            setErrMsg("Login Failed");
          }
          navigate("/login");
        }
      };
  return (
    <div className=' '>
        <div className=' bg-gray-600 w-1/2 m-auto mt-12 rounded-md'>
            <form action="" onSubmit={handleSubmit} className=' flex flex-col p-2'>
                <label className=' text-white text-lg'>username*</label>
                <input type='text' placeholder='john' name='username' className='outline-none p-1' onChange={handleUsernameInput}/>
                <label className=' text-white text-lg'>password*</label>
                <input type='password' name='password' className='outline-none p-1' onChange={handlePwdInput}/>
                <div className=' text-center'>
                    <button className=' text-lg font-bold text-white bg-cyan-300 my-3 px-2 py-1 rounded-md'>Login</button>
                </div>
                <div>
                    <p className=' font-semibold text-center'>don't have an account? <Link className=' text-blue-500' to='/register'>Register</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login