import css from "./NannyCard.module.css";
import { useState } from "react";

export default function NannyCard({ nanny }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className={css.card}>
      <div className={css.up}>
        <div className={css.imgWrapper}>
          <div className={css.greenCircle}></div>
          <img
            className={css.img}
            src={nanny.avatar_url}
            alt={nanny.name}
            width="100%"
            style={{ borderRadius: "10px" }}
          />
        </div>

        <div className={css.right}>
          <div className={css.rightUp}>
            <div className={css.nameContainer}>
              <p className={css.greyText}>Nanny</p>
              <h3 className={css.name}>{nanny.name}</h3>
            </div>

            {/* Upper Block rating loc ... */}
            <div className={css.rightUpCorner}>
              <div className={css.upperInfoContainer}>
                <ul className={css.upperInfoList}>
                  <li>
                    <p className={css.infoText}>{nanny.location}</p>
                  </li>
                  <li>
                    <p className={css.infoText}>{"Rating: " + nanny.rating}</p>
                  </li>
                  <li>
                    <p className={css.infoText}>
                      Price / 1 hour:{" "}
                      <span className={css.price}>
                        {" "}
                        {nanny.price_per_hour + "$"}
                      </span>
                    </p>
                  </li>
                </ul>
                <button
                  onClick={handleFavoriteClick}
                  className={`${css.heartBtn} ${
                    isFavorite ? css.heartActive : ""
                  }`}
                >
                  {/* <Heart /> */}
                </button>
              </div>
            </div>
          </div>

          <div className={css.tags}>
            <ul>
              <li>
                <div className={css.itemContainer}>
                  <p className={css.greyText}>
                    Age:{" "}
                    <span className={css.itemText}>
                      {new Date().getFullYear() -
                        new Date(nanny.birthday).getFullYear() -
                        (new Date() <
                        new Date(
                          new Date().getFullYear(),
                          new Date(nanny.birthday).getMonth(),
                          new Date(nanny.birthday).getDate()
                        )
                          ? 1
                          : 0)}
                    </span>
                  </p>
                </div>
              </li>

              <li>
                <div className={css.itemContainer}>
                  <p className={css.greyText}>
                    Experience:{" "}
                    <span className={css.itemText}>{nanny.experience}</span>
                  </p>
                </div>
              </li>

              <li>
                <div className={css.itemContainer}>
                  <p className={css.greyText}>
                    Kids Age:{" "}
                    <span className={css.itemText}>{nanny.kids_age}</span>
                  </p>
                </div>
              </li>

              <li>
                <div className={css.itemContainer}>
                  <p className={css.greyText}>
                    Characters:{" "}
                    <span className={css.itemText}>
                      {nanny.characters.map((w) => w.trim()).join(", ")}
                    </span>
                  </p>
                </div>
              </li>

              <li>
                <div className={css.itemContainer}>
                  <p className={css.greyText}>
                    Education:{" "}
                    <span className={css.itemText}>{nanny.education}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <p className={css.greyText}>{nanny.about}</p>

          <button className={css.readMoreBtn}>Read more</button>
        </div>
      </div>
    </div>
  );
}
