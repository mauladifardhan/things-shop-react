import React from "react";
import css from "./hero/Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.h_sides}>
        <span>skin protection cream</span>
        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>Seedily say has suitable disposal and boy. Exercise joy man rejoiced.</span>
        </div>
      </div>
      {/* right sides */}
      <div className={css.wrapper}>
        <div className={css.blueCircle}>
          <img src={HeroImg} alt="" width={600} />
          <div className={css.cart2}>
            <RiShoppingBagFill />
            <div className={css.signup}>
              <span>Best signup offers</span>
              <div className="">
                <BsArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
