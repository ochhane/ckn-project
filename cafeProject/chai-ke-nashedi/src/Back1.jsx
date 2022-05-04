import React from "react";
function Back1() {
  return (
    <>
    
      <div className="marginTopClass" style={{ backgroundImage: `url('images/Back1.jpg')`, height: 400,
      /* Create the parallax scrolling effect */
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover", }}>
        <div className=" text-center p" style={{padding:"8.5rem",}}>
        <h1 className="text-warning"><i>Healthy Fresh And Hot Dishes.</i></h1>
        <br />
        <h1 className="text-light">Best offers from the house chef.</h1>
    </div>
    </div>
    
        
    </>   
  );
}
export default Back1;