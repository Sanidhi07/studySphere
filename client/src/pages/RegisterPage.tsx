import {useState} from "react";

function RegisterPage(){
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [confirmPassword, setConfirmPassword]=useState("")
    const [error,setError]=useState("")

    const handleRegister=()=>{
        if(password !== confirmPassword){
            setError("Passwords do not match");
            return;
        }
        setError("");
        console.log("Name:",name);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);

    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center">
                    Register

                </h1>
                <div className="mt-6">
                    <label className="block text-sm font-medium mb-2">
                        Full Name
                    </label>
                    <input 
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                    <p className="mt-4 text-sm text-gray-500">
                        Name: {name}
                    </p>
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium mb-2">
                        Email
                    </label>
                    <input 
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium mb-2">
                        Password
                    </label>
                    <input 
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium mb-2">
                        Confirm Password
                    </label>
                    <input
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                    {
                        error && (
                            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
                        )
                    }
                </div>
                <button onClick={handleRegister}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-6 hover:bg-indigo-700 transition-colors">
                    Register
                </button>
            </div>
           
        </div>
    );
}
export default RegisterPage;