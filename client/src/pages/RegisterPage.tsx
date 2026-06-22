function RegisterPage(){
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
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
                <div className="mt-4">
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
                    placeholder="Create a password"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium mb-2">
                        Confirm Password
                    </label>
                    <input
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
            </div>
           
        </div>
    );
}
export default RegisterPage;