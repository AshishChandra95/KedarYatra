import { Link } from "react-router-dom";
import Login from "./Login";
export default function Signup(){
    return(
        <div className="text-white h-[94vh] flex items-center justify-center bg-cover">
            <img src="https://www.oyorooms.com/blog/wp-content/uploads/2018/06/DSC_5893-min.jpg" alt="img not found" className="object-cover absolute mix-blend-overlay"/>
            <div className="bg-slate-800  rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative">
                <h1 className="text-4xl font-bold text-center mb-6">Sign-up</h1>
                <form action="">
                    <div className="relative my-4">
                        <input type="text" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                        <label htmlFor="" className="absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 orgin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 ">NAME</label>
                    </div>

                    <div className="relative my-4">
                        <input type="text" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                        <label htmlFor="" className="absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 orgin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 ">E-Mail</label>
                    </div>

                    <div className="relative my-4">
                        <input type="password" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" />
                        <label htmlFor="" className="absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 orgin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 ">PASSWORD</label>
                    </div>
                    <button type="submit" className="w-full mb-4 text-[18px] rounded bg blue-500 py-2 mt-6 bg-blue-600 transition-colors duration-300 ">Sign-up</button>
                </form>
                <Link to="./Login.jsx">Already Account</Link>
            </div>
        </div>
    );
}