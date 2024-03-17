console.log("hello");

let btn = document.getElementById("btn");
let text = document.getElementById("text");
let auther = document.getElementById("auther");
let data = [];
const getnewtext = () => {
    let rnum = Math.floor(Math.random() * data.length);
    let quote = data[rnum].text;
    text.innerText = `${quote}`;
    if (data[rnum].author == null)
        auther.innerHTML = "-unknown";
    else
        auther.innerHTML = `-${data[rnum].author}`;
}
const gettext = async () => {
    try {
        let response = await fetch("https://type.fit/api/quotes");
        data = await response.json();
        getnewtext();
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
btn.addEventListener('click', getnewtext);

gettext();
