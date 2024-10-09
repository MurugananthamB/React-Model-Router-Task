// components/ProductDetails.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../services/ApiService";
import { VscLoading } from "react-icons/vsc";


const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProducts().then((data) => {
      const selectedProduct = data.find((item) => item.id === parseInt(id));
      setProduct(selectedProduct);
    });
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center text-3xl h-screen">
        <VscLoading />
      </div>
    );
  }

  return (
    <div className="pt-10 flex flex-col lg:flex-row justify-around items-center lg:items-start  gap-12 font-poppins px-12 lg:px-24 ">
      <img src={product.image} alt={product.title} className="lg:h-72 lg:w-72 h-60 w-60  " />
      <div className="space-y-6">
        <h1 className="lg:text-3xl font-bold  text-xl">{product.title}</h1>
        <p className="text-justify">{product.description}</p>
        <p className="text-xl font-bold bg-blue-900 rounded-lg text-white inline-block px-6 py-2">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
