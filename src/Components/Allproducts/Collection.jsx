import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../../styles/Collection.css";
import { handleSingleData } from "../../Redux/Actions";

const Collection = ({ products, url, title,  price, id }) => {
  const passSingleData = () => {
    dispatch(handleSingleData(id));
  };
  const dispatch = useDispatch();
  return (
    <div className="product" onClick={ passSingleData }>
      <Link to={ `/products/${id}` }>
        <div className="item">
          <img src={ url } />
          <p>{ title }</p>
          <p>HK${ price }</p>
        </div>
      </Link>
    </div>
  );
};

export default Collection;