import { toast } from 'react-toastify';
import { BsCart } from "react-icons/bs";


const Cart = ({ cartItems, setCartItems, total, setTotal }) => {
    const handleDelete = (item) => {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
        setTotal(total - item.price);
        toast.error(`${item.name} was removed from the Cart.`);

    }

    return (
        <div className='mt-10 sm:p-10 space-y-6'>
            <p className='font-bold text-2xl'>Your Cart</p>{
                cartItems.length > 0 ? (
                    <>
                        <div>{
                            cartItems.map(item => {
                                return (
                                    <div className='sm:p-5 flex justify-between items-center'>
                                        <div className='flex  items-center gap-4'>
                                            <img className='w-16  h-fit' src={item.icon} alt={item.name} />
                                            <div className=''>
                                                <p className='text-xl font-semibold '>{item.name}</p>
                                                <p className='font-medium text-gray-500'>${item.price}</p>
                                            </div>
                                        </div>
                                        <button className='text-red-500 font-bold cursor-pointer btn' onClick={() => handleDelete(item)}>
                                            Remove
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className=''>Total:</p>
                            <p className='font-bold text-2xl '>${total.toFixed(2)}</p>
                        </div>
                        <button className='btn vp-gradient p-4 w-full rounded-full font-bold text-white ' onClick={() => { setCartItems([]); toast("Checkout was successful!"); }}>Proceed to Checkout</button>
                    </>) : (
                    <>
                        <BsCart className='w-16 h-16 mx-auto' />
                        <p className='text-center text-gray-500'>Your cart is empty.</p>
                    </>
                )}
        </div>

    );
};

export default Cart;