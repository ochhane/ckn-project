import React from 'react';
function Recipes() {
    return (
        <>

            <div className='marginTopClass' style={{
                backgroundImage: `url('images/Recipes.jpg')`, height: 400,
                /* Create the parallax scrolling effect */
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
                <div className=" text-center p" style={{ padding: "8.5rem", }}>
                    <h1 className="text-warning"><i>Our Delicious Menu Items</i></h1>
                    <br />
                    <h1 className="text-light">Fresh And Healthy Food Available</h1>
                    <div className="button-group d-flex m-5 justify-content-center">
                        <button className='btn btn-outline-warning m-4 text-light'>BreakFast</button>
                        <button className='btn btn-outline-warning m-4 text-light'>Launch</button>
                        <button className='btn btn-outline-warning m-4  text-light '>Dinner</button>
                </div>
                </div>
               
            </div>


        </>
    );
}
export default Recipes;