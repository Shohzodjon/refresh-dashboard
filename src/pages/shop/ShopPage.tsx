import { FC, useEffect, useRef } from "react";
import { ProductList, userProduct } from "../../assets/data/product";
import { gsap } from "gsap";
import CustomSearchInput from "../../common/static-components/custom-search-input/CustomSearchInput";
import CustomCard from "../../common/static-components/custom-card/CustomCard";
import styles from "./shop_page.module.scss";
import CustomMarketCard from "../../common/static-components/market-card/CustomMarketCard";

const ShopPage: FC = () => {
  // const panelRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section>
      <div className={styles.flex_container}>
        <div className={styles.left_side}>
          <CustomSearchInput plaseholder="Поиск товаров" />
          <div className={styles.wrapper}>
            <div>
              {ProductList.map((item, index) => (
                <CustomCard
                  key={index}
                  ref={addToRefs}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  amount={item.amount}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.right_side}>
          <div>
            <h3>Выберите пользователя</h3>
            <p>Для гостевой продажи оставьте поле пустым!</p>
            <CustomSearchInput plaseholder="Поиск товаров" />
            <div className={styles.right_side_flex}>
              <h3>Проверьте заказ</h3>
              <span>5 позиций</span>
            </div>
            {userProduct.map((item) => {
              return (
                <CustomMarketCard
                  title={item.title}
                  price={item.price}
                  key={item.id}
                />
              );
            })}
          </div>
          <form action="" className={styles.order_form}>
            <label htmlFor="code">Промокод</label>
            <div className={styles.promo_code}>
              <input type="text" id="code" autoComplete="off"/>
              <button type="button">Проверить</button>
            </div>
            <div className={styles.shop_sum}>
              <div>
                <h3>Общая сумма</h3>
                <p>₽ 2 18232329</p>
              </div>
              <ul>
                <li>
                  <p>
                    Товары <span>(x0)</span>
                  </p>
                  <p>₽ 232</p>
                </li>
                <li>
                  <p>
                    Товары <span>(x0)</span>
                  </p>
                  <p>₽ 232</p>
                </li>
              </ul>
            </div>
            <span className={styles.line}></span>
              <button className={styles.btn_payment} type="button">Перейти к выбору способа оплаты</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
