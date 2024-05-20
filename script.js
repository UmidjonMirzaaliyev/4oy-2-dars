// 1-masala

// // Foydalanuvchidan butun sonni kiritishni so'rang
// let input = prompt("Butun son kiriting:");

// // Kiritilgan qiymatni butun songa aylantirish
// let number = parseInt(input);

// // Son musbat ekanligini tekshiring va agar u musbat bo'lsa, uni 1 ga oshiring
// if (number > 0) {
//     number += 1;
// }

// // Natijani ekranda ko'rsating
// alert("Natija: " + number);

//################################################################

// 2-masala

// Foydalanuvchidan butun sonni kiritishni so'raymiz
// let son = prompt("Butun son kiriting:");

// // Kiritilgan qiymatni butun songa aylantiramiz
// let son_raqami = parseInt(son);

// // Son musbat ekanligini tekshiramiz va agar u musbat bo'lsa, uni 1 ga oshiramiz
// if (son_raqami > 0) son_raqami += 1;

// // Natijani ekranga chiqaramiz
// document.write("<h1>Natija:</h1>");
// document.write("<p>" + son_raqami + "</p>");

//################################################################

// 3-masala

// let son = prompt("Butun son kiriting:");
// son = parseInt(son);

// if (son > 0) {
//     son += 1;
// } else if (son < 0) {
//     son -= 2;
// } else {
//     son = 10;
// }

// console.log("Natija:", son);

//#############################################################

// 4-masala

// let son1 = prompt("Birinchi butun sonni kiriting:");
// let son2 = prompt("Ikkinchi butun sonni kiriting:");
// let son3 = prompt("Uchinchi butun sonni kiriting:");

// son1 = parseInt(son1);
// son2 = parseInt(son2);
// son3 = parseInt(son3);

// let positiveCount = 0;

// if (son1 > 0) {
//     positiveCount++;
// }

// if (son2 > 0) {
//     positiveCount++;
// }

// if (son3 > 0) {
//     positiveCount++;
// }

// console.log("Musbat sonlar soni:", positiveCount);

//#############################################################

// 5-masala

// let son1 = prompt("Birinchi butun sonni kiriting:");
// let son2 = prompt("Ikkinchi butun sonni kiriting:");

// son1 = parseInt(son1);
// son2 = parseInt(son2);

// let kattaSon;

// if (son1 > son2) {
//     kattaSon = son1;
// } else {
//     kattaSon = son2;
// }

// console.log("Eng katta son:", kattaSon);

//###############################################################

// 6-masala

// let son1 = prompt("Birinchi butun sonni kiriting:");
// let son2 = prompt("Ikkinchi butun sonni kiriting:");

// son1 = parseInt(son1);
// son2 = parseInt(son2);

// let kichikSonTartibRaqami;

// if (son1 < son2) {
//     kichikSonTartibRaqami = 1;
// } else if (son2 < son1) {
//     kichikSonTartibRaqami = 2;
// } else {
//     kichikSonTartibRaqami = "Sonlar teng, tartib raqami yo'q";
// }

// console.log("Eng kichik son tartib raqami:", kichikSonTartibRaqami);

//############################################################################

// 7-masala

// let son1 = prompt("Birinchi butun sonni kiriting:");
// let son2 = prompt("Ikkinchi butun sonni kiriting:");

// son1 = parseInt(son1);
// son2 = parseInt(son2);

// let kichikSonTartibRaqami;

// if (son1 < son2) {
//     kichikSonTartibRaqami = 1;
// } else if (son2 < son1) {
//     kichikSonTartibRaqami = 2;
// } else {
//     kichikSonTartibRaqami = "Sonlar teng, tartib raqami yo'q";
// }

// console.log("Eng kichik son tartib raqami:", kichikSonTartibRaqami);

//##########################################################

// 8-masala

// let son1 = prompt("Birinchi butun sonni kiriting:");
// let son2 = prompt("Ikkinchi butun sonni kiriting:");

// son1 = parseInt(son1);
// son2 = parseInt(son2);

// if (son1 > son2) {
//     console.log("Eng katta son:", son1);
//     console.log("Eng kichik son:", son2);
// } else if (son2 > son1) {
//     console.log("Eng katta son:", son2);
//     console.log("Eng kichik son:", son1);
// } else {
//     console.log("Ikki son ham teng:", son1);
// }

//##################################################

// 9-masala

// let A = prompt("A ni kiriting:");
// let B = prompt("B ni kiriting:");

// A = parseFloat(A);
// B = parseFloat(B);

// if (A > B) {
//     let temp = A;
//     A = B;
//     B = temp;
// }

