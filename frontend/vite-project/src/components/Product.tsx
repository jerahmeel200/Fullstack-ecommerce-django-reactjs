import { useRef } from "react";
import pad from "../assets/gamePad.svg";
import star from "../assets/star.svg";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const Product = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "forward" | "backward") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "forward" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const products: Product[] = [
    { id: 1, name: "iPhone 14 Pro", price: "$999", image: pad },
    { id: 2, name: "iPhone 14", price: "$799", image: pad },
    { id: 56, name: "iPhone 13", price: "$699", image: pad },
    { id: 67, name: "iPhone 13", price: "$699", image: pad },
    { id: 37, name: "iPhone 13", price: "$699", image: pad },
    { id: 55, name: "iPhone 13", price: "$699", image: pad },
    { id: 22, name: "iPhone 13", price: "$699", image: pad },
    { id: 12, name: "iPhone 13", price: "$699", image: pad },
  ];

  return (
    <section className="mt-[80px] sm:mt-[140px]">
      <div className="max-w-full sm:max-w-[1170px] mx-auto px-4 sm:px-0">
        <div className="flex gap-3 items-center mb-[24px]">
          <div className="bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]"></div>
          <p className="font-sans text-[#DB4444]">Today's</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mb-[24px] gap-4 sm:gap-0">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-start sm:items-center">
            <h1 className="text-[36px] sm:text-[24px] font-sans font-semibold">
              Flash sale
            </h1>
            <h1 className="font-sans text-[20px] sm:text-[32px] font-bold">
              03 : 23 : 19 : 56
            </h1>
          </div>
          <div className="flex gap-[8px]">
            <button
              onClick={() => scroll("backward")}
              className="cursor-pointer rounded-full border-none p-2 bg-gray-400 hover:bg-gray-300 w-8 h-8 sm:w-[46px] sm:h-[46px] sm:p-[11px]"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={() => scroll("forward")}
              className="cursor-pointer rounded-full border-none p-2 bg-gray-400 hover:bg-gray-300 w-8 h-8 sm:w-[46px] sm:h-[46px] sm:p-[11px]"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
        {/* Product List */}
        <div
          ref={scrollRef}
          className="hide-scrollbar flex gap-[16px] sm:gap-[30px] overflow-x-auto scroll-smooth"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[180px] md:w-[270px] flex-shrink-0 group"
            >
              <div className="relative">
                <div className="h-[160px] sm:h-[250px] bg-[#F5F5F5] p-[20px] sm:p-[49px] rounded-[4px] flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto mb-2 object-contain"
                  />
                </div>
                <div className="absolute top-[10px] text-[10px] sm:text-[12px] left-[10px] bg-[#DB4444] px-[8px] sm:px-[12px] py-[2px] sm:py-[4px] rounded-[4px] bg-opacity-50 font-sans text-white">
                  30%
                </div>
                <button className="cursor-pointer block md:hidden group-hover:flex items-center justify-center text-[14px] sm:text-[16px] font-sans font-medium py-[6px] sm:py-[8px] absolute bottom-0 text-center rounded-b-[4px] bg-black text-white w-full transition-all duration-300">
                  Add To Cart
                </button>
              </div>
              <h2 className="text-[14px] sm:text-[16px] font-sans font-medium mt-2">
                {product.name}
              </h2>
              <p className="text-gray-700">{product.price}</p>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={star} alt="star" className="w-4 h-4" />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-[60px]">
          <button className=" cursor-pointer mx-auto bg-[#DB4444] text-white font-sans py-[16px] px-[48px] rounded-[4px] text-[16px] font-medium ">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
