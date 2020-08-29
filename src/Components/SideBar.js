import React from "react";

const SideBar = () => {
  const onFire = () => {
    console.log("clicked");
  };
  return (
    <div
      style={{
        height: "100%",
        width: 260,
        position: "fixed",
        zIndex: 1,
        top: 0,
        left: 0,
        backgroundColor: "#111",
        overflowX: "hidden",
        paddingTop: 20,
        color: "whitesmoke",
      }}>
      <div>
        <button
          onClick={onFire}
          style={{
            display: "block",
            outline: "none",
            backgroundColor: "transparent",
            padding: "6px 8px 6px 16px",
            textDecoration: "none",
            fontSize: 25,
            color: "#818181",
            border: "none",
            cursor: "pointer",
          }}>
          Completed
        </button>
        <button
          onClick={onFire}
          style={{
            display: "block",
            outline: "none",
            backgroundColor: "transparent",
            padding: "6px 8px 6px 16px",
            textDecoration: "none",
            fontSize: 25,
            color: "#818181",
            border: "none",
            cursor: "pointer",
          }}>
          All
        </button>
        <button
          onClick={onFire}
          style={{
            display: "block",
            outline: "none",
            backgroundColor: "transparent",
            padding: "6px 8px 6px 16px",
            textDecoration: "none",
            fontSize: 25,
            color: "#818181",
            border: "none",
            cursor: "pointer",
          }}>
          Active
        </button>
      </div>
    </div>
  );
};
export default SideBar;
