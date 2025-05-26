import pad from "../assets/gamePad.svg";
import star from "../assets/star.svg";

interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
}

const ExploreProducts = () => {
       const products: Product[] = [
        { id: 1, name: "iPhone 14 Pro", price: "$999", image: pad },
        { id: 2, name: "iPhone 14", price: "$799", image: pad },
        { id: 56, name: "iPhone 13", price: "$699", image: pad },
        { id: 67, name: "iPhone 13", price: "$699", image: pad },
        { id: 67, name: "iPhone 13", price: "$699", image: pad },
        { id: 67, name: "iPhone 13", price: "$699", image: pad },
        { id: 67, name: "iPhone 13", price: "$699", image: pad },
        { id: 67, name: "iPhone 13", price: "$699", image: pad },
    ];
  return (
     <section className="mt-20 sm:mt-36">
                <div className="max-w-full sm:max-w-[1170px] mx-auto px-4 sm:px-0">
                    <div className="flex gap-3 items-center mb-6">
                        <div className="bg-[#DB4444] w-5 h-10 rounded-[4px]"></div>
                        <p className="font-sans text-[#DB4444]">Our Products</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4 sm:gap-0">
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-start sm:items-center">
                            <h1 className="text-2xl sm:text-3xl font-sans font-semibold">
                                Explore Our Products
                            </h1>
                        </div>
                        <button className="bg-[#DB4444] rounded-[4px] text-white py-3 px-8 w-full sm:w-auto">
                            View All
                        </button>
                    </div>
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="w-full flex-shrink-0 group mb-0  md:mb-[60px] "
                            >
                                <div className="relative">
                                    <div className="aspect-[4/5] bg-[#F5F5F5] p-5 sm:p-12 rounded-[4px] flex items-center justify-center">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <button className="cursor-pointer block md:hidden group-hover:flex items-center justify-center text-sm sm:text-base font-sans font-medium py-2 absolute bottom-0 text-center rounded-b-[4px] bg-black text-white w-full transition-all duration-300">
                                        Add To Cart
                                    </button>
                                </div>
                                <h2 className="text-base sm:text-lg font-sans font-medium mt-2">
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
                </div>
            </section>
  )
}

export default ExploreProducts