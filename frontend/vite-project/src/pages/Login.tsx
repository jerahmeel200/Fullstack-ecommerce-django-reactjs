import image from '../assets/SideImage.svg'

const Login = () => {
    return (
        <section className="flex justify-center items-center min-h-screen px-4">
            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1170px] py-8 bg-white rounded-lg  shadow-md  md:shadow-none">
                <div className="hidden md:block md:w-1/2">
                    <img src={image} alt="" className="w-full h-auto" />
                </div>
                <div className="w-full md:w-1/2 px-4 sm:px-8 md:px-[48px] lg:px-[64px] xl:px-[129px]">
                    <h1 className="text-[28px] md:text-[36px] font-sans font-medium">Log in to Exclusive</h1>
                    <p className="text-[14px] md:text-[16px] font-sans">Enter your details below</p>
                    <form className="mt-8 md:mt-[48px]">
                        <input
                            type="text"
                            className="mb-6 md:mb-[40px] border-b w-full max-w-[370px] border-gray-300 outline-none text-[16px] placeholder:text-[16px] font-sans bg-transparent"
                            placeholder="Email or Phone Number"
                        />
                        <input
                            type="password"
                            className="mb-6 md:mb-[40px] border-b w-full max-w-[370px] border-gray-300 outline-none text-[16px] placeholder:text-[16px] font-sans bg-transparent"
                            placeholder="Password"
                        />
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                            <button
                                type="submit"
                                className="font-sans cursor-pointer bg-[#DB4444] text-[16px] px-8 py-4 text-white rounded-md w-full md:w-auto"
                            >
                                Log in
                            </button>
                            <p className="font-sans text-[16px] text-center md:text-left">
                                Don't have an account?{' '}
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