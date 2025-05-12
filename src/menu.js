import lavaCake from "../images/lavaCake.jpeg";
import brownies from "../images/brownies.jpeg";
import strawberryCake from "../images/strawberryCake.jpeg";
import moistCake from "../images/moistCake.jpg";

export default function menuPage() {

    const content = document.querySelector("#content");
    content.innerHTML = "";

    const menuPage = document.createElement("div");
    menuPage.classList.add("menuPage");
    content.appendChild(menuPage);

    const headingMenu = document.createElement("h1");
    headingMenu.classList.add("headingMenu");
    headingMenu.textContent = "Pick Your Choice!";
    content.appendChild(headingMenu);

    const grid = document.createElement("div");
    grid.classList.add("grid");
    content.appendChild(grid);

    const foodMenu = [
        {img: lavaCake, name: "Lava Cake", descrip: "A rich, decadent chocolate lava cake with a warm, gooey center.", price: 100},
        {img: brownies, name: "Brownies", descrip: "Rich, fudgy brownies with a crisp top and gooey center, delivering deep chocolate flavor.", price: 50},
        {img: strawberryCake, name: "Strawberry Cake", descrip: "A light and fluffy strawberry cake layered with fresh strawberries and creamy frosting, bursting with sweet berry flavor.", price: 70},
        {img: moistCake, name: "Moist Cake", descrip: "A soft, tender cake with a rich, buttery flavor and a perfectly moist crumb.", price: 80},       
    ];

    foodMenu.forEach(food => {

        const card = document.createElement("div");
        card.classList.add(food.name.toLowerCase().replace(/\s+/g, "-")); 
        card.classList.add("card");
        grid.appendChild(card);
        

        const img = document.createElement("img");
        img.src = food.img;
        img.alt = food.name;

        const name = document.createElement("h2");
        name.textContent = food.name;

        const description = document.createElement("h3");
        description.textContent = food.descrip;

        const price = document.createElement("h3");
        price.textContent = `Price: $${food.price}`;

        card.append(img, name, description, price);
    });

    menuPage.append(headingMenu, grid);
}




