  
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchProducts } from '../features/productsSlice'
// import { useDispatch } from 'react-redux'
 
 const ProductList = () => {
    const dispatch = useAppDispatch()
    const products = useAppSelector(state => state.products)

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])
   return (
    <div className="grid grid-cols-3 gap-4">
    {products.map(product => (
      <div key={product.id} className="border p-2">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        {/* <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button> */}
      </div>
    ))}
  </div>
   )
 }
 
 export default ProductList