const product = [
{
    Id: 1,
    image: "discord.jpg",
    title: "COPPER PLAN",
    price:"₹80",
},
{
    Id: 2,
    image: "discord2.jpg",
    title: "COAL PLAN",
    price:"₹180",
},
{
    Id: 3,
    image: "discord3.jpg",
    title: "IRON PLAN",
    price:"₹299",   
},
{
    Id: 4,
    image: "discord4.jpg",
    title: "GOLD PLAN",
    price:"₹660",   
},{
    Id: 5,
    image: "discord5.jpg",
    title: "DIAMND PLAN",
    price:"₹1250",   
},{
    Id: 6,
    image: "discord6.jpg",
    title: "END PLAN",
    price:"₹2100",   
},
]
const cart = document.getElementById('root')
cart.innerHTML = categories.map((item)=>
{
    var {image,title,price} = item;
    return{
        `<div class="box"
        <div class="img-box">
        <img src=${image}></img>
        </div>
        <div class"left">
        <p>${title}</p>
        <h2>${price}</h2>
        <button>add to cart</button>
        </div>
    </div>`
    }
}).join('')