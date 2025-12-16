import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoArrowLeft } from "react-icons/go";
import { CartContext } from "../contexts/CartContext";
import { FilterContext } from "../contexts/FilterContext";

function Header() {
  const { cart } = useContext(CartContext);
  const { category, setCategory, maxPrice, setMaxPrice } = useContext(FilterContext);
  const location = useLocation();
  const navigate = useNavigate();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  
  const isCart = location.pathname === "/cart";
  return (
    <div className="flex flex-col sm:flex-row  gap-2 justify-center sm:justify-between items-center px-8 min-h-16 h-auto border-b-2 bg-neutral-100">

      <div className="flex gap-5 items-center">
        {isCart && <GoArrowLeft   size={22}
           style={{ strokeWidth: 1.5 }}
           onClick={() => navigate("/")}
         />}
        <h1 className="text-2xl font-bold text-blue-900">PickNBuy</h1>
      </div>

     {!isCart && 
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-2 py-1"
        >
          <option value="All">All</option>
          <option value="Accessories">Accessories</option>
          <option value="Electronics">Electronics</option>
        </select>

        <input
          type="range"
          min="0"
          max="500"
          value={maxPrice}
          className="w-32 accent-blue-500"
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />

        <span>Up to ₹{maxPrice}</span>
        <Link to="/cart" className="font-bold">
          <AiOutlineShoppingCart size="2rem" />
        </Link>
      </div>}
    </div>
  );
}

export default Header;
