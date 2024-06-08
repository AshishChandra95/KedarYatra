"use client"
import React from "react";
import { Link , NavLink } from "react-router-dom";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../login/Login";
import Signup from "../login/Signup";
export default function Header() {
  return (
    <header className="flex justify-around h-20 pt-5 text-lg font-bold">
        <div>
            <h1>Kedar<span className="text-rose-700">Yatra</span></h1>
        </div>

        <div >
            <ul className="flex justify-around ">
                <li className="mr-4">
                    <NavLink to="/"
                    className={({isActive})=>`${isActive ? "text-orange-700" :"text-gray-700"}`}
                    >Home</NavLink></li>

                <li className="mr-4">
                    <NavLink to="./about"
                    className={({isActive})=>`${isActive ? "text-orange-700" :"text-gray-700"}`}
                    >About</NavLink></li>

                <li className="mr-4">
                    <NavLink to="./services"
                    className={({isActive})=>`${isActive ? "text-orange-700" :"text-gray-700"}`}
                    >Service</NavLink></li>

                <li className="mr-4"><NavLink to="./contact"
                    className={({isActive})=>`${isActive ? "text-orange-700" :"text-gray-700"}`}
                    >Contact</NavLink></li>
            </ul>
        </div>

        <div className="flex justify-around align-center list-none">
            <li className="mr-5"><Link to="./login"
                        className={({isActive})=>`${isActive ? "text-orange-700" :"text-gray-700"}`}
                        >Log-in</Link></li>
            <li><Link to="./signup"
                    className={({isActive})=>`${isActive ? "text-orange-700" :"text-gray-700"}`}
                    >Sign-up</Link></li>
        </div>
    </header>
  );
}
