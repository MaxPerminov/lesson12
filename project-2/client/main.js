import "./style.css"
import {Header} from "./components/header"
import {Main} from "./components/main/"
import {Footer} from "./components/footer"
import {Navigation} from "./components/navigation/navigation"
import {Link} from "./components/link/link"

import {render} from "./core/render"

import "./public/styles/style.css"


const main = new Main ({
}).toHTML()

const footer = new Footer({
  tagName: "footer",
  className: "footer",
}).toHTML()

// //decorator:
// function wrapper(call) {
//   function getSomething(dec) {
//       return call() + dec
//   }
//   return getSomething 
// }
// function hello () {
//   return "Hello "
// }
// const resultWrapper = wrapper( hello)("world")
// console.log("result is: ", resultWrapper)


const links = [
  new Link({
    text: "Users",
    className: "nav-link",
    event: {
      click: ()=> fetchData(main, "/users")
    }
  }).toHTML(),
  
  new Link({
    text: "Products",
    className: "nav-link",
    event: {
      click: ()=> fetchData(main, "/products")
    }
  }).toHTML()
]

const nav = new Navigation({}).toHTML()
nav.append(...links)

const header = new Header({}).toHTML()

header.append(nav)


async function fetchData(main, path) {
  const data = await fetch(`http://127.0.0.1:4444/${path}`)
  const parsedData = await data.json()

  const domArr = await  parsedData.map((el) => {
    const entries = Object.entries(el);
    return `
        <div class="card">
          ${entries.map((el)=> {
            if (el[0] !== "_id"){
              return `<h2>${el[0]}: ${el[1]}</h2>`;
            }
          })}
      </div>
      `;
      
  })

  main.insertAdjacentHTML("afterbegin", domArr.toString().replaceAll(",", " "))

}


render("#app", [header, main, footer])
