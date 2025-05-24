const Header = () => {
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
          <div>
            <h1 className="font-bold text-[24px] font-sans  ">Logo</h1>
          </div>
          <div>
            <ul className="flex gap-4 font-sans">
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex gap-4">
            <div>
              <input type="text" />
            </div>
            <div>icons</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
