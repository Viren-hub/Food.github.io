// function getCountryData(name) {
//     const testURL = new XMLHttpRequest();
//     testURL.open('GET', 'https://restcountries.eu/rest/v2/name/' + name);
//     testURL.send();
//     testURL.addEventListener('load', calbac);
// }

// function calbac(data) {
//     const indiaData = JSON.parse(this.response);
//     const req = new XMLHttpRequest();
//     req.open('GET', `https://restcountries.eu/rest/v2/callingcode/372 ${indiaData[0]}`);
//     req.addEventListener('load', (d) => {
//         const indiaData1 = JSON.parse(d)
//         console.log(d);
//         const HTML1 = `
//             <article class="country"/>
//             <div class=" country_img" src="${indiaData[0].flag}"/>`;
//         document.querySelector('.countries').insertAdjacentElement('beforeend', html1);
//         document.querySelector('.countries').getElementsByClassName.opacity = 1;

//     })

//     getCountryData('ind')

// }

const getCountryData = async(name) => {
    const data = await fetch('https://restcountries.eu/rest/v2/name/' + name);
    const indiaData = await data.json();
    console.log(indiaData[1].name);
    countryData(indiaData);

    function countryData(data) {
        const indiaData = data;
        const html = `
                <article class="country">
                    <img width="200" height="150" class="country__img" src="${indiaData[0].flag}" />
                    <div class="country__data">
                    <h3 class="country__name">${indiaData[0].name}</h3>
                    <h4 class="country__region">${indiaData[0].region}</h4>
                    <p class="country__row"><span>👫</span>${(
                        +indiaData[0].population / 10000000
                    ).toFixed(1)} people</p>
                    <p class="country__row"><span>🗣️</span>${indiaData[0].languages[0].name}</p>
                    <p class="country__row"><span>💰</span>${indiaData[0].currencies[0].name}</p>
                    </div>
                    
                </article>
                `;
        document.querySelector('.countries').insertAdjacentHTML('beforeend', html);
        document.querySelector('.countries').style.opacity = 1;
    }
}



getCountryData('ind');