/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { login, selectAuthError, selectAuthLoading, selectIsAuthenticated } from '../features/auths/authSlice';
import { ClipLoader } from 'react-spinners';


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const [check, setCheck] = useState(false)
  
  
    const [errMsg, setErrMsg] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
  
    const dispatch = useDispatch();

    
    const error = useSelector(selectAuthError);
    const isLoading = useSelector(selectAuthLoading);
    const isAuthenticated = useSelector(selectIsAuthenticated);
  
    const handleUsernameInput = (e:any) => setUsername(e.target.value);
    const handlePwdInput = (e:any) => setPassword(e.target.value);

    const canSubmit = [username, password].every(Boolean)


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
          // @ts-ignore
          dispatch(login({ username, password }))
      };

      // check on  error
      useEffect(() => {
        if(error) {
          console.log('This the error', error);
          setErrMsg(error);
        }
      }, [error]);

      // update loginstatus // this has no effect because homepage runs automatically
      //useEffect(() => {
        //if(isAuthenticated) {
          //setLoginSuccess(true);
          //setTimeout(() => {
            //setLoginSuccess(false);
           // navigate('/')
         // }, 3000);
       // }
      //}, [isAuthenticated, navigate]);

      return (
        <section className='login-stuffs'>
          <div>
            {errMsg && (
              <div className='popup'>
                <p>Error! {errMsg}</p>
              </div>
            )}
            {loginSuccess && (
              <div className='popup'>
                <p>Login successful! Redirecting...</p>
              </div>
            )}
            <div className='form-container'>
              <form onSubmit={handleSubmit} className='flex flex-col'>
                <label className='text-white text-lg'>Username*</label>
                <input
                  type='text'
                  placeholder='john'
                  name='username'
                  className='outline-none p-1'
                  onChange={handleUsernameInput}
                  required
                />
                <label className='text-white text-lg'>Password*</label>
                <input
                  type='password'
                  name='password'
                  className='outline-none p-1'
                  onChange={handlePwdInput}
                  required
                />
                <div className='text-center'>
                  <button
                    className='text-lg font-bold text-white bg-cyan-300 my-3 px-2 py-1 rounded-md'
                    disabled={!canSubmit || isLoading}
                  >
                    {isLoading ? <ClipLoader size={15} color={"#ffffff"} /> : 'Login'}
                  </button>
                </div>
                <div>
                  <p className='font-semibold text-center'>
                    Don't have an account?{' '}
                    <Link className='text-blue-500' to='/register'>
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      );
}

export default Login