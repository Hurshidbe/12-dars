////////////////////////////////  1  -  misol   //////////////////////////////////////////

// function raqamlarYigindisi(son) {
//   let stringSon = son.toString();
//   let yigindi = 0;

//   for (let i = 0; i < stringSon.length; i++) {
//     yigindi += parseInt(stringSon[i]);
//   }

//   return yigindi;
// }

// console.log(raqamlarYigindisi(456));
// console.log(raqamlarYigindisi(123));

////////////////////////////////  2  -  misol   //////////////////////////////////////////

// function sozlarniTekshirish(matn) {
//     let sozlar = matn.split(' ');
//     let sozlarSoni = sozlar.length;
//     let engUzunSoz = '';

//     sozlar.forEach(soz => {
//         if (soz.length > engUzunSoz.length) {
//             engUzunSoz = soz;
//         }
//     });

//     return {
//         sozlarSoni: sozlarSoni,
//         engUzunSoz: engUzunSoz
//     };
// }

// let natija = sozlarniTekshirish("Men JavaScript dasturchiman");
// console.log("So'zlar soni:", natija.sozlarSoni);
// console.log("Eng uzun so'z:", natija.engUzunSoz);

////////////////////////////////  3  -  misol   //////////////////////////////////////////

// function kattaSonlarniAjrat(massiv, raqam) {
//     return massiv.filter(son => son > raqam);
// }

// let massiv = [15, 6, 23, 10];
// let natija = kattaSonlarniAjrat(massiv, 10);
// console.log(natija);

////////////////////////////////  4  -  misol   //////////////////////////////////////////

// function harflarniSanash(soz) {
//     let hisob = {};

//     for (let harf of soz) {
//         hisob[harf] = (hisob[harf] || 0) + 1;
//     }

//     return hisob;
// }

// let natija = harflarniSanash("hello");
// console.log(natija);

////////////////////////////////  5  -  misol   //////////////////////////////////////////

// let a = 7;
// let tub = true;

// for (let i = 2; i < a; i++) {
//   if (a % i == 0) {
//     tub = false;
//     break;
//   }
// }

// if (tub && a > 1) {
//   console.log("son tub");
// } else {
//   console.log("son tub emas");
// }

////////////////////////////////  6  -  misol   //////////////////////////////////////////

////////////////////////////////  7  -  misol   //////////////////////////////////////////

// function takrorlanuvchiElementlar(massiv) {
//   let hisob = {};
//   let takrorlanuvchilar = 0;

//   massiv.forEach((son) => {
//     hisob[son] = (hisob[son] || 0) + 1;
//   });

//   for (let key in hisob) {
//     if (hisob[key] > 1) {
//       takrorlanuvchilar++;
//     }
//   }

//   return takrorlanuvchilar;
// }

// let massiv = [1, 2, 3, 2, 4, 1];
// let natija = takrorlanuvchiElementlar(massiv);
// console.log(natija);

// ////////////////////////////////  8  -  misol   //////////////////////////////////////////

// function birinchiHarfKatta(matn) {
//   return matn
//     .split(" ")
//     .map((soz) => soz.charAt(0).toUpperCase() + soz.slice(1))
//     .join(" ");
// }

// let natija = birinchiHarfKatta("hello world");
// console.log(natija);

// ////////////////////////////////  9  -  misol   //////////////////////////////////////////
// Topshiriq: Raqamlarni ajratish
// Berilgan matndan barcha raqamlarni ajratib oling
// Masalan:
// "salom123dunyo456" => "123456"

// Yo'nalish:
// - replace() va regular expression
// - yoki split() va filter()
// - raqamlarni birlashtiring
// ////////////////////////////////  10  -  misol   //////////////////////////////////////////
// function elementlarniGuruhlash(massiv) {
//     return massiv.reduce((result, element) => {
//         let tur = typeof element;
//         if (!result[tur]) {
//             result[tur] = [];
//         }
//         result[tur].push(element);
//         return result;
//     }, {});
// }

// let natija = elementlarniGuruhlash([1, "salom", 2, "dunyo"]);
// console.log(natija);
