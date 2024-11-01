const fs = require("fs");
const folderName = process.argv[2] || "project";

try {
  fs.mkdirSync(folderName);

  fs.writeFileSync(
    `${folderName}/index.html`,
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${folderName} project</title>
</head>
<body>
    
</body>
</html>`
  );
  fs.writeFileSync(`${folderName}/style.css`, "");
  fs.writeFileSync(`${folderName}/main.js`, "");
} catch (err) {
  console.log("Something went wrong", err);
}
