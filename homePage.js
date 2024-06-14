const loadProducts = () => {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmE2MTdjMjM5YzAwMTUyZjRiNDEiLCJpYXQiOjE3MTgzNTI0ODEsImV4cCI6MTcxOTU2MjA4MX0.JYXhcjs6tkz87MVTc-x1HbiUy7L2ZzW5srbCaAjYHSg",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("errore");
      }
    })

    .then((productObj) => {
      const cardContainer = document.getElementById("card-container");

      if (productObj) {
        productObj.forEach((prodotto) => {
          const col = document.createElement("div");
          col.classList.add("col");

          const card = document.createElement("div");
          card.classList.add("card");
          card.classList.add("mb-4");
          card.classList.add("shadow-sm");

          const img = document.createElement("img");
          img.src = prodotto.imageUrl;
          img.alt = prodotto.name;
          img.classList.add("bd-placeholder-img");
          img.classList.add("card-img-top");

          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");

          const h5 = document.createElement("h5");
          h5.classList.add("card-title");
          h5.textContent = prodotto.name;

          const p = document.createElement("p");
          p.classList.add("card-text");
          p.textContent = prodotto.price;

          const a = document.createElement("a");
          a.href = "#";
          a.classList.add("btn");
          a.classList.add("btn-secondary");
          a.textContent = "modifica";

          cardContainer.appendChild(col);
          col.appendChild(card);
          card.appendChild(img);
          card.appendChild(cardBody);
          cardBody.appendChild(h5);
          cardBody.appendChild(p);
          cardBody.appendChild(a);
        });
      } else {
        console.log("no data");
      }
    })

    .catch((err) => console.log(err));
};

window.addEventListener("DOMContentLoaded", loadProducts);
