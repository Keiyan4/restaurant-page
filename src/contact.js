

export default function contactPage(){

    const content = document.querySelector("#content");
    content.innerHTML = "";

    const about = document.createElement("div");
    about.classList.add("about");
    content.appendChild(about);

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("cardContainer");
    about.appendChild(cardContainer);


    const cardData = [
        {
            className: "cardReservation",
            title: "Reservation",
            elements: [
                {type: "h3", className: "reservation", text: "For reservation contact us at 07700 900123." },
            ],
        },
        {
            className: "cardOperationHours",
            title: "Operation Hours",
            list: [
                "Mon-Fri: 10am to 10pm",
                "Sat: 10am to 12mn",
                "Sun: Closed",
            ],
        },
        {
            className: "cardLocation",
            title: "Location",
            elements: [{type: "h3", className: "location", text: "London, England"},
                
            ],
        },

    ];

    cardData.forEach(card => {
        
        const cardDiv = document.createElement("div");
        cardDiv.classList.add(card.className);
        cardDiv.classList.add("cardDiv");
        cardContainer.appendChild(cardDiv);
        

        const h2 = document.createElement("h2");
        h2.textContent = card.title;
        cardDiv.appendChild(h2);
        
        if(card.list){
            const ul = document.createElement("ul");
            ul.classList.add(card.className);

            card.list.forEach(list => {
                const li = document.createElement("li");
                li.textContent = list;

                ul.appendChild(li);
            });
            cardDiv.appendChild(ul);             
        }

        if(card.elements){
            card.elements.forEach(elem =>{

                const h3 = document.createElement(elem.type);
                h3.classList.add(elem.className);
                h3.textContent = elem.text;
                cardDiv.appendChild(h3);
            });
        }

        
           
    });

  
}