import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { Modal, Button, Box, Typography } from "@mui/material";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOpen = () => {
    setOpen(true);
    clearCart();
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <div className="p-4 w-full min-h-screen bg-gray-100 rounded flex flex-col md:flex-row justify-normal md:justify-evenly">
      <div className="w-full md:w-2/4 ">

      {cart.length === 0 && <p className="text-xl text-center">Cart is empty</p>}

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      </div>
      {cart.length != 0 && 
      <div className="w-full sm:w-2/6 h-28 bg-neutral-100 flex items-center justify-center flex-col gap-4">
        <h2 className="font-bold text-2xl text-center">Total Bill: ₹{total}</h2>
        <Button onClick={handleOpen} variant="contained">Checkout</Button> 
      </div>}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className=" bg-white rounded-md absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2rounded-lg shadow-xlp-6 w-80 text-center flex flex-col itmes-center justify-center gap-4 py-5">
          <Typography id="modal-modal-title" variant="h5" component="h1" className="font-extrabold text-blue-900">
            Order Confirmed.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Your order has been placed successfully.
          </Typography>
          <Button variant="contained" className="w-2/5 self-center text-md" onClick={handleClose}>
            Ok
          </Button>
        </Box>
      </Modal>
      </div>
  );
};

export default Cart;
