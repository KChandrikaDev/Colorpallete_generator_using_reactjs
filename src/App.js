import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./componets/Header";
import ColorCard from "./componets/ColorCard";
import Button from "./componets/Button";
import Footer from "./componets/Footer";

function App() {
  const [colors, setColors] = useState([]);
  var hexCode = [];

  const convertRGBtoHex = (color) => {
    let hex = "";
    color.forEach((value) => {
      hex = hex + value.toString(16);
    });

    return hex.toUpperCase();
  };
  colors.map((color) => {
    //   //  console.log("color",color);
    hexCode.push(`#${convertRGBtoHex(color)}`);
    //  hexCode.push(convertRGBtoHex(color));
  });
  // console.log("hexcode",hexCode);

  // generate color
  const onClick = async () => {
    const url = "http://colormind.io/api/";
    const data = {
      model: "default",
    };
    const headers = {
      "Content-Type": "text/plain",
    };
    const colorPallete = await axios
      .post(url, data, { headers })
      .then((res) => res.data.result); // array of 5
    // console.log(colorPallete)
    setColors(colorPallete);
  };

  useEffect(() => {
    const handleSpacebar = (event) => {
      if (event.keyCode === 32) {
        onClick();
      }
      console.log("Handle SpaceBar");
    };
    window.addEventListener("keyup", handleSpacebar);
  }, []);

  return (
    <>
     <Header />
      <div className="container-fluid w-50 shadow mt-5">
        {/* Display header */}
       
        <br />
        {/* Display color pallets */}
        <ColorCard hexCode={hexCode} />
        <Button onClick={onClick} />
        <Footer />
      </div>
    </>
  );
}

export default App;
