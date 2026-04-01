import { IoCheckmarkSharp } from "react-icons/io5";
import { toast } from "react-toastify";



const featureList = (features) => {
    return (
        <ul>
            {features.map((feature, index) => (
                <li key={index} className="flex gap-1 items-center"><IoCheckmarkSharp className="text-green-400" /> <span className="text-gray-500 font-medium">{feature}</span></li>
            ))}
        </ul>
    )
}


const Card = ({ product, cartItems, setCartItems, setTotal }) => {

const handleClick = () =>{
    if (!cartItems.find((item) => item.id === product.id)) {
        setCartItems([...cartItems, product]);
        setTotal(cartItems.reduce((acc, item) => acc + item.price, 0) + product.price);
        toast.success(`${product.name} was successfully added to the Cart!`);
    }
}
    return (
        <div className="p-5 space-y-4 shadow-2xl rounded-2xl">
            <div className="flex justify-end ">
                <p className="bg-blue-200 py-1 px-2.5 font-medium rounded-full">{product.tagType}</p>
            </div>
            <img src={product.icon} alt={product.name} className="w-16 h-fit " />
            <h4 className="text-2xl font-bold">{product.name}</h4>
            <p className="text-gray-500">{product.description}</p>
            <p><span className="text-2xl font-bold ">${product.price}</span><span className="text-gray-500">/{product.period}</span></p>
            {featureList(product.features)}
            <button className="vp-gradient py-3 px-4 w-full rounded-full text-white font-bold btn" onClick={handleClick}>Buy Now</button>

        </div>

    );

}
export default Card;

