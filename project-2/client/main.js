import "./style.css"

const btn = document.getElementById("get-data")
const people = document.getElementById("people")

btn.addEventListener("click", (e)=> {
  // e.preventDefault();



  (async function () {
    const data = await fetch("http://127.0.0.1:4444/")
    const parsedData = await data.json()

    const domArr = parsedData.map((el) => {
      return `
        <h2>
            name: ${el.name}
        </h2>

        <h2>
            age: ${el.age}
        </h2>

        <h2>
            skills: ${el.skills.join("***")}
        </h2>
        
        <h2>
            money: ${el.money}
        </h2>
      `;

    })

    people.insertAdjacentHTML("afterbegin", domArr)
  })()
})