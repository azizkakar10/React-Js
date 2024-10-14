import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Row } from "antd";

function Products (){

    const [products , setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((res)=>{
console.log("data=>", res.products);

setProducts(res.products)
});
    },[])

    console.log("products=>",products);
    return(
        
        <div className="container mx-auto">

            <Row gutter={16} justify={"center"}>
            {products.map((data) => (
                <ProductCard key={data.id} item={data}/>
                
                ))};
                </Row>

        </div>
    

    )
};

export default Products;