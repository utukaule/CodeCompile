import React, { useState, useEffect } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { userBaseUrl } from "../axiosinstance";
const Signup = () => {
  const [signupForm, setsignupForm] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  });
  console.log(signupForm);
  const navigate = useNavigate();
  const userAuth = localStorage.getItem("userAuth");
  const authUser = userAuth ? JSON.parse(userAuth) : null;

  useEffect(() => {
    if (authUser?.isLogin) {
      navigate("/");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsignupForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await userBaseUrl.post("/create", signupForm);

      if (data.success) {
        toast.success(data.message);
      }
      navigate("/login");
    } catch (error) {
      const errorMessage = error?.response?.data;
      if (!errorMessage?.success) {
        toast.error(errorMessage.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Toaster />
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="FirstName"
            placeholder="First Name"
            value={signupForm.FirstName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            name="LastName"
            placeholder="Last Name"
            value={signupForm.LastName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            name="Email"
            placeholder="Email"
            value={signupForm.Email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="password"
            name="Password"
            placeholder="Password"
            value={signupForm.Password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
