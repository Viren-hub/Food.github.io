// function demo(name) {
//     const req = new XMLHttpRequest();
//     req.open("GET", "https://restcountries.eu/rest/v2/name/" + name);
//     req.send();
//     req.onload = () => {
//         const indiadata = JSON.parse(req.response);
//         console.log(indiadata[0].languages[0].name);
//         document.write(`<div style='display: flex;  margin-left='100px;'><img height="100px" width="200px" < src="${indiadata[1].flag}"/><br>
//     <h3  >Language : ${indiadata[0].languages[0].name}</h3>`);

//     }
// }
// var countryName = document.getElementsByTagName("input").value;
// console.log(countryName)

// console.log(countryName);
// demo('contoryName');



// function getData(name) {

//     const data = fetch(`https://restcountries.eu/rest/v2/name/${name}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data[0].flag)
//             document.write(`<img src="${data[1].flag}" width="100" height="80"/></br>
//             <h3>NativeName:- ${data[0].nativeName}`)
//             return console.log("sucess!");

//         })

// }
// getData('ind')










function getData(name) {
    const data = fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(response => response.json())
        .then(data => {
            console.log(data[0].name)
            console.log(data[0].flag)
            document.write(`<img src="${data[1].flag}" width="100" height="80"/></br>
        <h3>NativeName:- ${data[0].nativeName}`)
            return console.log("sucess!");

        })

}






























getData('china')