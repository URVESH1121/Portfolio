import React, { useState } from "react";
import { useEffect } from "react";
import Krishna from "../../assets/krishna-arjun.png";
import { GitaSlok } from "../../api/GitaSlok";
import "./gita.css";

const Gita = () => {
  const [verse, setVerse] = useState("");
  const [chapter, setChapter] = useState("");
  const [verseNumber, setVerseNumber] = useState("");

  useEffect(() => {
    async function fetchVerse() {
      const { verse, chapter, verseNumber } = await GitaSlok();
      setVerse(verse);
      setChapter(chapter);
      setVerseNumber(verseNumber);
    }
    fetchVerse();
  }, []);

  if (!verse || !chapter || !verseNumber)
    return (
      <div>
        <div className="gradient" />
      </div>
    );

  return (
    <section id="gita">
      <h2>Stop stalking! Start talking.</h2>
      <p>
        If you're being stalked, don't be afraid to ask for help. There are
        people who can help you.
      </p>
      <div className="container gita_container" data-aos="fade-up">
        <img src={Krishna} alt="lord shri krishna" />
        <p
          className="quote-text"
          style={{ fontSize: "medium", fontWeight: "bold" }}
        >
          {verse}
        </p>
        <p
          className="quote-auth"
          style={{ fontSize: "small", fontWeight: "bold" }}
        >
          ~ Bhagavad Gita {chapter} : {verseNumber}
        </p>
      </div>
    </section>
  );
};

export default Gita;
