const templateField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p" );
const dateField = document.querySelector("weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
//const searchField = document.querySelector(".weather3 img")

let target = "delhi";
const fetchData = async ()=>{
    const url=`https://api.weatherapi.com/v1/current.json?key=d3dbfc15761243689f443805232404&q=new delhi=${target}`

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const {
        current:{
            temp_c,
            condition:{text,icon},
        },
        location:{name}
    } = data;
    updateDOM(temp_c);
};
function updateDOM (temperature){
    templateField.innerText = temperature;
}
fetchData();

function searchField(e){
    e.preventDefault();

    target = searchField.value;
    fetchData(target);``
};