import NanniesList from "../../components/NanniesList/NanniesList";
import css from "./Nannies.module.css";

export default function Nannies() {
  return (
    <section className={css.section_nannies}>
      <NanniesList />
    </section>
  );
}
