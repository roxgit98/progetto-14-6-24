const submit = document.getElementById("submit");
const edit = document.getElementById("edit");
const elimina = document.getElementById("delete");
const reset = document.getElementById("reset");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (confirm("confermi creazione prodotto?")) {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const brand = document.getElementById("brand").value;

    const newProduct = {
      name: name,
      description: description,
      brand: brand,
      imageUrl: imageUrl,
      price: price,
    };

    fetch("https://striveschool-api.herokuapp.com/api/product/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmE2MTdjMjM5YzAwMTUyZjRiNDEiLCJpYXQiOjE3MTgzNTI0ODEsImV4cCI6MTcxOTU2MjA4MX0.JYXhcjs6tkz87MVTc-x1HbiUy7L2ZzW5srbCaAjYHSg",
      },

      body: JSON.stringify(newProduct),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    });
  }
});

edit.addEventListener("click", function (e) {
  e.preventDefault();
  if (confirm("confermi modifica prodotto?")) {
    const _id = document.getElementById("_id").value;
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const brand = document.getElementById("brand").value;

    const editProduct = {
      name: name,
      description: description,
      brand: brand,
      imageUrl: imageUrl,
      price: price,
    };

    fetch(`https://striveschool-api.herokuapp.com/api/product/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmE2MTdjMjM5YzAwMTUyZjRiNDEiLCJpYXQiOjE3MTgzNTI0ODEsImV4cCI6MTcxOTU2MjA4MX0.JYXhcjs6tkz87MVTc-x1HbiUy7L2ZzW5srbCaAjYHSg",
      },

      body: JSON.stringify(editProduct),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    });
  }
});

elimina.addEventListener("click", function (e) {
  e.preventDefault();
  if (confirm("confermi eliminazione prodotto?")) {
    const _id = document.getElementById("_id").value;
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const brand = document.getElementById("brand").value;

    const editProduct = {
      name: name,
      description: description,
      brand: brand,
      imageUrl: imageUrl,
      price: price,
    };

    fetch(`https://striveschool-api.herokuapp.com/api/product/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmE2MTdjMjM5YzAwMTUyZjRiNDEiLCJpYXQiOjE3MTgzNTI0ODEsImV4cCI6MTcxOTU2MjA4MX0.JYXhcjs6tkz87MVTc-x1HbiUy7L2ZzW5srbCaAjYHSg",
      },

      body: JSON.stringify(editProduct),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    });
  }
});

reset.addEventListener("click", function (e) {
  e.preventDefault();

  const _id = (document.getElementById("_id").value = "");
  const name = (document.getElementById("name").value = "");
  const description = (document.getElementById("description").value = "");
  const price = (document.getElementById("price").value = "");
  const imageUrl = (document.getElementById("imageUrl").value = "");
  const brand = (document.getElementById("brand").value = "");
});
