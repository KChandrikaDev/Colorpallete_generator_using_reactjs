import React from 'react'
import ClipboardJS from 'clipboard'

function CopiedMessage({isCopied,hexCode}) {
    var clipboard = new ClipboardJS("#Clip");
    console.log("isCopied",isCopied.value)
      clipboard.on("success", function (e) {
      console.info("Action:", e.action);
      console.info("Text:", e.text);
      console.info("Trigger:", e.trigger);

      e.clearSelection();
    });

    clipboard.on("error", function (e) {
      console.error("Action:", e.action);
      console.error("Trigger:", e.trigger);
    });
    
    return (
        <div id="Clip" data-clipboard-text={`color:${hexCode}`}
        className=' flex justify-center px-8 py-3 text-base text-center rounded-full text-white bg-black md:py-4 md:text-sm m-auto  transition duration-1000 ease-in-out'
        style={{ position: 'relative', marginTop: '-116px', width:"600px",borderRadius:"4%"}} 
        
        >
            <span >Colors:{hexCode} copied successfully</span>
            <i id="copy" data-clipboard-text={`color:${hexCode}`}
            className="fa fa-clone ms-3 pe-2" aria-hidden="true"></i>
        </div>
    )
}

export default CopiedMessage
