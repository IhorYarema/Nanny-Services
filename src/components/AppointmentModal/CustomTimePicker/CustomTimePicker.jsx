import { useState, useRef, useEffect } from "react";
import css from "./CustomTimePicker.module.css";
import Icon from "../../Icon/Icon";

export default function CustomTimePicker({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value || "");
  const inputRef = useRef(null);

  const times = [];
  for (let h = 9; h <= 22; h++) {
    times.push(`${String(h).padStart(2, "0")}:00`);
    times.push(`${String(h).padStart(2, "0")}:30`);
  }

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  const handleSelect = (time) => {
    setInputValue(time);
    onChange(time);
    setIsOpen(false);
  };

  const handleInput = (e) => {
    const input = e.target;
    const start = input.selectionStart;
    const end = input.selectionEnd;

    let val = e.target.value.replace(/[^\d]/g, "");
    if (val.length > 4) val = val.slice(0, 4);

    let formatted = val;
    if (val.length <= 2) {
      let h = val.padStart(2, "0");
      if (Number(h) > 22) h = "22";
      formatted = h;
      onChange(`${h}:00`);
    } else {
      let h = val.slice(0, 2);
      let m = val.slice(2, 4).padEnd(2, "0");
      if (Number(h) > 22) h = "22";
      if (Number(m) > 59) m = "59";
      formatted = `${h}:${m}`;
      onChange(formatted);
    }

    setInputValue(formatted);

    setTimeout(() => {
      input.setSelectionRange(start, end);
    }, 0);
  };

  useEffect(() => {
    const close = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <div className={css.timeInputWrapper} ref={inputRef}>
      <div className={css.inputWrapper}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInput}
          onClick={() => setIsOpen((prev) => !prev)}
          className={css.input}
          placeholder="00:00"
        />
        <Icon name="clock" size={20} className={css.icon} />
      </div>
      {isOpen && (
        <ul className={css.dropdown}>
          {times.map((t) => (
            <li
              key={t}
              className={`${css.option} ${t === inputValue ? css.active : ""}`}
              onClick={() => handleSelect(t)}
            >
              {t}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