// console.log("A ning yangi qiymati:", A);
// console.log("B ning yangi qiymati:", B);

//#################################################

// 10-masala

// let A = prompt("A ni kiriting:");
// let B = prompt("B ni kiriting:");

// A = parseInt(A);
// B = parseInt(B);

// if (A !== B) {
//     A += B;
//     B = A;
// } else {
//     A = 0;
//     B = 0;
// }

// console.log("A ning yangi qiymati:", A);
// console.log("B ning yangi qiymati:", B);

//###################################################

// 11-masala

// let A = prompt("A ni kiriting:");
// let B = prompt("B ni kiriting:");

// A = parseInt(A);
// B = parseInt(B);

// if (A !== B) {
//     if (A > B) {
//         B = A;
//     } else {
//         A = B;
//     }
// } else {
//     A = 0;
//     B = 0;
// }

// console.log("A ning yangi qiymati:", A);
// console.log("B ning yangi qiymati:", B);

//######################################################

//12-masala

// let son1 = prompt("Birinchi sonni kiriting:");
// let son2 = prompt("Ikkinchi sonni kiriting:");
// let son3 = prompt("Uchinchi sonni kiriting:");

// son1 = parseInt(son1);
// son2 = parseInt(son2);
// son3 = parseInt(son3);

// let engKichikSon;

// if (son1 <= son2 && son1 <= son3) {
//     engKichikSon = son1;
// } else if (son2 <= son1 && son2 <= son3) {
//     engKichikSon = son2;
// } else {
//     engKichikSon = son3;
// }

// console.log("Eng kichik son:", engKichikSon);

//#########################################################

//13-masala

// let son1 = prompt("Birinchi sonni kiriting:");
// let son2 = prompt("Ikkinchi sonni kiriting:");
// let son3 = prompt("Uchinchi sonni kiriting:");

// son1 = parseInt(son1);
// son2 = parseInt(son2);
// son3 = parseInt(son3);

// let kichikSon, kattaSon;

// if (son1 <= son2 && son1 <= son3) {
//     kichikSon = son1;
//     if (son2 >= son3) {
//         kattaSon = son2;
//     } else {
//         kattaSon = son3;
//     }
// } else if (son2 <= son1 && son2 <= son3) {
//     kichikSon = son2;
//     if (son1 >= son3) {
//         kattaSon = son1;
//     } else {
//         kattaSon = son3;
//     }
// } else {
//     kichikSon = son3;
//     if (son1 >= son2) {
//         kattaSon = son1;
//     } else {
//         kattaSon = son2;
//     }
// }

// console.log("Kichik son:", kichikSon);
// console.log("Katta son:", kattaSon);

//##################################################

// 14-masala

// let son1 = prompt("Birinchi sonni kiriting:");
// let son2 = prompt("Ikkinchi sonni kiriting:");
// let son3 = prompt("Uchinchi sonni kiriting:");

// son1 = parseInt(son1);
// son2 = parseInt(son2);
// son3 = parseInt(son3);

// let kichikSon, kattaSon;

// if (son1 <= son2 && son1 <= son3) {
//     kichikSon = son1;
//     if (son2 >= son3) {
//         kattaSon = son2;
//     } else {
//         kattaSon = son3;
//     }
// } else if (son2 <= son1 && son2 <= son3) {
//     kichikSon = son2;
//     if (son1 >= son3) {
//         kattaSon = son1;
//     } else {
//         kattaSon = son3;
//     }
// } else {
//     kichikSon = son3;
//     if (son1 >= son2) {
//         kattaSon = son1;
//     } else {
//         kattaSon = son2;
//     }
// }

// console.log("Kichik son:", kichikSon);
// console.log("Katta son:", kattaSon);

//#############################################

// 15-masala

// let son1 = prompt("Birinchi sonni kiriting:");
// let son2 = prompt("Ikkinchi sonni kiriting:");
// let son3 = prompt("Uchinchi sonni kiriting:");

// son1 = parseInt(son1);
// son2 = parseInt(son2);
// son3 = parseInt(son3);

// let sum1 = son1 + son2;
// let sum2 = son2 + son3;
// let sum3 = son1 + son3;

// if (sum1 >= sum2 && sum1 >= sum3) {
//     console.log("Eng katta yig'indi:", son1, "+", son2, "=", sum1);
// } else if (sum2 >= sum1 && sum2 >= sum3) {
//     console.log("Eng katta yig'indi:", son2, "+", son3, "=", sum2);
// } else {
//     console.log("Eng katta yig'indi:", son1, "+", son3, "=", sum3);
// }

