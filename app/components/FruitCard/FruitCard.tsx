import React, { useState } from "react";
import styles from "./FruitCard.module.css";
import Link from "next/link";
import axios from "axios";
export interface Fruit {
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
  description: string;
}
type Props = {
  fruit: Fruit;
};
const FruitCard = (props: Props) => {

  const handleDelete = (id:number) =>{
    axios.delete(`http://10.10.51.4:3000/products/${id}`)
  }

  
  return (
    <div className={styles.fruitCard}>
      <div className={styles.imageWrapper}>
        <img src={props.fruit.image} />
        <div className={styles.iconsWrapper}>
          <div className={styles.iconWrapper}>
            <img src={"/images/pen.svg"} />
          </div>
          <div className={styles.iconWrapper} >
            <img src={"/images/trash.svg"} onClick={()=>handleDelete(props?.fruit.id)}/>
          </div>
        </div>
      </div>
      <div className={styles.fruitDescription}>
        <div className={styles.fruitName}>
          <span className={styles.fruitname}>{props.fruit.title}</span>
          <span className={styles.fruitColor}>{props.fruit.category} </span>
        </div>
        <div>
          <span className={styles.fruitPrice}>{props.fruit.price} </span>
        </div>
      </div>
      <Link
        href={`/product?id=${props.fruit.id}`}
        className={styles.fruitBuyNow}
      >
        <span className={styles.buyNowText}>Buy Now</span>
      </Link>
    </div>
  );
};
export default FruitCard;
