"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";
import login from "@/lib/login";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { setIsAuthenticated, setJwtToken, setData } = useAuth();
  const router = useRouter();

  const postLogin = (auth, data) => {
    setData(data);
    setIsAuthenticated(true);
    setJwtToken(auth);
    localStorage.setItem("isAuthenticated", true);
    localStorage.setItem("jwtToken", auth);
    localStorage.setItem("data", JSON.stringify(data));
    router.push("/dashboard/business", { scroll: false });
  };

  const handleLoginClick = () => {
    login(postLogin);
  };
  return (<>
      <div className="kmint container">
        <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 text-center">
          <Image src="/logo192.png" height={192} width={192} alt="MintDeals Logo"/>
        <p className="h3 mt-5 my-3 fw-normal">Welcome to MintDeals</p>
        <p className="mb-3 text-body-secondary">
          Remember to Login to Tronlink before proceeding!
        </p>
        <button
          className="btn btn-kmint-blue w-100 py-2"
          type="button"
          onClick={handleLoginClick}
        >
          Business Login
        </button>
        </div>
        <div className="col-md-4"></div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
        />
    </>
  );
};

export default Login;
