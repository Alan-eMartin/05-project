import React, { Component } from 'react';
import firebase from './firebase/firebase'

// sass
import './styles/setup.scss'
import './styles/general.scss'

// components
import Profile from './components/Profile/Profile'
import TopNav from './components/TopNav/TopNav'
import CartDrawer from './components/CartDrawer/CartDrawer'
import Shop from './components/Shop/Shop'
import Footer from './components/Footer/Footer'

class App extends Component {
  // set states needed to run application
  constructor () {
    super()
    this.state = {
      prints: [], //prints array populated from FireBase
      cart: [], // Cart array is filled with on user click
      total: 0, // Total cost of items in cart
      isBioVisible: false, // Allows user to hide and show bio
      isBioImgVisible: true, // hides/shows picture/header when showing bio
      isCartOpen: false, // toggles cart drawer
      
    }
  }
  // calls FireBase to populate print array
  componentDidMount () {

    const getPrints = () => {
      // calls FireBase
      const dbRefPrints = firebase.database().ref('/printShop')
      dbRefPrints.on('value', (result) => {
        //  create empt array to store FireBase data
        const printsArray = [];
        //store the data from firebase in printData variable
        const printData = result.val()
        // use 'for' look to push data into the array
        for (let key in printData) {
          printsArray.push(printData[key]);
        }
        // setState of original with array from FireBase
        this.setState({
          prints: printsArray
        });
      })
    }
    // calls get prints and populates array of prints
    getPrints()    
  }

  // Toggle CartDrawer with onClick
  toggleDrawer = () => {
    // toggle truth and false of isCartOpen
    this.setState({
      isCartOpen: !this.state.isCartOpen,
    })
  };
  
  // Toggles bio / H1 and Img being shown
  toggleBio = () => {
    this.setState({
      isBioVisible: !this.state.isBioVisible,
      isBioImgVisible: !this.state.isBioImgVisible,
    })
  }

  // Add items to cart
  addToCart = (print) => {
    const newCart = [...this.state.cart, print]
    const newTotal = this.state.total + print.price;
    const roundedPrice = Math.floor((newTotal + Number.EPSILON) * 100) / 100
    
    this.setState({
      cart: newCart,
      total: roundedPrice,
    })
  };

  // empty cart of selected items
  emptyCart = () => {
    const emptyCart = []
    this.setState({
     cart: emptyCart,
    total: 0
    })      
  }
  
  render() {
    return (
      <>
        <header>
          <TopNav toggleOpen={this.toggleDrawer}/>
          <CartDrawer 
            openClose={this.state.isCartOpen} 
            toggleClose={this.toggleDrawer} 
            cartItems={this.state.cart} 
            finalPrice={this.state.total} 
            removeAllItem={this.emptyCart}
          />
          <div className="container">
            <Profile 
              clickBio={this.toggleBio} 
              showBio={this.state.isBioVisible}
              showImg={this.state.isBioImgVisible}
            />
          </div>
        </header>

        <main>
          <section className="shop">
            <div className="container">
              <h2 className="printHeader">Prints</h2>
              <ul className={'gallery'}>
                <Shop 
                  prints={this.state.prints} 
                  addItem={this.addToCart} 
                />
              </ul>
            </div>
          </section>
        </main>


        <Footer />
      </>
    );
  }
}

export default App;
