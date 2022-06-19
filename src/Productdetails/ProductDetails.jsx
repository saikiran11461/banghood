import styles from "./ProductDetail.module.css";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiHeartLine } from 'react-icons/ri';
import { addToCart } from "../Redux/Actions";
export const ProductDetails = () => {

  const Data = useSelector(state => state.singleData);
  console.log("singleData", Data);
  const dispatch = useDispatch();

  let singleData = Data;

  const addToBag =() => {
    dispatch(addToCart(singleData))
    console.log(singleData,'bag')
    alert(`${singleData.title} Added to the Cart`)
  }

  return (
    <div className={styles.container}>
      <div className={styles.left} >
        <img src={ singleData.url } alt="" />
      </div>
      <div className={styles.right}>
        <p> { singleData.title }</p>
        <p><span>${ singleData.price }</span> (Import duties included)</p>
        <p>Size guide</p>
        <select>
          <option>Select Size Off-White Standard</option>
          <option>XXS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
          <option>XXL</option>
        </select>
        <br />

        <div className={styles.add}>
          <button className={ styles.save } onClick={ addToBag}>
            Add to Bag    </button>

          {/* <button>Wishlist <RiHeartLine className={styles.heart} /></button> */}
        </div>
        <br />
        <p>Estimated delivery </p>
        <p>May 12 - May 20</p>
        <div>
          <img src="https://cdn-images.farfetch-contents.com/18/36/05/23/18360523_39483405_80.jpg" alt="" />
        </div>
        <p><b>Exclusive student offer | 10% off orders over $200</b> </p>

      </div>
    </div>

  );
};