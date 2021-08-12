import React, { useState } from "react";
import styles from "../styles/Accordion.module.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const questions = [
    {
      question: "سوال شماره یک",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    },
    {
      question: "سوال شماره دو",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    },
    {
      question: "سوال شماره سه",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    },
    {
      question: "سوال شماره چهار",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    },
  ];
  const toggleHadler = (i) => {
    setSelected(i);
    if (selected === i) {
      return setSelected(null);
    }
  };
  return (
    <>
      {questions.map((item, index) => (
        <div className={styles.title} key={index + 1}>
          <div
            onClick={() => toggleHadler(index)}
            className={`${styles.question}`}
          >
            <span>{item.question}</span>
            <span>{selected === index ? "-" : "+"}</span>
          </div>
          <div
            className={
              selected === index
                ? `${styles.answer} ${styles.show}`
                : styles.answer
            }
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </>
  );
};
export default Accordion;
