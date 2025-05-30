import image from '../assets/SideImage.svg'

const Login = () => {
    return (
         <section className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
            <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Side Image */}
                <div className="hidden md:block md:w-1/2">
                    <img src={image} alt="Side" className="w-full h-full object-cover" />
                </div>
                {/* Form Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-10 md:px-12">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-2 font-sans">Log in to Exclusive</h1>
                    <p className="text-base text-gray-600 mb-8 font-sans">Enter your details below</p>
                    <form className="space-y-6">
                       
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
                         <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                            <button
                                type="submit"
                                className="font-sans cursor-pointer bg-[#DB4444] text-[16px] px-[48px] py-4 text-white rounded-md w-full md:w-auto"
                            >
                                Log in
                            </button>
                            <p className="font-sans text-[16px] text-center md:text-left">
                                <span className="text-[#DB4444] cursor-pointer">Sign up</span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login