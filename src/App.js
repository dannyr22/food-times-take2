import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/nav/Header';
import { UserContext } from './contexts/UserContext';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import { uuid } from 'uuidv4';
import Cart from './pages/Cart';




const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [cart, setCart] = useState([])

  const products = [
    {title: 'Fish and Chips', description: 'Lorem ipsum dolor sit amet', image: '/fish-and-chips.jpg', alt: 'fish and chips', id: uuid()},
    {title: 'Salad', description: 'Lorem ipsum dolor sit amet', image: '/food.png', alt: 'Salad', id: uuid()},
    {title: 'Curry', description: 'Lorem ipsum dolor sit amet', alt: 'curry', image: '/curry.jpg', id: uuid()},
    {title: 'Pizza', description: 'Lorem ipsum dolor sit amet', alt: 'Pizza', image: '/pizza.png', id: uuid()},
    {title: 'Noodles', description: 'Lorem ipsum dolor sit amet', alt: 'noodles', image: '/noodles.jpg', id: uuid()},
    {title: 'Stew', description: 'Lorem ipsum dolor sit amet', alt: 'stew', image: '/stew.jpg', id: uuid()},
  ]

  const addItem = (title, description, image, id) => {
    setCart([
      ...cart,
      {title, description, image, id}
])
  }

  const removeItem = (id) => {
    const newArray = cart.filter(product => product.id !== id)
setCart(newArray)
  }

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home products={products} addItem={addItem}/>
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} removeItem={removeItem}/>
          </Route>
            </Switch>
          </UserContext.Provider>
        
     </Router>
    </div>
  );
}

export default App;
