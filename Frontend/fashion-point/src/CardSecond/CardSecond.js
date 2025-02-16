
import React from "react";
import "./CardSecond.css";
const CardSecond = () => {
  return (
    <>
      <div className="secondCard">
        <div className="secondCard-container">
          <div className="secondCard-container-left">
            <img src="/images/CardSecondImg/single-image-2.jpg" alt="img"  className="secondCard-img"/>
          </div>

          <div className="secondCard-container-right">
            <div className="secondCard-container-right-data">
              <h1 className="secondCard-h1">Classic winter collection</h1>
              <p className="secondCard-p">
                Stay warm and stylish this winter with our Classic Winter
                Collection. Featuring cozy sweaters, elegant coats, soft
                scarves, and snug boots, this collection is perfect for the
                chilly season. With timeless designs and comfortable fabrics,
                it's made to keep you warm while looking your best. Whether
                you're heading out or staying in, these pieces will make every
                winter day special.
                <p className="secondCard-explore">
                  Explore the collection and enjoy winter in style!
                </p>
              </p>
              <button className="secondCard-btn">Shop Collection</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSecond;


// done

