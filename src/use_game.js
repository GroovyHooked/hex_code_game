import { useState, useEffect, useRef } from "react";

export const useGame = () => {
  const [color, setColor] = useState("");
  const [colorFake1, setColorFake1] = useState("");
  const [colorFake2, setColorFake2] = useState("");
  const guess1Ref = useRef("");
  const guess2Ref = useRef("");
  const guess3Ref = useRef("");
  const replayRef = useRef("");

  useEffect(() => {
    setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
    setColorFake1("#" + Math.floor(Math.random() * 16777215).toString(16));
    setColorFake2("#" + Math.floor(Math.random() * 16777215).toString(16));
  }, []);

  useEffect(() => {
    setAnswersRandomly();
  }, [colorFake2]);

  const setAnswersRandomly = () => {
    const refs = [guess1Ref, guess2Ref, guess3Ref];
    const random = Math.round((Math.random() * 10) / 4);
    const winner = refs[random];
    refs.splice(random, 1);
    winner.current.innerText = color;
    refs[0].current.innerText = colorFake1;
    refs[1].current.innerText = colorFake2;
  };

  const handleAnswer = (e) => {
    const answer = e.target.innerText;
    if (answer === color) {
      if (!e.target.className.includes("good-answer")) {
        e.target.className += " good-answer";
        setTimeout(() => {
            window.location.reload(false);
        }, 300)
      }
    } else {
      if (!e.target.className.includes("bad-answer")) {
        e.target.className += " bad-answer";
    }
  };
  }
  const refreshPage = () => {
    window.location.reload(false);
  };

  return {
    color,
    guess1Ref,
    guess2Ref,
    guess3Ref,
    replayRef,
    refreshPage,
    handleAnswer,
  };
};
