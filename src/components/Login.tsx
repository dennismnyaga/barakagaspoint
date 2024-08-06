/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { login, selectAuthError, selectAuthLoading, selectIsAuthenticated } from '../features/auths/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
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
        <section className='d-flex justify-content-center align-items-center flex-column vh-100 '>
            <div className='error-div'>
              {errMsg && (
                <div className='popup'>
                  <p>Error! {errMsg}</p>
                </div>
              )}
            </div>
            <div className="card shadow-sm p-4 more-style">
              <form onSubmit={handleSubmit} className=''>
                <p className='head'>Login</p>
                <label className=''>Email/Phone Number *</label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                  <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                  type='text'
                  placeholder='john'
                  name='username'
                  className='input1 form-control'
                  onChange={handleUsernameInput}
                  required
                />
                </div>
                <label className=''>Password *</label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                  <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input
                    type='password'
                    placeholder='password'
                    name='password'
                    className='input2 form-control'
                    onChange={handlePwdInput}
                    required
                  />
                </div>
                <div className='d-flex justify-content-end mb-2'>
                  <Link className='forgot-password' to='/forgot-password'>
                    Forgot Password?
                  </Link>
                </div>
                <div className=''>
                  <button
                    className=''
                    disabled={!canSubmit || isLoading}
                  >
                    {isLoading ? <ClipLoader size={15} color={"#ffffff"} /> : 'LOGIN'}
                  </button>
                </div>
                <div>
                  <p className=''>
                    Don't have an account?{' '}
                    <Link className='signup' to='/register'>
                      SignUp
                    </Link>
                  </p>
                </div>
              </form>
            </div>
        </section>
      );
}

export default Login