import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MobFooter.scss";
import "../Header/Header.scss";
import BasketIcon from "../../assets/basket-icon.svg";
import Basket from "../Basket/Basket";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const _ = require("lodash");

const MobFooter = () => {
  const showMobFooter = window.innerWidth < 640 ? true : false;
  const [basketVis, setBasketVis] = useState(false);
  const basketList = useSelector((state) => state);
  const [total, setTotal] = useState(0);
  const pathName = useLocation().pathname;
  const [activeItem, setActiveItem] = useState(pathName === "/"? "home" : "catalog");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  useEffect(() => {
    let countTotal = basketList?.map((item) => item.count);
    setTotal(_.sum(countTotal));
  }, [basketList]);

  const showBasket = () => {
    setBasketVis(true);
  };

  const hideBasket = () => {
    setBasketVis(false);
  };

  if (showMobFooter) {
    return (
      <div className="mobFooter">
        <ul className="mobFooter__list container">
          <li className="mobFooter__list-item">
            <Link
              to="/"
              className={`mobFooter__list-link ${
                activeItem === "home" ? "mobFooter__list--active" : null
              }`}
              onClick={() => handleItemClick("home")}
            >
              <svg
                width="20.000000"
                height="20.000000"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  activeItem === "home" ? "mobFooter__svg--active" : null
                }`}
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M6.62 19.25L6.62 13.3C6.62 12.75 7.07 12.3 7.62 12.3L11.17 12.3C11.73 12.3 12.17 12.75 12.17 13.3L12.17 19.25L6.62 19.25Z"
                  stroke="#989898"
                  strokeOpacity="1.000000"
                  strokeWidth="1.500000"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector"
                  d="M18.65 16.1C18.65 17.84 17.31 19.25 15.65 19.25L3.15 19.25C1.49 19.25 0.15 17.84 0.15 16.1L0.15 9.39C0.15 8.44 0.54 7.56 1.23 6.96L7.48 1.47C8.59 0.5 10.21 0.5 11.32 1.47L17.57 6.96C18.26 7.56 18.65 8.44 18.65 9.39L18.65 16.1Z"
                  stroke="#989898"
                  strokeOpacity="1.000000"
                  strokeWidth="1.500000"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mobFooter__list-text">Главная</span>
            </Link>
          </li>
          <li className="mobFooter__list-item">
            <Link
              to="/catalog"
              className={`mobFooter__list-link ${
                activeItem === "catalog" ? "mobFooter__list--active" : null
              }`}
              onClick={() => handleItemClick("catalog")}
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  activeItem === "catalog" ? "mobFooter__svg--active" : null
                }`}
              >
                <path
                  d="M17.34 21.2H7.06C5.92 21.2 5 20.28 5 19.14V4.74994C5 3.60994 5.92 2.68994 7.06 2.68994H17.34C18.48 2.68994 19.4 3.60994 19.4 4.74994V19.14C19.39 20.28 18.47 21.2 17.34 21.2Z"
                  stroke="#989898"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.08984 6.85999H9.11984"
                  stroke="#989898"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.2002 6.85999H16.3102"
                  stroke="#989898"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.08984 12H9.11984"
                  stroke="#989898"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.2002 12H16.3102"
                  stroke="#989898"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.08984 17.14H9.11984"
                  stroke="#989898"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.2002 17.14H16.3102"
                  stroke="#989898"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="mobFooter__list-text">Каталог</span>
            </Link>
          </li>
          <li
            className="mobFooter__list-item"
            onClick={() => handleItemClick("basket")}
          >
            <div
              className={`mobFooter__list-link ${
                activeItem === "basket" ? "mobFooter__list--active" : null
              }`}
            >
              <Basket
                list={basketList}
                close={hideBasket} 
                visible={basketVis}
                classList={basketList ? "mobFooter__basket-cicrle" : null}
              />
              <div onClick={showBasket} className="Header__action_item">
                {total != 0 ? (
                  <div className="Header__action_item_not">{total}</div>
                ) : null}

                <img
                  className="mobFooter__list-img"
                  src={BasketIcon}
                  alt="basket"
                />
                <span className="mobFooter__list-text">Корзина</span>
              </div>
            </div>
          </li>
          <li className="mobFooter__list-item">
            <a
              href="tel:+79886526888"
              className={`mobFooter__list-link ${
                activeItem === "whatsapp" ? "mobFooter__list--active" : null
              }`}
              onClick={() => handleItemClick("whatsapp")}
            >
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs />
                <path
                  d="M14.39 15.89C10.98 15.89 8.21 13.12 8.21 9.71C8.21 8.84 8.91 8.14 9.78 8.14C9.86 8.14 9.95 8.15 10.04 8.16C10.22 8.19 10.4 8.26 10.56 8.35C10.58 8.36 10.6 8.39 10.6 8.41L10.96 10.68C10.96 10.71 10.96 10.74 10.94 10.76C10.74 10.98 10.49 11.13 10.2 11.21L10.07 11.25L10.12 11.38C10.58 12.57 11.53 13.51 12.71 13.98L12.85 14.03L12.88 13.9C12.96 13.61 13.12 13.36 13.34 13.16C13.36 13.14 13.38 13.14 13.4 13.14C13.41 13.14 13.41 13.14 13.41 13.14L15.69 13.5C15.71 13.5 15.74 13.52 15.75 13.54C15.84 13.7 15.9 13.88 15.94 14.06C15.95 14.15 15.96 14.23 15.96 14.32C15.96 15.19 15.25 15.89 14.39 15.89Z"
                  fill="#989898"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  d="M20.44 11.25C20.25 9.17 19.3 7.24 17.76 5.82C16.2 4.39 14.19 3.6 12.08 3.6C7.45 3.6 3.69 7.37 3.69 12C3.69 13.55 4.12 15.06 4.93 16.38L3.12 20.38L8.91 19.77C9.92 20.18 10.98 20.39 12.08 20.39C12.37 20.39 12.66 20.37 12.96 20.34C13.22 20.31 13.49 20.27 13.75 20.22C17.62 19.44 20.45 16 20.47 12.04L20.47 12C20.47 11.74 20.46 11.49 20.44 11.25L20.44 11.25ZM9.13 18.01L5.93 18.35L6.89 16.23L6.7 15.97C6.68 15.96 6.67 15.94 6.65 15.92C5.82 14.77 5.38 13.41 5.38 12C5.38 8.3 8.39 5.3 12.08 5.3C15.54 5.3 18.47 8 18.75 11.44C18.77 11.63 18.78 11.81 18.78 12C18.78 12.05 18.78 12.1 18.78 12.16C18.71 15.25 16.55 17.87 13.53 18.54C13.3 18.59 13.06 18.63 12.83 18.65C12.58 18.68 12.33 18.7 12.08 18.7C11.19 18.7 10.33 18.52 9.52 18.18C9.43 18.15 9.34 18.11 9.26 18.07L9.13 18.01L9.13 18.01Z"
                  fill="#989898"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
              </svg>

              <span className="mobFooter__list-text">WhatsApp</span>
            </a>
          </li>
          <li
            className="mobFooter__list-item"
            onClick={() => handleItemClick("telegram")}
          >
            <a
              href="https://t.me/IgorLad3112"
              target="_blank"
              rel="noreferrer"
              className={`mobFooter__list-link ${
                activeItem === "telegram" ? "mobFooter__list--active" : null
              }`}
            >
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  d="M4.01 12.94C4.04 12.92 4.08 12.9 4.12 12.89C4.73 12.6 5.35 12.34 5.97 12.07C6 12.07 6.06 12.03 6.09 12.02C6.14 12 6.19 11.98 6.24 11.96C6.33 11.92 6.42 11.88 6.51 11.84C6.7 11.76 6.88 11.68 7.06 11.6C7.43 11.45 7.8 11.29 8.17 11.13C8.9 10.82 9.64 10.5 10.38 10.19C11.11 9.87 11.85 9.55 12.59 9.24C13.32 8.93 14.06 8.61 14.8 8.29C15.53 7.98 16.27 7.66 17.01 7.35C17.17 7.28 17.35 7.17 17.52 7.14C17.67 7.12 17.81 7.07 17.96 7.04C18.24 6.98 18.55 6.96 18.82 7.08C18.92 7.12 19 7.18 19.07 7.25C19.41 7.59 19.37 8.14 19.29 8.62C18.79 11.93 18.29 15.25 17.78 18.57C17.71 19.02 17.62 19.52 17.26 19.81C16.96 20.05 16.52 20.08 16.15 19.98C15.77 19.87 15.44 19.66 15.12 19.44C13.77 18.55 12.42 17.66 11.08 16.77C10.76 16.55 10.4 16.28 10.41 15.89C10.41 15.66 10.54 15.45 10.69 15.27C11.86 13.74 13.54 12.69 14.8 11.24C14.98 11.03 15.12 10.66 14.87 10.54C14.73 10.47 14.56 10.57 14.43 10.66C12.77 11.81 11.11 12.97 9.45 14.12C8.91 14.5 8.34 14.88 7.69 14.98C7.1 15.06 6.52 14.9 5.95 14.73C5.48 14.59 5 14.45 4.53 14.3C4.28 14.22 4.02 14.14 3.83 13.96C3.64 13.79 3.53 13.49 3.64 13.25C3.72 13.11 3.86 13.01 4.01 12.94L4.01 12.94Z"
                  fill="#989898"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
              </svg>

              <span className="mobFooter__list-text">Telegram</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
};

export default MobFooter;
