import { Col, Image } from "antd";
import { Link } from "react-router-dom";


const ProductCard = ({ item }) => {
    return (
        <Col xs={24} sm={24} md={12} lg={8} xl={6} >
            <Link to={`/products/${item.id}`}>
                <div className="my-2 border-2 hover:opacity-75 cursor-pointer flex flex-col items-center justify-center">
                    <Image preview={false} height={200} src={item.thumbnail} />
                    <div className="flex justify-between p-3 w-full">
                        <h1 className="font-semibold">{item.title}</h1>
                        <h1 className="font-semibold"></h1>
                    </div>
                </div>
            </Link>
        </Col>
    )
};

export default ProductCard;