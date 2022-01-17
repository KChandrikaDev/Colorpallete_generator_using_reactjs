import React, { useState,useEffect } from "react";
import AlertMsg from "./AlertMsg";
import Card from "./Card";
import CopiedMessage from "./CopiedMessage";


function ColorCard({ hexCode }) {
  const [isCopied, setIsCopied] = useState({
    value: [],
    copied: false,
  });
  const [clr, setClr] = useState('');
  const [IsBoolean, SetIsBoolean]=useState(false)
  
  useEffect(() => {
    const handleKeypressC = (event) => {
       if (event.keyCode === 67) {
      
        setIsCopied({ value:{hexCode},copied: true });
        
      }
    }
    window.addEventListener('keydown', handleKeypressC)

  }, [])
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCopied({ copied: false });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [hexCode]);
  // console.log("isCopied", isCopied.value)
  
  const handleOnClick = (hex) => {
    SetIsBoolean({IsBoolean:true})
    setClr({hex})
    alert(`copied color ${hex} successfully`)
    // console.log("handle",clr)
    // setIsCopied({ value: `${hexCode}`, copied: true });
  };
  return (
    <>
       {isCopied.copied ? <CopiedMessage isCopied={isCopied} hexCode={hexCode} /> :null}
      
        <div className="container">
          {hexCode.map((hex, index) => (
            <div key={index} className="flex flex-wrap mt-1 justify-center">
              <Card hex={hex}  handleOnClick={()=>handleOnClick(hex)}/>
            </div>
          ))}
        </div>
      
    </>
  );
}

export default ColorCard;
