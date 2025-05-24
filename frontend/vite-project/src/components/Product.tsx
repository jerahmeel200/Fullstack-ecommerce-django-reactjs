import React, { useRef } from "react";
import pad from "../assets/gamePad.svg";
import star from "../assets/star.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <section className="p-4">
      {/* Scroll Buttons */}
      <div className="mt-6 flex w-full items-center justify-center gap-4">
        <button
          onClick={() => scroll("backward")}
          className="cursor-pointer rounded border-none p-2 hover:bg-gray-300"
          aria-label="Scroll left"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll("forward")}
          className="cursor-pointer rounded border-none p-2 hover:bg-gray-300"
          aria-label="Scroll right"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Product List */}
      <div
        ref={scrollRef}
        className="scrollbar-hide mt-6 flex gap-2 overflow-x-auto scroll-smooth"
      >
        {products.map((product) => (
          <div key={product.id} className="p-4 m-2 max-w-[270px] flex-shrink-0">
            <div className="relative">
              <div className="h-[250px]  border p-[49px] rounded-[4px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto mb-2 object-contain"
                />
              </div>
               
              <button
                className="text-[16px] font-sans font-medium py-[8px] absolute bottom-0 text-center rounded-b-[4px] bg-black text-white w-full"
              >
                Add To Cart
              </button>
            </div>

            <h2 className="text-[16px] font-sans font-medium mt-2">
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
    </section>
  );
};

export default Product;
