import React from 'react';
import style from './Footer.module.scss';
export const Footer = () => {
  return (
    <footer className={style.wrapper}>
      <div className={style.social_network}>
        <p>Мы в контакте </p>
        <a href='#'><img className={style.img} src={'./vk.svg'} /></a>
      </div>

      <div className={style.social_network}>
        <p>Мы в твиттере</p>
        <a href='#'> <img className={style.img} src={'./twitter.svg'} /> </a>
      </div>

      <div className={style.social_network}>
        <p>Наш инст</p>
        <a href='#'> <img className={style.img} src={'./inst.svg'} /> </a>
      </div>
    </footer>
  );
};
