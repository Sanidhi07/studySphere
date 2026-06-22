import {Link} from "react-router-dom";

function LoginPage(){
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center">
                    Login
                </h1>
                <div className="mt-6">
                    <label className="block text-sm font-medium mb-2">
                        Email
                    </label>
                    <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium mb-2">
                        Password
                    </label>
                    <input 
                    type="password"
                    placeholder="Enter your password"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-6 hover:bg-indigo-700 transition-colors">
                    Login
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Register
                    </Link>
                </p>
            </div>
            
        </div>
    );
}
export default LoginPage;