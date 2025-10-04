import { useEffect, useState } from "react";
import { getNannies } from "../../services/nannyService";

export default function Nannies() {
  const [nannies, setNannies] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getNannies();
        const arr = Object.entries(data).map(([id, nanny]) => ({
          id,
          ...nanny,
        }));
        setNannies(arr);
      } catch (err) {
        setError("Не вдалося завантажити нянь 😢");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h2>Nannies</h2>
      <div>
        <h2>Список нянь</h2>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {nannies.map((nanny) => (
            <li
              key={nanny.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
