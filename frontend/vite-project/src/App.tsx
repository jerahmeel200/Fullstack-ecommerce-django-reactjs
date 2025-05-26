import BestSelling from "./components/BestSelling"
import Categories from "./components/Categories"
import ExploreProducts from "./components/ExploreProducts"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Product from "./components/Product"

 

const App = () => {
  return (
    <div className="">
      <Header/>
      <Hero/>
      <Product/>
      <Categories/>
      <BestSelling/>
      <ExploreProducts/>
    </div>
  )
}

export default App