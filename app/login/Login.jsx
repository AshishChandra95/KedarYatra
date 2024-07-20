import { Link } from "react-router-dom";
export default function Login(){
    return(
        <div className="text-white h-[95vh] flex items-center justify-center bg-cover">
            <img src="https://img.veenaworld.com/wp-content/uploads/2022/11/5-Uncharted-Villages-of-Uttarakhand.jpg" alt="img not found" className="object-cover absolute mix-blend-overlay"/>
            <div className="bg-slate-800  rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative">
                <h1 className="text-4xl font-bold text-center mb-6">Login</h1>
                <form action="">
                    <div className="relative my-4">
                        <input type="text" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                        <label htmlFor="" className="absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 orgin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 ">USERNAME</label>
                    </div>

                    <div className="relative my-4">
                        <input type="password" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" />
                        <label htmlFor="" className="absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 orgin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 ">Your Password</label>
                    </div>
                    <button type="submit" className="w-full mb-4 text-[18px] rounded bg blue-500 py-2 mt-6 bg-blue-600 transition-colors duration-300 ">Log-in</button>
                </form>
                <Link to="./Signup.jsx">Create New Account</Link>
            </div>
        </div>
    );
}