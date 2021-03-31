let data = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// for (let i = 0; i < (data.split('+')).length; i++) {
//     let arr = data.split('+')
//     let subarr = arr[i].split(';')
//     console.log(`flight is ${subarr[0]} from ${subarr[1]} to ${subarr[2]} at time ${subarr[3]}`)
// }
// const allData = data.split('+');
// for (const i of allData) {
//     let subarr = i.split(';')
//     console.log(`flight is ${subarr[0]} from ${subarr[1]} to ${subarr[2]} at time ${subarr[3]}`)
// }

// let x = 0;
// while (x < data.split('+')) {
//     let x = data.substr(0, data.indexOf('+'))
//     data = data.replace(x, '')
//     data = data.slice(1)
//     x++;
// }




// for (let i = 0; i < len; i++) {
//     // console.log(i)
//     let x = data.substr(0, data.indexOf('+'))
//     data = data.replace(x, '')
//     data = data.slice(1)
//         // console.log(i)
//     let subarr = x.split(';')

//     console.log(`flight is ${subarr[0]} from ${subarr[1]} to ${subarr[2]} at time ${subarr[3]}`)

// }
// console.log(data)


//==================== indexof =================================//
// const firstData = data.substr(0, data.indexOf('+'))
// console.log(firstData)


// data = data.replace(firstData, '')

// data = data.slice(1)

// const seondData = data.substr(0, data.indexOf('+'))
// console.log(seondData)


// data = data.replace(seondData, '')
// data = data.slice(1)
// const thirdData = data.substr(0, data.indexOf('+'))
// console.log(thirdData)



// data = data.replace(thirdData, '')
// data = data.slice(1)
// const fourthData = data.substr(0, data.indexOf('+'))
// console.log(data)



// let dataMap=new Map();
// dataMap.set('first',12345);
// dataMap.set(1,'test123');
// dataMap.set([1,2,3,4],'myarray as a key');
// dataMap.set(true,12345678);
// console.log(dataMap);
// console.log(dataMap.get(1))
// console.log(dataMap.get('first'))
// console.log(dataMap.get(true))
// 










// const x = 'virendra11
// Gayakwad22
// Karanji ';
console.log("23virendra1".match(/[a-z,0-9]$/g))