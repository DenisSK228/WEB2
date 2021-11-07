// // try {
// //     $("#foo").on("click", function () {
// //         console.log(3)
// //         throw(new Error);
// //     })
// // } catch (error) {
// //     console.log(error);
// // }



// // setTimeout(function () {
// //     console.log(1);
// // }, 2000)

// // console.log(2);



// // PROMISE

// let government = new Promise(
//     function (resolve) {
//         setTimeout(function () {
//             let i = 1;
//             console.log("Нологи собраны");
//             if (i == 1) {
//                 resolve(1000000)            //Отслеживает выполнение promise   (government)
//             } else {
//                 reject("Нологи не собраны :(")
//             }
//         }, 2000)
//     });

// government.then(function (result) {
//     console.log("Бабки в карман");
//     a += result;
//     return a;
// }).then(function (result) {
//     a -= a * 0.5;
//     console.log(`Ушло в карман В. В. ${a}`);
// })
// console.log(a);


let govs = [
    new Promise(resolve => setTimeout(() => resolve(1), 1000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 3000))
]

Promise.all(govs).then(function (result) {
    console.log(result);
});