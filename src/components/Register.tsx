/* eslint-disable prettier/prettier */
import axios from "axios"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAppSelector } from "../app/hooks"
import Alert from "@mui/material/Alert"
import Stack from "@mui/material/Stack"
import getApiUrl from "../getApiUrl"

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

    if (password !== confirmPassword) {
      setError("Passwords do not match.")
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
      navigate("/login", {
        state: { successMessage: "Registration successful. Please log in." },
      })
    } catch (error: any) {
      setError(error.response.data.user.username[0])
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
  
  return (
    <div className=" ">
      <div className="w-1/2 bg-slate-500 mx-auto rounded-md ">
        <div>
        {error && (
                <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="error">
                  {error}
                </Alert>
              </Stack>
              )}
          <form
            onSubmit={handleSubmit}
            className="p-3 flex justify-center flex-col" encType="multipart/form-data"
          >
            <div className=" text-center flex justify-center ">
              <label htmlFor="profilePicture" className="cursor-pointer">
                <div className="rounded-full bg-white w-20 h-20 items-center">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Profile"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M5 12l2-2 2 2M15 12l2-2 2 2"></path>
                    </svg>
                  )}
                </div>
                <div className=" text-white text-lg mt-2">Profile Picture</div>
              </label>
              <input required
                type="file"
                id="profilePicture"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
            <div className="flex flex-col p-4 ">
              <label className=" text-white text-lg">username</label>
              <input required
                onChange={handleUsernameInput}
                type="text"
                placeholder="john"
                name="username"
                className=" text-black p-1 outline-none rounded-sm"
              />
              <label className=" text-white text-lg">First name</label>
              <input required
                type="text" name="first_name" onChange={handleFirstnameInput}
                className=" text-black p-1 outline-none rounded-sm"
              />
              <label className=" text-white text-lg">last name</label>
              <input required
                type="text" name="last_name" onChange={handleLastnameInput}
                className=" text-black p-1 outline-none rounded-sm"
              />
              <label className=" text-white text-lg">phone number</label>
              <input required
                type="tel" name="phone" onChange={handlePhone}
                pattern="[0-9]{10}"
                className=" text-black p-1 outline-none rounded-sm"
              />
              <label className=" text-white text-lg">Gender</label>
              <div className="flex gap-2">
                <input required type="radio" name="gender" value="MALE" onChange={handleGender} />
                <label className=" text-white text-lg">Male</label>
                <br />
                <input required type="radio" name="gender" value="FEMALE" onChange={handleGender}  />
                <label className=" text-white text-lg">Female</label>
                <br></br>
              </div>

              <label className=" text-white text-lg">password*</label>
              <input required
                onChange={handlePwdInput}
                type="password"
                name="password"
                className="outline-none p-1"
              />
              <label className=" text-white text-lg">confirm password*</label>
              <input required
                onChange={handleConfirmPwdInput}
                type="password"
                name="password"
                className="outline-none p-1"
              />
            </div>
            <button className=" bg-green-600 py-2 text-xl font-semibold text-white">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register