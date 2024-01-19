// Use fetch to get data
const fetchData = async () => {
    const response = await fetch("./assets/data.json");
    const data = await response.json();
    return data;
}

const writeCardItem = async (item) => {
    let cardElement = document.createElement("div");
    cardElement.classList.add("card");

    let imgElement = document.createElement("img");
    imgElement.src = item.imageUrl;

    let titleElement = document.createElement("span");
    titleElement.innerText = item.title;

    let dateElement = document.createElement("span");
    dateElement.innerText = item.date;

    let companyElement = document.createElement("span");
    companyElement.innerText = item.company;

    let priceElement = document.createElement("span")
    priceElement.innerText = item.price;

    const cardElements = [
        imgElement, titleElement, dateElement, companyElement, priceElement
    ];

    cardElement.append(...cardElements);

    return cardElement;
}

const addBodyContent = async () => {
    const data =  await fetchData();
    const rootElement = document.getElementById("root");
    data.forEach(async (item) => {
        console.log(item)
        const cardElement = await writeCardItem(item);
        rootElement.appendChild(cardElement);
    });
}

addBodyContent();
console.log(data)