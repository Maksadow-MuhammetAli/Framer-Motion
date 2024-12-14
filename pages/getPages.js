const fs = require("fs")

let pages = fs.readdirSync("../src/Hard")

let jsonPages = JSON.stringify(pages)

console.log(":)")

fs.writeFileSync("pages.json", jsonPages, (err) => {
    if (err) {
        console.error('Error writing JSON file:', err);
    } else {
        console.log('JSON file created successfully!');
    }
})

