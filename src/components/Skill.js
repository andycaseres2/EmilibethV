import React from "react"

export const Skill = ({ text, icon }) => {
  return (
    <div
      style={{
        width: "max-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <img style={{ width: "30px" }} src={icon} alt={text} />
      <h2>{text}</h2>
    </div>
  )
}
