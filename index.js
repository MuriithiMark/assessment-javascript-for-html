// Use fetch to get data
const fetchData = async () => {
    const response = await fetch("./assets/data.json");
    const data = await response.json();
    return data;
}

const createBuyNowButton = async () => {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = "Buy Now";
    buttonElement.classList.add("btn", "buy-now");

    buttonElement.addEventListener("click", () => console.log("Button Clicked!"));

    return buttonElement;
}

const createCardFooter = async ({ title, date, company, price }) => {
    let cardFooterElement = document.createElement("div");
    cardFooterElement.classList.add("card-footer");

    let titleElement = document.createElement("span");
    titleElement.classList.add("title");
    titleElement.innerText = title;

    let dateElement = document.createElement("span");
    dateElement.innerText = date;

    let companyElement = document.createElement("span");
    companyElement.innerText = company;

    let priceElement = document.createElement("span")
    priceElement.innerText = `Ksh ${price}`;

    const buttonElement = await createBuyNowButton()

    const cardFooterElements = [
        titleElement, dateElement, companyElement, priceElement, buttonElement
    ];
    cardFooterElement.append(...cardFooterElements);

    return cardFooterElement;
}

const writeCardItem = async (item) => {
    const cardElement = document.createElement("div");
    cardElement.id = item.id;
    cardElement.classList.add("card");

    const imgElement = document.createElement("img");
    imgElement.src = item.imageUrl;

    const cardFooterObj = {
        title: item.title,
        date: item.date,
        company: item.company,
        price: item.price, 
    }

    const cardFooterElement = await createCardFooter(cardFooterObj);

    const cardElements = [
        imgElement, cardFooterElement
    ];

    cardElement.append(...cardElements);

    return cardElement;
}

const addBodyContent = async () => {
    const data = await fetchData();
    const rootElement = document.getElementById("root");
    data.forEach(async (item) => {
        const cardElement = await writeCardItem(item);
        rootElement.appendChild(cardElement);
    });
}

addBodyContent();