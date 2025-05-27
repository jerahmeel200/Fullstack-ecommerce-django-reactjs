import image from '../assets/SideImage.svg';

const SignUp = () => {
    return (
        <section className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
            <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Side Image */}
                <div className="hidden md:block md:w-1/2">
                    <img src={image} alt="Side" className="w-full h-full object-cover" />
                </div>
                {/* Form Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-10 md:px-12">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-2 font-sans">Create an account</h1>
                    <p className="text-base text-gray-600 mb-8 font-sans">Enter your details below</p>
                    <form className="space-y-6">
                        <input
                            type="text"
                            className="border-b border-gray-300 w-full py-2 text-base font-sans bg-transparent focus:outline-none focus:border-[#DB4444] placeholder:text-gray-400"
                            placeholder="Name"
                        />
                        <input
                            type="text"
                            className="border-b border-gray-300 w-full py-2 text-base font-sans bg-transparent focus:outline-none focus:border-[#DB4444] placeholder:text-gray-400"
                            placeholder="Email or Phone Number"
                        />
                        <input
                            type="password"
                            className="border-b border-gray-300 w-full py-2 text-base font-sans bg-transparent focus:outline-none focus:border-[#DB4444] placeholder:text-gray-400"
                            placeholder="Password"
                        />
                        <div className="flex flex-col gap-4 mt-6">
                            <button
                                type="submit"
                                className="bg-[#DB4444] text-white text-base font-sans py-3 rounded-md w-full hover:bg-[#b83232] transition"
                            >
                                Sign Up
                            </button>
                            <button
                                type="button"
                                className="border border-gray-300 flex items-center justify-center gap-3 rounded-md py-3 w-full hover:bg-gray-100 transition"
                            >
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                                <span className="font-sans text-base text-gray-700">Sign up with Google</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;