import React, { useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { userBaseUrl } from "../axiosinstance";
const Login = () => {
  const [loginform, setLoginForm] = useState({
    Email: "",
    Password: "",
  });
  const navigate = useNavigate();

  // when the user is loggedin, user cannot access the login page
  const userAuth = localStorage.getItem("userAuth");
  const authUser = userAuth ? JSON.parse(userAuth) : null;

  useEffect(() => {
    if (authUser?.isLogin) {
      navigate("/");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await userBaseUrl.post("/login", loginform);
      if (data.success) {
        toast.success(data.message);
      }
      const authData = {
        isLogin: true,
        token: data?.token,
      };
      if (data?.success) {
        localStorage.setItem("userAuth", JSON.stringify(authData));
        navigate("/");
      }
    } catch (error) {
      console.log("login-err", error);
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
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="Email"
            placeholder="Email"
            value={loginform.Email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            name="Password"
            placeholder="Password"
            value={loginform.Password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
