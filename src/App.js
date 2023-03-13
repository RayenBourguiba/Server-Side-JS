import "./App.css";
import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Acceuil from "./Components/Acceuil";
import PersonList from "./Components/PersonList";
import { increment, decrement } from "./reducers/count";

const ProductsFunc = React.lazy(() =>
  import("./ComposantFonctionnel/ProductsFunc")
);
const ProductDetails = React.lazy(() =>
  import("./ComposantFonctionnel/ProductDetails")
);
const NavbarComponent = React.lazy(() =>
  import("./ComposantFonctionnel/NavigationBar")
);
const NotFound = React.lazy(() => import("./Components/NotFound"));
const AddProduct = React.lazy(() =>
  import("./ComposantFonctionnel/AddProduct")
);
const UpdateProduct = React.lazy(() =>
  import("./ComposantFonctionnel/UpdateProduct")
);

// const option = (
//   <ol>
//     <li>TWIN</li>
//     <li>BI</li>
//     <li>SAE</li>
//   </ol>
// )
// let x = "Hello"
// var y = " world "
// const z = "!"
// const expression = <p> 1 + 1 = {1 + 1} </p>
// var nom = <h2> Rayen </h2>
// var prenom = <h2> Bourguiba </h2>
// const photo = <img src="logo512.png" alt="My Image" width="100px" height="100px" />
// const user = {
//   prenom: 'Rayen',
//   nom: 'Bourguiba'
// }
// function formatName(u) {
//   return u.prenom + '--' + u.nom
// }
// var myStyle = {
//   fontSize: 100,
//   color: '#FFC222'
// }
// function disBonjour(user){
//   if (user.prenom == 'Rayen') {
//     return <h1>Hello {formatName(user)} !</h1>
//   }
//   return <h1>Hello Unknown.</h1>
// }

// function disBonjour2(user) {
//   return (user.prenom=='Rayen') ? (<h1>Hello {formatName(user)} !</h1>) : (<h1>Hello Unknown.</h1>)
// }

// const numbers =[7, 12, 25, 4, 5]
// const listItems=numbers.map((number,index)=><li key={index}>{number}</li>)
// const max=numbers.reduce((a,b)=> b>a?b:a)
// //const max=numbers.reduce((a,b)=>Math.max(a,b))
// const tab=numbers.filter(v=>v%2==0).map((v,ind)=><li key={ind}>{v*v}</li>)

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="App">
      {/* <ComposantClass />
      <ComposantFunct />
      <Product1 />
      <Personne/>
      <Personne nom="test" prenom="ceci est un test" />
      <Composantcycle /> */}

      {/* <h1 style={myStyle}>Code CSS</h1>
      {formatName(user)}
       Ceci un objet
      {user.lastname} - {user.lastname}
      Hello 4TWIN8
      {option}
      la valeur de x est {x}
      la valeur de y est {y}
      la valeur de z est {z}
      la contenu de l'expression est {expression}
      <br>
      </br>

      Hello {nom} {prenom} {photo} */}
      {/* 
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand >My Store</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/products" style={({ isActive }) => ({ textDecoration: isActive && 'underline' })}>Products</Nav.Link>
                        <Nav.Link as={NavLink} to="/products/add"
                            style={({ isActive }) => ({ textDecoration: isActive && 'underline' })}>Add
                            Product</Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}

      {/* <li><Link to="/Accueil/:id">Acceuil</Link></li> */}
      {/*       
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>{""}
                <li><NavLink to="/Products">Products</NavLink></li>
            </ul>  */}
      {/* <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/products'>
                        <Route index element={<ProductsFunc />} />

                        <Route path='/products/:id' element={<ProductDetails />} /> </Route>

                    {/* <Route path="/Accueil/:id" reloadDocument={true} element={<Accueil />}></Route> */}
      {/* <Route path='/products/add' element={<AddProduct />} > </Route>

                    <Route path='/*' element={<NotFound />} > </Route>
                    <Route path='/products/update/:id' element={<UpdateProduct />}/>
                </Routes>

            </Suspense> */}

      {/* <PersonList /> */}
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
