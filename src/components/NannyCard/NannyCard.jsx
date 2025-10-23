import css from "./NannyCard.module.css";
import { useState } from "react";
import Icon from "../Icon/Icon";

export default function NannyCard({ nanny }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false);

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
                    <Icon
                      className={css.iconLocation}
                      name="map-pin"
                      size={16}
                    />
                    <p className={css.infoText}>{nanny.location}</p>
                  </li>
                  <li>
                    <Icon className={css.iconStar} name="star" size={16} />
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
                  <Icon
                    className={css.iconHeart}
                    name={isFavorite ? "heart-hover" : "heart"}
                    size={26}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className={css.tags}>
            <ul className={css.tagsList}>
              <li>
                <div className={css.itemContainer}>
                  <p className={css.greyText400weight}>
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
                  <p className={css.greyText400weight}>
                    Experience:{" "}
                    <span className={css.itemText}>{nanny.experience}</span>
                  </p>
                </div>
              </li>

              <li>
                <div className={css.itemContainer}>
                  <p className={css.greyText400weight}>
                    Kids Age:{" "}
                    <span className={css.itemText}>{nanny.kids_age}</span>
                  </p>
                </div>
              </li>

              <li>
                <div className={css.itemContainer}>
                  <p className={css.greyText400weight}>
                    Characters:{" "}
                    <span className={css.itemText}>
                      {nanny.characters.map((w) => w.trim()).join(", ")}
                    </span>
                  </p>
                </div>
              </li>

              <li>
                <div className={css.itemContainer}>
                  <p className={css.greyText400weight}>
                    Education:{" "}
                    <span className={css.itemText}>{nanny.education}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <p className={css.greyText400weight}>{nanny.about}</p>

          <button
            className={`${css.readMoreBtn} ${isExpanded ? css.hidden : ""}`}
            onClick={() => setIsExpanded(true)}
          >
            Read more
          </button>

          {isExpanded && (
            <div className={css.reviewsContainer}>
              <ul>
                {nanny.reviews.map((review, index) => (
                  <li key={index} className={css.reviewItem}>
                    <div className={css.reviewerInfo}>
                      <div className={css.reviewerCircle}>
                        <span className={css.reviewerFirstLetter}>
                          {review.reviewer[0]}
                        </span>
                      </div>
                      <div className={css.reviewerInfoText}>
                        <p className={css.reviewAuthor}>{review.reviewer}</p>
                        <p className={css.reviewRating}>
                          <Icon
                            className={css.iconStar}
                            name="star"
                            size={16}
                          />
                          {review.rating.toFixed(1)}
                        </p>
                      </div>
                    </div>
                    <p className={css.greyText400weight}>{review.comment}</p>
                  </li>
                ))}
              </ul>

              <button className={css.appointmentBtn}>
                Make an appointment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
