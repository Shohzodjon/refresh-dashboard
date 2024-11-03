import { FC ,forwardRef} from "react";
import CustomButton from "../custom-button/CustomButton";
import styles from "./custom_card.module.scss";

export interface CustomCardPropsType {
  img: string;
  title: string;
  price: number;
  amount: number;
}

const CustomCard= forwardRef<HTMLDivElement, CustomCardPropsType>(
  ({ img, title, price, amount }, ref) => {
  return (
    <div className={styles.card} ref={ref}>
      <div className={styles.card_img}>
        <img src={img} alt="card img"  />
      </div>
      <div className={styles.card_info}>
        <h3>{title}</h3>
        <span> ₽ {price} </span>
      </div>
      <div className={styles.overlay}>
        <div>
          <button>В корзину</button>
          <p>Остаток: {amount} шт</p>
        </div>
      </div>
    </div>
  );
});

export default CustomCard;
