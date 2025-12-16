import { Card, CardContent, Button, TextField } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../contexts/Cartcontext";

const ProductCard = ({ product }) => {
  const { cart, addToCart, updateQuantity } = useContext(CartContext);

   const cartItem = cart.find((item) => item.id === product.id);

  return (
    <Card className="flex h-80 w-full flex-col rounded-lg bg-neutral-400 px-4 pt-2 shadow-lg">
      <img className="w-5/6 h-36 object-cover self-center rounded-lg" src={product.image} alt={product.name} />
      <CardContent className="flex flex-col w-full items-center justify-center">
        <h2 className="font-bold">{product.name}</h2>
        <p>₹{product.price}</p>
        <p className="mb-2">Quantity available: {product.availableQuantity - (cartItem?.quantity || 0)}</p>
       {!cartItem ? (
         <Button
           variant="contained"
           onClick={() => addToCart(product)}
         >
           Add to Cart
         </Button>
       ) : (
         <TextField
           type="number"
           size="small"
           value={cartItem.quantity}
           inputProps={{ min: 0,max: product.availableQuantity,}}
           onKeyDown={(e) => e.preventDefault()}
           onChange={(e) =>
             updateQuantity(product.id, Number(e.target.value))
           }
         />
       )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
