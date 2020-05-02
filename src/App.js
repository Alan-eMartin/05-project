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
  // set states/ create empty arrays to store firebase data
  constructor () {
    super()
    this.state = {
      // prints and cart array from firebase
      prints: [],
      cart: [],
      // itemsInCart: 0,
      // click function states
      isBioVisible: false,
      isBioImgVisible: true,
      isCartOpen: false,
    }
  }
  // call FireBase
  componentDidMount () {
    // grab print data from firebase
    const getPrints = () => {
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
        // console.log(this.state.prints)
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
    console.log(this.state.isBioImgVisible);
  }

  // Add items to cart
  addToCart = (e) => {
    // on click find id of button and link to index of array
    // with id clone that piece from array and push it to a new array
    // the
    const cartArray = [...this.state.prints]

    const selectedItems = []

    

    // selectItems.push(cartArray)
  //  console.log(selectedItems);
    
    // newCart = [...]
    // console.log('sup',e.target);
    this.setState({
      // cart: selectedItems
    })
    // console.log(this.state.cart);
  };

  

  render() {
    return (
      <>
        <header>
          <TopNav toggleOpen={this.toggleDrawer}/>
          <CartDrawer openClose={this.state.isCartOpen} toggleClose={this.toggleDrawer} />
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
                <Shop prints={this.state.prints} addItem={this.addToCart} />
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
