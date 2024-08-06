/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import getApiUrl from "../getApiUrl";
import { ClipLoader } from "react-spinners";
const Register = () => {
  interface CustomError extends Error {
    response?: {
      data?: {
        detail?: string
      }
      status?: number
    }
    originalStatus?: number
  }

  const navigate = useNavigate()
  const apiUrl = getApiUrl()
  const [username, setUsername] = useState("")
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [gender, setGender] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setLoading] = useState(false)
  const [successful, setSuccess] = useState(false)

  // const [image, setSelectedImage] = useState([]);
  // const [imageUrl, setImageUrl] = useState(null);
  // const [check, setCheck] = useState(false);

  const handleUsernameInput = (e: any) => setUsername(e.target.value)
  const handleFirstnameInput = (e: any) => setFirstName(e.target.value)
  const handleLastnameInput = (e: any) => setLastName(e.target.value)
  const handlePhone = (e: any) => setPhone(e.target.value)
  const handleGender = (e: any) => setGender(e.target.value)
  const handlePwdInput = (e: any) => setPassword(e.target.value)
  const handleConfirmPwdInput = (e: any) => setConfirmPassword(e.target.value)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // set isloading to true
    setLoading(true)

    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      setLoading(false)
      return
    }

    const formData = new FormData();
    formData.append("user.username", username);
    formData.append("user.password", password);
    formData.append("first_name", first_name); // Add user's first name here
    formData.append("last_name", last_name); // Add user's last name here
    formData.append("phone", phone); // Add user's phone number here
    formData.append("gender", gender); // Add user's gender here
    formData.append("profile_image", selectedImage || "");
    const fileInput = document.getElementById("profilePicture") as HTMLInputElement;
    const file = fileInput.files?.[0];
    // @ts-ignore
    formData.append("profile_image", file);

    try {
      await axios.post(`${apiUrl}/register/`, formData,{ headers: {
        "Content-Type": "multipart/form-data",
      },})

      setUsername("")
      setPassword("")
      setConfirmPassword("")
      setFirstName("")
      setLastName("")
      setPhone("")
      setGender("")
      setError("")
      setLoading(false)
      setSuccess(true)
      if (successful) {
        setTimeout(() => {
          navigate("/login", {
            state: { successMessage: "Registration successful. Please log in." },
          })
        }, 2000)
      }
    } catch (error: any) {
      setLoading(false)
      setSuccess(false)
      //setError(error.response.data.user.username[0])
      setError(error.message)
    }
  }

  // const user = useAppSelector((state) => state.auth.user)

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setSelectedImage(URL.createObjectURL(selectedFile))
    }
  }
  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const selectedFile = event.target.files?.[0];
  //   if (selectedFile) {
  //     setSelectedImage(selectedFile);
  //   }
  // };
  if (error) {
    console.log('This the error', error)
  }
  
  return (
    <section className="d-flex justify-content-center align-items-center flex-column vh-100 ">
      <div className='error-div'>
              {error && (
                <div className='popup'>
                  <p>{error}</p>
                </div>
              )}
              {successful && (
                <div className='popup'>
                  <p>Register successful! Redirecting...</p>
                </div>
              )}    
      </div>
      <div className="card shadow-sm p-4 register-style">
      <form onSubmit={handleSubmit} className=''>
                <p className='head'>Register</p>
                <label className=''>Email*</label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                  <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input
                  type='text'
                  placeholder='example@gmail.com'
                  name='username'
                  className='input1 form-control'
                  onChange={handleUsernameInput}
                  required
                />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                  <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <input
                  type='text'
                  placeholder='Tell number'
                  name='username'
                  className='input1 form-control'
                  onChange={handleUsernameInput}
                  required
                />
                </div>
                <label className=''>Password*</label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                  <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input
                    type='password'
                    placeholder='Type your password'
                    name='password'
                    className='input2 form-control'
                    onChange={handlePwdInput}
                    required
                  />
                </div>
                <label className=''>Confirm Password*</label>
                <div className="input-group mb-1">
                  <span className="input-group-text">
                  <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input
                    type='password'
                    placeholder='Retype your password'
                    name='password'
                    className='input3 form-control'
                    onChange={handlePwdInput}
                    required
                  />
                </div>
                <div className='form-check-inline'>
                <p className="terms-text">
                  <input
                    type="checkbox"
                    name="terms"
                    className="form-check-input"
                    required
                  /> By signing up to create an account, I accept the company's <Link className='Terms' to=''>
                      Terms of Use
                    </Link> and <Link className='Terms' to=''>
                      Privacy Policy
                    </Link>
                </p>
                </div>
                <div className=''>
                  <button
                    className=''
                  >
                    {isLoading ? <ClipLoader size={15} color={"#ffffff"} /> : 'Sign Up'}
                  </button>
                </div>
                <div>
                  <p className=''>
                    Already have an account?{' '}
                    <Link className='signup' to='/login'>
                      Login
                    </Link>
                  </p>
                </div>
              </form>    
      </div>
    </section>
  )
}

export default Register