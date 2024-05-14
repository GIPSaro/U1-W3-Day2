/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */
console.log("Esercizio 1");

const changeTitle = function () {
  const h1 = document.querySelector("h1");
  h1.innerText = "NUOVO TITOLO";
};
changeTitle();

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
console.log("Esercizio 2");

const addClassToTitle = function () {
  const h1 = document.querySelector("h1");
  h1.classList.add("myHeading");
};
addClassToTitle();

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */

console.log("ESERCIZIO 3");

const changePcontent = function () {
  const p = document.querySelectorAll("div p");
  p.forEach((p) => {
    p.innerText = "NUOVO PARAGRAFO";
  });
};
changePcontent();

/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
console.log("Esercizio 4");

const changeUrls = function () {
  const newUrl = "https://www.google.com";
  document.querySelector("a").href = newUrl;
};
changeUrls();

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
console.log("Esercizio 5");

const addToTheSecond = function () {
  const node = document.createElement("li");
  node.appendChild(document.createTextNode("4th"));
  document.getElementById("secondList").appendChild(node);
};
addToTheSecond();

/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
console.log("Esercizio 6");
const addParagraph = function () {
  const newP = document.createElement("p");
  newP.appendChild(document.createTextNode("PARAGRAFO AGGIUNTO IN JS"));
  document.querySelector("div").appendChild(newP);
};
addParagraph();
/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
console.log("Esercizio 7");
const hideFirstUl = function () {
  const ul = document.getElementById("firstList");
  ul.remove();
};
hideFirstUl();
/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
console.log("Esercizio 8");
const paintItGreen = function () {
  const ul = document.querySelectorAll("ul");
  ul.forEach((element) => {
    element.style.backgroundColor = "green";
  });
};
paintItGreen();

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
console.log("Esercizio 9");

const makeItClickable = function () {
  const h1 = document.querySelector("h1");
  h1.onclick = function () {
    const newH1 = h1.textContent.slice(0, -1);
    h1.innerText = newH1;
  };
};
makeItClickable();

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
console.log("Esercizio 10");
const revealFooterLink = function () {
  const footer = document.querySelector("footer");
  footer.onclick = function () {
    const link = document.querySelector("footer a");
    const url = link.getAttribute("href");
    alert(url);
  };
};
revealFooterLink();
/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
console.log("Esercizio 11");

const generateTable = function () {
  const container = document.getElementById("tableArea");
  const table = document.createElement("table");
  table.style.width = "100%";

  const firstRow = document.createElement("tr");
  const thImage = document.createElement("th");
  thImage.innerText = "Immagine";
  const thName = document.createElement("th");
  thName.innerText = "Nome Prodotto";
  const thQuantity = document.createElement("th");
  thQuantity.innerText = "Quantità";
  const thPrice = document.createElement("th");
  thPrice.innerText = "Prezzo";

  firstRow.appendChild(thImage);
  firstRow.appendChild(thName);
  firstRow.appendChild(thQuantity);
  firstRow.appendChild(thPrice);
  table.appendChild(firstRow);

  const images = [
    "https://m.media-amazon.com/images/I/81yJf4K+L1L._AC_SY450_.jpg",
    "https://m.media-amazon.com/images/I/61MRTh9xotL._AC_SX679_.jpg",
    "https://www.tradeinn.com/f/13805/138054505/samsung-smartphone-galaxy-s21-5g-8gb-128gb-6.2.jpg",
    "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1661333885.70133010!500x500.png",
    "https://tomatosmartphone.it/wp-content/uploads/2022/06/EU-IN_Green.png",
  ];

  for (let i = 0; i < images.length; i++) {
    const newRow = document.createElement("tr");

    const tdImage = document.createElement("td");
    tdImage.innerHTML = `<img src=${images[i]} alt="smartphone" height="200" />`;
    const tdName = document.createElement("td");
    tdName.innerText = "Smartphone";
    const tdQuantity = document.createElement("td");
    tdQuantity.innerText = Math.floor(Math.random() * 50);
    const tdPrice = document.createElement("td");
    tdPrice.innerText = Math.floor(Math.random() * 500) + "€";

    newRow.appendChild(tdImage);
    newRow.appendChild(tdName);
    newRow.appendChild(tdQuantity);
    newRow.appendChild(tdPrice);
    table.appendChild(newRow);
  }

  container.appendChild(table);
};
generateTable();

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function () {};

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
console.log("Esercizio 14");
const hideAllImages = function () {
  const noImg = document.querySelectorAll("img");
  noImg.forEach((image) => {
    image.style.display = "none";
  });
};
hideAllImages();
/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
console.log("Esercizio 15");

const changeColorWithRandom = function () {};
