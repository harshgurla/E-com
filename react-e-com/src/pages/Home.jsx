import { useUser } from "../context/Context";
import '../App.css'
import { Link, Outlet } from "react-router-dom";
const Home = () => {

  const { inputRef, setSearchedProduct, searchedProduct } = useUser()

  return (
    <>

      <header>
        <h1> shop </h1>
        <input
          type="text"
          placeholder="search products"
          ref={inputRef}
          value={searchedProduct}
          onChange={(e) => setSearchedProduct(e.target.value)}
        />
        <nav>
          <Link className="btn" to="/home/products">Products</Link>
          <Link className="btn" to="/home/cart">Cart</Link>
        </nav>
      </header>

      <div className="main-container">
        <Outlet />
      </div>
    </>
  )
}

export default Home