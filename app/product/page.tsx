"use client";
import styles from "./product.module.css";
import { fruits } from "../../public/CONSTS/Fruit";
import { useParams, useSearchParams } from "next/navigation";
import Button from "../components/Button/Button";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Fruit } from "../components/FruitCard/FruitCard";

const product = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [product,setProduct] = useState <Fruit>()

  useEffect (() => {
    axios.get(`http://10.10.51.4:3000/products/${id}`)
    .then(result => {
      setProduct(result.data)
    })
  },[])
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.fruitImage}>
        <img src={product?.image} alt="xili" />
        <div className={styles.iconsWrapper}>
          <div className={styles.iconWrapper}>
            <img src={"/images/pen.svg"} />
          </div>
          <div className={styles.iconWrapper}>
            <img src={"/images/trash.svg"} />
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.descriptionWrapper}>
          <div className={styles.nameAndDescription}>
            <div className={styles.name}>{product?.id}</div>
            <div className={styles.descriptionText}>
              {product?.description}
            </div>
          </div>
          <div className={styles.price}>{product?.price}</div>
        </div>
        <div className={styles.button}>
          <Button text="Buy Now" />
        </div>
      </div>
    </div>
  );
};
export default product;
