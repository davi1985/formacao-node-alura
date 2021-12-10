const fs = require("fs");
const path = require("path");

module.exports = (imagePath, fileName, callbackImageCreated) => {
  const validTypes = ["jpg", "png", "jpeg"];
  const type = path.extname(imagePath);
  const isValidType = validTypes.indexOf(type.substring(1)) !== -1;

  if (!isValidType) {
    const error = "Error! Invalid image type";
    console.log(error);

    return callbackImageCreated(error);
  }

  const newPath = `./assets/img/${fileName}${type}`;

  return fs
    .createReadStream(imagePath)
    .pipe(fs.createWriteStream(newPath))
    .on("finish", () => callbackImageCreated(false, newPath));
};
