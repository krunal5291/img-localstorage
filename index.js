let products = JSON.parse(localStorage.getItem("product")) || []

const ui = () => {
    document.getElementById("ui").innerHTML = ""
    products.map((ele, i) => {
        let h1 = document.createElement("h1")
        h1.innerHTML = ele.titel
        let img = document.createElement("img")
        img.src = ele.img
        let price = document.createElement("h3")
        price.innerHTML = ele.price

        let dele = document.createElement("button")
        dele.innerHTML = "delete"

        dele.addEventListener("click", () => {
            products.splice(i, 1);
            ui()
        })

        let div = document.createElement("div")
        div.append(img, h1, price, dele)
        document.getElementById("ui").append(div)
    })
}
ui()
const header = (e) => {

    e.preventDefault()

    let product = {
        titel: titel = document.getElementById("titel").value,
        img: img = document.getElementById("img").value,
        price: price = document.getElementById("price").value,
    }
    products.push(product);

    localStorage.setItem("product", JSON.stringify(products))
    ui()
}



document.getElementById("form").addEventListener("submit", header)

