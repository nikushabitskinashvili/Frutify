import React from "react";
import styles from "./Select.module.css";
import FilterSelect from "../Filters/FilterSelect/FilterSelect";

type Values = {
  value: string;
  title: string;
}

type Props =  {
  onChange?: (item : string) => void
  values : Values []
}
const Select = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blackBackground}>
        <div className={styles.fruit}> Fruits</div>
      </div>
      <div className={styles.selectWrapper}>
        <FilterSelect  values={[
          {
            value: 'low-to-high',
            title: 'Price low to high'
          },
          {
            value: 'high-to-low',
            title: 'Price high to low'
          }
        ]} onChange={function (item: string): void {
          throw new Error("Function not implemented.");
        } }/>
      </div>
    </div>
  );
};
export default Select;
