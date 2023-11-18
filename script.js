const accesskey = "nZ3Y-dI8nisE54LTMA5KaIZ07OfletXSM6J7D1GtFIE";

const formel = document.querySelector("form");
const inputel = document.getElementById("search-input");
const serchresult = document.querySelector(".search-result");
const searchbutton = document.getElementById("search-button");
const showmorebutton = document.getElementById("show-more");
let search_result = document.getElementById("search_result")
// console.log(showmorebutton);

let inputData = ""
let page = 1;

async function searchimages() {
    // console.log("bgvnvgv");
    inputData = inputel.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;

    const response = await fetch(url)

    const data = await response.json()
    const result = data.results
    // console.log(result[0]);
    // console.log();

    // if (page === 1) {
        // serchresult.innerHTML = ""
    // }
    let image_div=``
    result.forEach((curr_el) => {
        // console.log(curr_el,"curr_elcurr_elcurr_elcurr_el");
        // const imagewraper = document.createElement("div");
        // imagewraper.classList.add("search-result");
        // const image = document.createElement("img");
        // image.scr = curr_el.urls.full;
        // image.alt = curr_el.alt_descrpition;
        // const imageLink = document.createElement("a");
        // imageLink.href = curr_el.links.html;
        // imageLink.target = "_blank";
        // imageLink.textContent = curr_el.alt_descrpition;

        // imagewraper.appendChild(image);
        // imagewraper.appendChild(imageLink);
        // serchresult.appendChild(imagewraper);

        image_div+=`
        <div class="search-result">
        <img src=${curr_el.urls.full} alt= >

        <a target="_blank" href= ${curr_el.urls.full}>${curr_el.alt_description
            }</a>
    </div>
        `
        
    });
    page++
    search_result.innerHTML = image_div
    if (page >= 1) {
        showmorebutton.style.display = "block"
    }
}

formel.addEventListener("submit", (event) => {
    event.preventDefault()
    page = 1;
    searchimages()
})
searchbutton.addEventListener("click",  () => {
    searchimages()
});

showmorebutton.addEventListener("click",  () => {
    searchimages()
});