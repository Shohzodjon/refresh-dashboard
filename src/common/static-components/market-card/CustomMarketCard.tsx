import { FC, useState } from "react";
import trash from "../../../assets/icons/trash.svg";
import PlusIcon from '../../../assets/icons/PlusAdd.svg';
import MinusIcon from '../../../assets/icons/MinusIcon.svg'
import styles from "./market_card.module.scss"

export interface CustomMarketTypes {
  title: string;
  price: number;
}

const CustomMarketCard: FC<CustomMarketTypes> = ({ title, price }) => {

const [count, setCount]=useState(0);

const incrementFunc=()=>{
    setCount((e)=>e+1);
}
const decrimentFunc=()=>{
  if(count==0)return; 
    setCount((e)=>e-1);
}
  return (
    <div className={styles.market_card}>
      <div>
        <h3>{title}</h3>
        <span>₽ {price}</span>
      </div>
      <div>
        <h3>₽ {price}</h3>
        <div className={styles.btn_group}>
          <button><img src={trash} alt="trash" /></button>
          <div>
            <button onClick={decrimentFunc}><img src={MinusIcon} alt="" /></button>
            <span>{count}</span>
            <button  onClick={incrementFunc}><img src={PlusIcon} alt="" width={14} height={14} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomMarketCard;
