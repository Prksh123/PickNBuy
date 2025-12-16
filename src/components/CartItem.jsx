import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Button, TextField } from "@mui/material";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  const itemTotal = item.price * item.quantity;


  return (
      <div className="border border-gray-300 my-2 flex flex-col md:flex-row w-full h-auto md:h-20 justify-between items-center gap-4 px-3 py-2">
        <div className="flex flex-col md:flex-row gap-2"> 
        <img src={item.image} className="object-contain w-24 self-center" alt="" />
        <div className="flex flex-col justify-center">
          <p className="font-medium">{item.name}</p>
          <p className="text-sm font-semibold text-gray-700">Price per Unit:₹{item.price}</p>
           <p className="text-sm font-semibold text-gray-700">
            Item Total: ₹{itemTotal}
          </p>

        </div>
      </div>
      <div className="flex items-center gap-3">
      <TextField
        type="number"
        size="small"
        value={item.quantity}
        inputProps={{ min: 0, max: item.availableQuantity, }}
        onKeyDown={(e) => e.preventDefault()}
        onChange={(e) =>
          updateQuantity(item.id, Number(e.target.value))
        }
      />

      <Button
        color="error"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </Button>
      </div>
      </div>
  );
};

export default CartItem;
