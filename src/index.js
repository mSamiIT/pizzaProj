import React from "react";
import ReactDOM from "react-dom/client";
import img1 from "./pizzas/focaccia.jpg";
import img2 from "./pizzas/funghi.jpg";
import img3 from "./pizzas/margherita.jpg";
import img4 from "./pizzas/prosciutto.jpg";
import img5 from "./pizzas/salamino.jpg";
import img6 from "./pizzas/spinaci.jpg";

import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: img1,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: img2,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: img3,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: img4,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: img5,
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: img6,
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <h2>Hello React</h2>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// if we want over those 3 components in "root" instead of "container", we can write in this way by using components, in the above App component
<>
  {/* <Header />
  <Menu />
  <Footer /> */}
</>;

function Header() {
  return (
    <header className="header">
      <h1 className="header">Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizza = pizzas.length;
  return (
    <menu className="menu">
      <h2>Our Menu</h2>

      {numPizza > 0 ? (
        <React.Fragment key="anyThing">
          <p>
            How do you make random text? How to Generate Random Text in Word
            Position the cursor in the document where you want to generate
            random text. Type =RAND(). Press Enter.
          </p>
          <ul className="pizzas">
            {/* pizza parameter contains the Arr element at each iteration */}
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We are still working on Menu.</p>
      )}
    </menu>
  );
}

// destructuring prop, instead of writing prop, write the word that is used to sent the prop
// this way we can avoid writing "props.pizzaObj.soldOut", instead write "pizzaObj.soldOut" simply because prop is destructured

function Pizza({ pizzaObj }) {
  // console.log(pizza);
  // if (pizzaObj.soldOut) return null;

  return (
    // applying 2 classes,
    // pizza is by default and sold-out if pizza is sold-out
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open = 8;
  const close = 22;
  const isOpen = hour >= open && hour <= close;
  console.log(isOpen);
  console.log(hour);

  return (
    <footer className="footer">
      {isOpen ? <Order close={close} open={open} /> : <p>We are close</p>}
    </footer>
  );
}

// if we try to acess prob that is not there, it will be undefined and will display nothing
function Order({ close, open, test }) {
  return (
    <div className="order">
      <p>
        we are Open from {open}:00 untill {close}:00 come visit {test}us or
        order online
      </p>
      <button className="btn">order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
