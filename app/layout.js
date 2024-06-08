"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Main from "./Main.jsx";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./login/Login.jsx";
import Signup from "./login/Signup.jsx";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";


const inter = Inter({ subsets: ["latin"] });

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
    <Route path="" element={<Index />} /> 
    <Route path="about" element={<About />} />
    <Route path="services" element={<Services />} /> 
    <Route path="contact" element={<Contact />} /> 
    <Route path="login" element={<Login />} /> 
    <Route path="signup" element={<Signup />} /> 
    </Route>
  )
)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RouterProvider router={router}/>
        </body> 
    </html>
  );
}
