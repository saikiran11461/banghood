import React, { useState, useEffect } from "react";
import Collection from "../../Components/Allproducts/Collection";
import "../../styles/Men.css";
import { useDispatch, useSelector } from 'react-redux';
import { mensitems } from "./mensitems";
import { mensData } from "../../Redux/Actions";
// import Sidebar from "../All_Products/sidebar";





const Men = () => {
    // const [menProducts, setMenProducts] = useState([]);
    const dispatch = useDispatch();

    const menProducts = useSelector(state => state.menProducts);
    console.log('menProducts', menProducts);

    const storingData = useSelector(state => state.storingData);
    console.log('storingData', storingData);

    const getProduct = async () => {
        const response = await fetch(
           " https://banghood.herokuapp.com/newproducts"
        );
        const data = await response.json();
        dispatch(mensData(data));
        setMenProducts(data)
        console.log(data)
    };
    useEffect(() => {
        getProduct();
    }, []);



    return (
        <div className="men">
            <div className="page-news">
                <h6>Electronic gadgects</h6>
                <p>
                   
                </p>
            </div>
            <div className="men-page">
                <div className="sidebar">
                    {/* <Sidebar items={ mensitems } /> */}
                </div>
                <div className="collection" >
                    { menProducts.map(product => (
                        <Collection
                            products={product }
                            key={ product._id }
                            id={ product._id }
                            url={ product.url }
                            title={ product.title }
                            price={ product.price }
                        />
                    )) }
                </div>
            </div>
        </div>
    );
};

export default Men;