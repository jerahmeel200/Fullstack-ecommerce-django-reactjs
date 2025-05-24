import { Heart, Menu, Search, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section className="bg-black text-white text-center mx-auto text-[10px] md:text-[14px] py-[12px] font-sans">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span>ShopNow</span>
        </p>
      </section>
      <section className="border-b border-gray-300">
        <div className="flex justify-between items-center bg-white text-black max-w-[1170px] mx-auto px-4 py-[10px] ">
          <div className="flex gap-4 items-center">
            <h1 className="font-bold text-[24px] font-sans  ">Logo</h1>
            {isOpen ? (
              <X onClick={handleMenuToggle} />
            ) : (
              <Menu onClick={handleMenuToggle} className="md:hidden" />
            )}
          </div>
          <div className="hidden md:flex">
            <ul className="flex gap-4 font-sans">
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex gap-4 items-center">
            <div className="relative  items-center hidden md:flex">
              <input
                type="text"
                className="px-[12px] py-[7px] pr-10"
                placeholder="what are you looking for?"
                aria-label="Search"
              />
              <Search
                className="absolute right-3  pointer-events-none"
                size={20}
              />
            </div>
            <div className="flex gap-4">
              <Heart />
              <ShoppingCart />
            </div>
          </div>
        </div>
      </section>

      {/* hambuger mobile menu */}
      {isOpen && (
        <section className="w-full bg-yellow-800 p-[40px]">
          <div className="md:hidden">
            <ul className="flex flex-col gap-4 font-sans">
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <div className="relative flex items-center md:hidden">
              <input
                type="text"
                className="px-[12px] py-[7px] pr-10 border w-full"
                placeholder="what are you looking for?"
                aria-label="Search"
              />
              <span className="absolute right-3">
                <Search className="pointer-events-none" size={20} />
              </span>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Header;
