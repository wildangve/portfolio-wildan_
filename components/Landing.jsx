import { useEffect, useState } from "react";

export default function Landing({
  onFinish,
  background = `
    radial-gradient(
      600px circle at 50% 40%,
      rgba(212, 175, 55, 0.25),
      transparent 60%
    ),
    radial-gradient(
      400px circle at 30% 60%,
      rgba(62, 199, 245, 0.15),
      transparent 65%
    ),
    radial-gradient(
      500px circle at 70% 30%,
      rgba(123, 108, 246, 0.18),
      transparent 65%
    ),
    #0B0F1A
  `,
}) {
  const [text, setText] = useState("");
  const fullText = "Wildan's Portfolio";
  const [done, setDone] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setDone(true);
      setTimeout(() => setFadeOut(true), 400);
      if (onFinish) setTimeout(onFinish, 900);
    }
  }, [text]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.6s ease",
      }}
    >
      <h1
        style={{
          color: "#F2E6C9",
          fontFamily: "'Inter', sans-serif",
          fontSize: "2.6rem",
          letterSpacing: "2.5px",
          textShadow: `
            0 0 12px rgba(212,175,55,0.45),
            0 0 28px rgba(123,108,246,0.25)
          `,
        }}
      >
        {text}
        <span
          style={{
            marginLeft: "4px",
            opacity: done ? 0 : 1,
            transition: "opacity 0.3s",
          }}
        >
          |
        </span>
      </h1>
    </div>
  );
}
