 

const Cart = () => {
  return (
   <div className="max-w-[1170px] mx-auto px-4 py-[10px]   space-y-6">
      <div className="text-sm text-gray-500">Home / <span className="text-black">Cart</span></div>

      {/* Cart Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {/* Product 1 */}
            <tr className="border-t">
              <td className="p-4 flex items-center space-x-2">
                <img src="https://i.imgur.com/O1RmJDR.png" alt="LCD Monitor" className="w-12 h-12" />
                <span>LCD Monitor</span>
              </td>
              <td className="p-4">$650</td>
              <td className="p-4">
                <select className="border rounded px-2 py-1">
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </select>
              </td>
              <td className="p-4">$650</td>
            </tr>

            {/* Product 2 */}
            <tr className="border-t">
              <td className="p-4 flex items-center space-x-2">
                <img src="https://i.imgur.com/F1KfeTb.png" alt="Gamepad" className="w-12 h-12" />
                <span>H1 Gamepad</span>
              </td>
              <td className="p-4">$550</td>
              <td className="p-4">
                <select className="border rounded px-2 py-1">
                  <option>01</option>
                  <option selected>02</option>
                  <option>03</option>
                </select>
              </td>
              <td className="p-4">$1100</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <button className="border px-4 py-2 rounded">Return To Shop</button>
        <button className="border px-4 py-2 rounded">Update Cart</button>
      </div>

      {/* Coupon and Total Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        {/* Coupon Code */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border px-4 py-2 rounded w-full sm:w-auto"
          />
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="border p-4 rounded-md w-full sm:max-w-sm">
          <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-semibold border-t pt-2">
            <span>Total:</span>
            <span>$1750</span>
          </div>
          <button className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded">
            Process to checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart