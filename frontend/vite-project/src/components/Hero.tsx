import { ArrowRight } from "lucide-react";
import apple from "../assets/apple.svg";
import iphone from "../assets/iphone.png";
const Hero = () => {
  return (
    <section className="w-full bg-black ">
      <div className="max-w-[1170px] mx-auto text-white flex justify-between items-center py-[54px] px-[68px] flex-col md:flex-row">
        <div>
          <div className="flex gap-4 items-center mb-[20px]">
            <img
              src={apple}
              alt="iPhone 14 Series"
              // className="w-full h-auto"
            />
            <p className="text-[16px] font-sans">iPhone 14 Series</p>
          </div>
          <h1 className="text-[48px] font-sans font-semibold w-[294px]  mb-[20px]">Up to 10% off Voucher</h1>
          <div className="flex gap-4 items-center">
            <button className="underline font-sans text-[16px]">Shop Now</button>
            <ArrowRight />
          </div>
        </div>
        <div>
          <img
            src={iphone}
            alt="iPhone 14 Series" 
            className="w-full h-auto max-w-[500px] max-h-[400px] object-cover hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
