import { Image } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ProductDetail (){

    const {id} = useParams();
    const [product , setProduct] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
.then(res => res.json())
.then((res) => setProduct(res));
    },[])
    console.log(product);
    return(
        <div className="container ">
            <Image preview={false} src={product.thumbnail} height={400} width={400}  />
        <h1 className="text-5xl font-mono font-bold my-10">{product.title}</h1>
        </div>
    )
};

export default ProductDetail;