import ClipboardJS from "clipboard";
import React, { useState } from "react";
import CopiedMessage from "./CopiedMessage";


function Card({ hex ,handleOnClick }) {
  var clipboard = new ClipboardJS(".cursor-pointer");

  //   clipboard.on("success", function (e) {
  //     console.info("Action:", e.action);
  //     console.info("Text:", e.text);
  //     console.info("Trigger:", e.trigger);

  //     e.clearSelection();
  //   });

  //   clipboard.on("error", function (e) {
  //     console.error("Action:", e.action);
  //     console.error("Trigger:", e.trigger);
  //   });
  //   const alert = useAlert()
  // const handleOnClick = () => {
  //   // alert(`copied color #${hex} successfully`)
  // //  alert("Copied")
  // };

  return (
    <>
      <div className="container-fluid">
        <div
          style={{ border: "1px solid white" }}
          className=" cursor-pointer "
          data-clipboard-text={`color:${hex}`}
          onClick={handleOnClick}
        >
          <div
            className="box"
            style={{ backgroundColor: `${hex}`, border: `10px solid ${hex}` }}
          ></div>
          <div style={{ color: "black" }} className={`text-center`}>
            {hex}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
