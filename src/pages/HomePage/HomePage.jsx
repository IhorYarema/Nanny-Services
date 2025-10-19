import css from "./HomePage.module.css";
import Icon from "../../components/Icon/Icon";

export default function HomePage() {
  return (
    <section className={css.section}>
      <div className={css.sectionContainer}>
        <div className={css.colorBg}>
          <h1 className={css.mainTitle}>Make Life Easier for the Family:</h1>
          <h2 className={css.lowerTitle}>
            Find Babysitters Online for All Occasions
          </h2>
          <button className={css.btn}>
            Get started
            <Icon className={css.iconArrow} name="arrow" />
          </button>
        </div>
        <div className={css.background}>
          <div className={css.textContainer}>
            <div className={css.checkCont}>
              <Icon className={css.iconFecheck} name="fecheck" />
            </div>
            <div className={css.textLines}>
              <p className={css.text}>Experienced nannies</p>
              <p className={css.number}>15,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
