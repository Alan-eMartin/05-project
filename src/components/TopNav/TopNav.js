import React from 'react';
import './topNav.scss'

function TopNav(props) {
  return(
    <nav className="topNav">
      <h2 title="Print Shop">PrintShoppe</h2>
      <a className="cartBtn" onClick={props.toggleOpen}><i className="fas fa-shopping-bag" aria-hidden={true} title="Open Cart"></i></a>
    </nav>
  );
};

export default TopNav;