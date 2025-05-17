import React, { useState } from "react";
import { MoodBox } from "./MoodBox";
import { MoodButton } from "./MoodButton";

export function MainContainer() {
  const [mood, setMood] = useState("neutral");

  const getColor = (mood) => {
    if (mood === "happy") return "#fff176";     
    if (mood === "sad") return "#90caf9";        
    return "#e0e0e0";                     
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <MoodBox bgColor={getColor(mood)}>
        <h2>Current Mood: {mood}</h2>
      </MoodBox>

      <MoodButton onClick={() => setMood("happy")}> Happy</MoodButton>
      <MoodButton onClick={() => setMood("neutral")}> Neutral</MoodButton>
      <MoodButton onClick={() => setMood("sad")}> Sad</MoodButton>
    </div>
  );
}


