import css from "./HomePage.module.css";

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
            <svg width={18} height={0} className={css.iconArrow}></svg>
          </button>
        </div>
        <div className={css.background}>
          <div className={css.textContainer}>
            <div className={css.checkCont}>
              <svg width={30} height={30} className={css.iconCheck}></svg>
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
