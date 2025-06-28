import styles from "./FiltersSelect.module.css";

type Values = {
  value: string;
  title: string;
}

type Props = {
  onChange: (item: string) => void;
  values: Values[];
}

const FilterSelect = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.selectWrapper}>
        <select
          className={styles.customSelect}
          onChange={(e) => props.onChange(e.target.value)}
        >
          {props.values?.map((item) => (
            <option key={item.value} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterSelect;
