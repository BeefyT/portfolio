

const url = "https://eloquentjavascript.net/author";
const types = ["text/plain",
               "text/html",
               "application/json",
               "application/rainbows+unicorns"];

async function showTypes() {
  for (let type of types) {
    let response = await fetch(url, {headers: {accept: type}});
    console.log(`${type}: ${await response.text()}\n`);
  }
}

showTypes();