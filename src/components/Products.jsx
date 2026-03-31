import { use } from "react";
import Card from "./Card";

const Products = ({ productPromise }) => {
    const allProducts = use(productPromise);

    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 " >
            {
                allProducts.map((product) => (
                    <Card key={product.id} product={product} />
                ))
            }
        </div>

    );
}
export default Products;
