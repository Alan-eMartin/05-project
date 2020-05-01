import React from 'react';
import './topNav.scss'

function TopNav(props) {
  return(
    <nav className="topNav">
      <h2 title="Print Shop">PrintShoppe</h2>
      <a className="cartBtn"><i class="fas fa-shopping-bag"></i></a>
    </nav>
  );
};

export default TopNav;