const express = require("express");
const ProductManager = require("./productmanager");

const app = express();
const manager = new ProductManager();

app.get("/", (req, res) => {
  manager.addProduct(
    "Producto 1",
    "Descripcion producto 1",
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(9000),
    "Imagen-url",
    23,
    7
  );
  manager.addProduct(
    "Producto 2",
    "Descripcion producto 2",
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(3500),
    "Imagen-url",
    85,
    12
  );
  manager.addProduct(
    "Producto 3",
    "Descripcion producto 3",
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(5400),
    "Imagen-url",
    187,
    24
  );
  manager.addProduct(
    "Producto 4",
    "Descripcion producto 4",
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(12000),
    "Imagen-url",
    245,
    2
  );
  manager.addProduct(
    "Producto 5",
    "Descripcion producto 5",
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(1000),
    "Imagen-url",
    542,
    37
  );
  manager.addProduct(
    "Producto 6",
    "Descripcion producto 6",
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(7370),
    "Imagen-url",
    852,
    98
  );
  manager.addProduct(
    "Producto 7",
    "Descripcion producto 7",
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(9200),
    "Imagen-url",
    412,
    45
  );
  manager.addProduct(
    "Producto 8",
    "Descripcion producto 8",
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(17399),
    "Imagen-url",
    53,
    12
  );
  manager.addProduct(
    "Producto 9",
    "Descripcion producto 9",
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(8400),
    "Imagen-url",
    41,
    543
  );
  manager.addProduct(
    "Producto 10",
    "Descripcion producto 10",
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(4000),
    "Imagen-url",
    653,
    8
  );

  res.send("Products generated successfully.");
});

app.get("/products", async (req, res) => {
  const ProductsFromDB = await manager.getProducts();
  const Limit = req.query.limit;

  if (!Limit) {
    res.send({ Products: ProductsFromDB });
  } else if (Limit <= ProductsFromDB.length) {
    return res.send({ ProductsSolicited: ProductsFromDB.slice(0, Limit) });
  } else {
    res.send("Products can not be displayed. Please check your query param.");
  }
});

app.get("/products/:pid", async (req, res) => {
  const ProductsFromDB = await manager.getProducts();
  const IdParam = req.params.pid;

  const FindProductByParam = ProductsFromDB[IdParam];

  if (!FindProductByParam) {
    res.send(
      "Product not found. Please check if the product id you are looking for is included on the product list."
    );
  } else {
    res.send(FindProductByParam);
  }
});

app.listen(8080, () => console.log("Express server is running."));
