import desserts from "../images/desserts.jpg";

export default function homePage(){
    const content = document.querySelector("#content");
    content.innerHTML = "";
    

    const homepage = document.createElement("div");
    homepage.classList.add("homepage");
    content.appendChild(homepage);
    


    const dessertImage = document.createElement("img");
    dessertImage.classList.add("dessert-photo");
    dessertImage.alt = "dessert picture";
    dessertImage.src = desserts;
    homepage.appendChild(dessertImage);

    const caption = document.createElement("h1");
    caption.textContent = "Welcome to a world where every bite tells a sweet story. Our dessert menu is a celebration of handcrafted indulgence — from velvety cheesecakes and rich chocolate creations to fruit-filled pastries and warm, comforting classics. Whether you're treating yourself or sharing with someone special, our desserts are made to turn ordinary moments into delicious memories. Come taste the joy — one spoonful at a time.";
    homepage.appendChild(caption);

}





