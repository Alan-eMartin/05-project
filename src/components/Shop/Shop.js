import React from 'react';
import './shop.scss'

function Shop(props) {
  return(
    props.prints.map((print) => {
      return(
          <li>
            <div className="printImg">
              <img src={print.img} alt="{print.alt}"/>
            </div>
            <div className="printInfo">
              <h2>{print.title}</h2>
              <div className="price">
                <p><span>Price:</span> ${print.price}</p>
                <button className="addToCart"><i class="fas fa-cart-plus" aria-hidden="true" title="Add to Cart"></i></button>
              </div>
            </div>

          </li>
        );
      })
  );
};

export default Shop;