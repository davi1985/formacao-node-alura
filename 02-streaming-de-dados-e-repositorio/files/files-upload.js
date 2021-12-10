const fs = require("fs");

fs.readFile("./assets/dog.jpg", (error, buffer) => {
  console.log("imagem buffered", buffer);

  fs.writeFile("./assets/dog2.jpg", buffer, (error) => {
    console.log("image rewrite");
  });
});
