import css from "./NannyCard.module.css";
// import { getNannies } from "../../services/nannyService";
// import { useEffect, useState } from "react";

export default function NannyCard({ nanny }) {
  //   const [nannies, setNannies] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const data = await getNannies();
  //         const arr = Object.entries(data).map(([id, nanny]) => ({
  //           id,
  //           ...nanny,
  //         }));
  //         setNannies(arr);
  //       } catch (err) {
  //         setError("Не вдалося завантажити нянь 😢");
  //       } finally {
  //         setLoading(false);
  //       }
  //     })();
  //   }, []);

  //   if (loading) return <p>Завантаження...</p>;
  //   if (error) return <p>{error}</p>;

  return (
    <div>
      <div className={css.card}>
        <img
          src={nanny.avatar_url}
          alt={nanny.name}
          width="100%"
          style={{ borderRadius: "10px" }}
        />
        <h3>{nanny.name}</h3>
        <p>
          <b>Освіта:</b> {nanny.education}
        </p>
        <p>
          <b>Досвід:</b> {nanny.experience}
        </p>
        <p>
          <b>Ціна:</b> {nanny.price_per_hour}$ / год
        </p>
      </div>
    </div>
  );
}
