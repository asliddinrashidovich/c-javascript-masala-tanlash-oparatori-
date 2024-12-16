// masala 1

// function finder(num) {
//   switch(num) {
//     case 1:
//       console.log(`1-Dushanba`)
//       break;
//     case 2:
//       console.log(`2-Seshanba`)
//       break;
//     case 3:
//       console.log(`3-Chorshanba`)
//       break;
//     case 4:
//       console.log(`4-Payshanba`)
//       break;
//     case 5:
//       console.log(`5-Juma`);
//       break;
//     case 6:
//       console.log(`6-Shanba`);
//       break;
//     case 7:
//       console.log(`7-Yakshanba`)
//       break
//   }
// }

// finder(4)

// masala 2;

// function finder(K) {
//   switch(K) {
//     case 1:
//       console.log(`1-Yomon`)
//       break;
//     case 2:
//       console.log(`2-Qoniqarsiz`)
//       break;
//     case 3:
//       console.log(`3-Qoniqarli`)
//       break;
//     case 4:
//       console.log(`4-yaxshi`)
//       break;
//     case 5:
//       console.log(`5-A'lo`);
//       break;
//     default:
//       console.log('xato')
//   }
// }

// finder(4)

// masala 3;

// function finder(K) {
//   switch(K) {
//     case 1:
//       console.log(`1-oy qish`)
//       break;
//     case 2:
//       console.log(`2-oy qish`)
//       break;
//     case 3:
//       console.log(`3-oy bahor`)
//       break;
//     case 4:
//       console.log(`4-oy bahor`)
//       break;
//     case 5:
//       console.log(`5-oy bahor`);
//       break;
//     case 6:
//       console.log(`6-oy yoz`)
//       break;
//     case 7:
//       console.log(`7-oy yoz`)
//       break;
//     case 8:
//       console.log(`8-oy yoz`)
//       break;
//     case 9:
//       console.log(`9-oy kuz`)
//       break;
//     case 10:
//       console.log(`10-oy kuz`);
//       break;
//     case 11:
//       console.log(`11-oy kuz`)
//       break;
//     case 12:
//       console.log(`12-oy qish`);
//       break;
//   }
// }

// finder(6)\

// masala 5;

// function finder(A, B, Amal) {
//   switch(Amal) {
//     case '+':
//       console.log(A + B)
//       break;
//     case '-':
//       console.log(A - B)
//       break;
//     case '/':
//       console.log(A / B)
//       break;
//     case '*':
//       console.log(A * B)
//       break;
//   }
// }

// finder(6, 3, )

// masala 6;


// function finder(A, B) {
//   switch(A) {
//     case 1:
//       console.log(`${B}-Ditsimetr va  ${B/10} m ga teng`)
//       break;
//     case 2:
//       console.log(`${B}-Kilometr va  ${B * 1000} m ga teng`)
//       break;
//     case 3:
//       console.log(`${B}-Metr va  ${B} m ga teng`)
//       break;
//     case 4:
//       console.log(`${B}-Millimetr va  ${B/1000} m ga teng`)
//       break;
//     case 5:
//       console.log(`${B}-Santimetr va  ${B/100} m ga teng`)
//       break;
//   }
// }

// finder(5, 3)

// masala 7

// function finder(A, B) {
//   switch(A) {
//     case 1:
//       console.log(`${B}-kilogram va ${B} kg ga teng`)
//     case 2:
//       console.log(`${B}-milligram va ${B/10000} kg ga teng`)
//     case 3:
//       console.log(`${B}-gramm va ${B/1000} kg ga teng`)
//     case 4:
//       console.log(`${B}-tonna va ${B * 1000} kg ga teng`)
//     case 5:
//       console.log(`${B}-tonna va ${B * 100} kg ga teng`)
//   }
// }

// finder(2, 300)

// masala 8;

// function sana(D, M) {
//   let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   let a = 0;

//   for(let i=0; i < M - 1; i++) {
//     a += daysInMonth[i];
//   }
//   switch(M) {
//     case 1:
//       console.log(`${D},${M} bu sana "Yanvar" oyining ${D}-kuni va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 2:
//       console.log(`${D},${M} bu sana "Fevral" oyining ${D}-kuni va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 3:
//       console.log(`${D},${M} bu sana "Mart" oyining ${D}-kuni va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 4:
//       console.log(`${D},${M} bu sana "April" oyining ${D}-kuni va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 5:
//       console.log(`${D},${M} bu sana "May" oyining ${D}-kuni va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 6:
//       console.log(`${D},${M} bu sana "Iyun" oyining ${D}-kuni va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 7:
//       console.log(`${D},${M} bu sana "Iyul" oyining ${D}-kuni va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 8:
//       console.log(`${D},${M} bu sana "August" oyining ${D}-kuni va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 9:
//       console.log(`${D},${M} bu sana "Sentyabr" oyining ${D}-kuni va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 10:
//       console.log(`${D},${M} bu sana "Oktyabr" oyining ${D}-kuni va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 11:
//       console.log(`${D},${M} bu sana "Noyabr" oyining ${D}-kuni va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 12:
//       console.log(`${D},${M} bu sana "Dekabr" oyining ${D}-kuni va yilning ${a + D} kuni hisoblanadi`)
//       break;
//   }
// }

// sana(14 , 12)

// masala 9;

// function sana(D, M) {
//   let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   let a = 0;
  
//   for(let i=0; i < M - 1; i++) {
//     a += daysInMonth[i];
//   }
//   D = D + 1
//   switch(M) {
//     case 1:
//       console.log(`${D - 1},${M} bu sana "Yanvar" oyining ${D - 1}-kuni va undan keyingi kun ${D}-sana va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 2:
//       console.log(`${D - 1},${M} bu sana "Fevral" oyining ${D - 1}-kuni va undan keyingi kun ${D}-sana va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 3:
//       console.log(`${D - 1},${M} bu sana "Mart" oyining ${D - 1}-kuni va undan keyingi kun ${D}-sana va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 4:
//       console.log(`${D - 1},${M} bu sana "April" oyining ${D - 1}-kuni va undan keyingi kun ${D}-sana va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 5:
//       console.log(`${D - 1},${M} bu sana "May" oyining ${D - 1}-kuni va undan keyingi kun ${D}-sana va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 6:
//       console.log(`${D - 1},${M} bu sana "Iyun" oyining ${D - 1}-kuni va undan keyingi kun ${D}-sana va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 7:
//       console.log(`${D - 1},${M} bu sana "Iyul" oyining ${D - 1}-kuni va undan keyingi kun ${D}-sana va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 8:
//       console.log(`${D - 1},${M} bu sana "August" oyining ${D - 1}-kuni va undan keyingi kun ${D}-sana va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 9:
//       console.log(`${D - 1},${M} bu sana "Sentyabr" oyining ${D - 1}-kuni va undan keyingi kun ${D}-sana va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 10:
//       console.log(`${D - 1},${M} bu sana "Oktyabr" oyining ${D - 1}-kuni va undan keyingi kun ${D}-sana va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 11:
//       console.log(`${D - 1},${M} bu sana "Noyabr" oyining ${D - 1}-kuni va undan keyingi kun ${D}-sana va yilning ${a + D} kuni hisoblanadi`)
//       break;
//     case 12:
//       console.log(`${D - 1},${M} bu sana "Dekabr" oyining ${D - 1}-kuni va undan keyingi kun ${D}-sana va yilning ${a + D} kuni hisoblanadi`)
//       break;
//   }
// }

// sana(14 , 12)

// masala 10;

// function robot(Y) {

//   switch(Y) {
//     case 's':
//       console.log(`Robot shimolga qarab turibdi va ${holat} ? harakatlanyabdi : harakatlanmaybdi`);
//     case 'j':
//       console.log(`Robot janubga qarab turibdi va ${holat} ? harakatlanyabdi : harakatlanmaybdi`);
//     case 'q':
//       console.log(`Robot sharqqa qarab turibdi va ${holat} ? harakatlanyabdi : harakatlanmaybdi`);
//     case 'g':
//       console.log(`Robot g'arbga qarab turibdi va ${holat} ? harakatlanyabdi : harakatlanmaybdi`);
//   }
// }

// robot(1)

// masala 12;

// function doira(x, y) {
//   let doiraXosaalari = {
//     S: 0,
//     R: 0,
//     D: 0,
//     L: 0,
//     p: 3.14
//   }
//   switch(y){
//     case 1:
//       doiraXosaalari.R = x;
//       doiraXosaalari.D = 2 * doiraXosaalari.R;
//       doiraXosaalari.L = doiraXosaalari.D * doiraXosaalari.p;
//       doiraXosaalari.S = doiraXosaalari.p * doiraXosaalari.R * doiraXosaalari.R;
//       console.log(`Doiraning xossalaridan Radiusi:${doiraXosaalari.R}, Yuzi:${doiraXosaalari.S}, Diometri:${doiraXosaalari.S}, Uzunligi:${doiraXosaalari.L} ga teng`)
//       break;
//     case 2:
//       doiraXosaalari.R = doiraXosaalari.D / 2;
//       doiraXosaalari.D = x;
//       doiraXosaalari.L = doiraXosaalari.D * doiraXosaalari.p;
//       doiraXosaalari.S = doiraXosaalari.p * doiraXosaalari.R * doiraXosaalari.R;
//       console.log(`Doiraning xossalaridan Radiusi:${doiraXosaalari.R}, Yuzi:${doiraXosaalari.S}, Diometri:${doiraXosaalari.S}, Uzunligi:${doiraXosaalari.L} ga teng`)
//       break;
//     case 3:
//       doiraXosaalari.R = doiraXosaalari.D / 2;
//       doiraXosaalari.D = doiraXosaalari.L / doiraXosaalari.p;
//       doiraXosaalari.L = x;
//       doiraXosaalari.S = doiraXosaalari.p * doiraXosaalari.R * doiraXosaalari.R;
//       console.log(`Doiraning xossalaridan Radiusi:${doiraXosaalari.R}, Yuzi:${doiraXosaalari.S}, Diometri:${doiraXosaalari.S}, Uzunligi:${doiraXosaalari.L} ga teng`)
//       break;
//     case 4:
//       doiraXosaalari.R = (doiraXosaalari.S / doiraXosaalari.p) / doiraXosaalari.R;
//       doiraXosaalari.D = 2 * doiraXosaalari.R;
//       doiraXosaalari.L = doiraXosaalari.D * doiraXosaalari.p;
//       doiraXosaalari.S = x;
//       console.log(`Doiraning xossalaridan Radiusi:${doiraXosaalari.R}, Yuzi:${doiraXosaalari.S}, Diometri:${doiraXosaalari.S}, Uzunligi:${doiraXosaalari.L} ga teng`)
//       break;
//   }
// }

// doira(24,4)

// masala 13

// function tengyonli(x, y) {
//     let elements = {
//         a: 0,
//         c: 0,
//         h: 0,
//         S: 0,
//     }
//     switch (y) {
//         case 1:
//             elements.a = x;
//             elements.c = elements.a * Math.sqrt(2);
//             elements.h = elements.c / 2;
//             elements.S = (elements.c * elements.h) / 2;
//             console.log(`Bu teng yonli uchburchakning Kateti: ${elements.a}, Gipatinuzasi: ${elements.c}, Balandligi: ${elements.h}, Yuzasi: ${elements.S} ga teng`);
//             break;
//         case 2:
//             elements.a = elements.c / Math.sqrt(2);
//             elements.c = x;
//             elements.h = elements.c / 2;
//             elements.S = (elements.c * elements.h) / 2;
//             console.log(`Bu teng yonli uchburchakning Kateti: ${elements.a}, Gipatinuzasi: ${elements.c}, Balandligi: ${elements.h}, Yuzasi: ${elements.S} ga teng`);
//             break;
//         case 3:
//             elements.a = elements.c / Math.sqrt(2);
//             elements.c = elements.h * 2;
//             elements.h = x;
//             elements.S = (elements.c * elements.h) / 2;
//             console.log(`Bu teng yonli uchburchakning Kateti: ${elements.a}, Gipatinuzasi: ${elements.c}, Balandligi: ${elements.h}, Yuzasi: ${elements.S} ga teng`);
//             break;
//         case 4:
//             elements.a = elements.c / Math.sqrt(2);
//             elements.c = Math.sqrt(elements.S * 4);
//             elements.h = elements.c / 2;
//             elements.S = x;
//             console.log(`Bu teng yonli uchburchakning Kateti: ${elements.a}, Gipatinuzasi: ${elements.c}, Balandligi: ${elements.h}, Yuzasi: ${elements.S} ga teng`);
//             break;
//     }
// }

// tengyonli(Math.sqrt(2), 1)

// masala 14;

// function tengtomonli(x, y) {
//     let elements = {
//         a: 0,
//         r: 0,
//         R: 0,
//         S: 0,
//     }
//     switch (y) {
//         case 1:
//             elements.a = x;
//             elements.r = elements.a * Math.sqrt(3) / 6;
//             elements.R = elements.r * 2;
//             elements.S = elements.a ** 2 * Math.sqrt(3) / 4;
//             console.log(`Bu teng yonli uchburchakning Kateti: ${elements.a}, Ichki radiusi: ${elements.r}, Tashqi radiusi: ${elements.R}, Yuzasi: ${elements.S} ga teng`);
//             break;
//         case 2:
//             elements.a = elements.r * 6 / Math.sqrt(3);
//             elements.r = x;
//             elements.R = elements.r * 2;
//             elements.S = elements.a ** 2 * Math.sqrt(3) / 4;
//             console.log(`Bu teng yonli uchburchakning Kateti: ${elements.a}, Ichki radiusi: ${elements.r}, Tashqi radiusi: ${elements.R}, Yuzasi: ${elements.S} ga teng`);
//             break;
//         case 3:
//             elements.a = elements.r * 6 / Math.sqrt(3);
//             elements.r = elements.R / 2;
//             elements.R = x;
//             elements.S = elements.a ** 2 * Math.sqrt(3) / 4;
//             console.log(`Bu teng yonli uchburchakning Kateti: ${elements.a}, Ichki radiusi: ${elements.r}, Tashqi radiusi: ${elements.R}, Yuzasi: ${elements.S} ga teng`);
//             break;
//         case 4:
//             elements.a = Math.sqrt(elements.S * 4 / Math.sqrt(3));
//             elements.r = x;
//             elements.R = elements.r * 2;
//             elements.S = x;
//             console.log(`Bu teng yonli uchburchakning Kateti: ${elements.a}, Ichki radiusi: ${elements.r}, Tashqi radiusi: ${elements.R}, Yuzasi: ${elements.S} ga teng`);
//             break;
        
//     }
// }

// tengtomonli(2, 1)

// masala 15;

// function karta (N ,M) {

//     switch (N) {
//         case 6:
//             switch (M) {
//                 case 1:
//                     console.log(`Olti g'isht`)
//                     break;
//                 case 2:
//                     console.log(`Olti olma`)
//                     break;
//                 case 3:
//                     console.log(`Olti chillik`)
//                     break;
//                 case 4:
//                     console.log(`Olti qarg'a`)
//                     break;
//             }
//             break;
//         case 7:
//             switch (M) {
//                 case 1:
//                     console.log(`Yetti g'isht`)
//                     break;
//                 case 2:
//                     console.log(`Yetti olma`)
//                     break;
//                 case 3:
//                     console.log(`Yetti chillik`)
//                     break;
//                 case 4:
//                     console.log(`Yetti qarg'a`)
//                     break;
//             }
//             break;
//         case 8:
//             switch (M) {
//                 case 1:
//                     console.log(`Sakkiz g'isht`)
//                     break;
//                 case 2:
//                     console.log(`Sakkiz olma`)
//                     break;
//                 case 3:
//                     console.log(`Sakkiz chillik`)
//                     break;
//                 case 4:
//                     console.log(`Sakkiz qarg'a`)
//                     break;
//             }
//             break;
//         case 9:
//             switch (M) {
//                 case 1:
//                     console.log(`Toqqiz g'isht`)
//                     break;
//                 case 2:
//                     console.log(`Toqqiz olma`)
//                     break;
//                 case 3:
//                     console.log(`Toqqiz chillik`)
//                     break;
//                 case 4:
//                     console.log(`Toqqiz qarg'a`)
//                     break;
//             }
//             break;
//         case 10:
//             switch (M) {
//                 case 1:
//                     console.log(`O'n g'isht`)
//                     break;
//                 case 2:
//                     console.log(`O'n olma`)
//                     break;
//                 case 3:
//                     console.log(`O'n chillik`)
//                     break;
//                 case 4:
//                     console.log(`O'n qarg'a`)
//                     break;
//             }
//             break;
//         case 11:
//             switch (M) {
//                 case 1:
//                     console.log(`Valet g'isht`)
//                     break;
//                 case 2:
//                     console.log(`Valet olma`)
//                     break;
//                 case 3:
//                     console.log(`Valet chillik`)
//                     break;
//                 case 4:
//                     console.log(`Valet qarg'a`)
//                     break;
//             }
//             break;
//         case 12:
//             switch (M) {
//                 case 1:
//                     console.log(`Dama g'isht`)
//                     break;
//                 case 2:
//                     console.log(`Dama olma`)
//                     break;
//                 case 3:
//                     console.log(`Dama chillik`)
//                     break;
//                 case 4:
//                     console.log(`Dama qarg'a`)
//                     break;
//             }
//             break;
//         case 13:
//             switch (M) {
//                 case 1:
//                     console.log(`Qirol g'isht`)
//                     break;
//                 case 2:
//                     console.log(`Qirol olma`)
//                     break;
//                 case 3:
//                     console.log(`Qirol chillik`)
//                     break;
//                 case 4:
//                     console.log(`Qirol qarg'a`)
//                     break;
//             }
//             break;
//         case 14:
//             switch (M) {
//                 case 1:
//                     console.log(`Tuz g'isht`)
//                     break;
//                 case 2:
//                     console.log(`Tuz olma`)
//                     break;
//                 case 3:
//                     console.log(`Tuz chillik`)
//                     break;
//                 case 4:
//                     console.log(`Tuz qarg'a`)
//                     break;
//             }
//             break;
        
//     }
// }

// karta(14, 4)

// function yosh(Y) {
//     let onlar = (Y - (Y % 10)) / 10;
//     let birlar = Y % 10;
//     let onlar_soz;
//     let birlar_soz;
//     switch(onlar) {
//         case 2: 
//             onlar_soz = 'Yigirma'
//             break;
//         case 3:
//             onlar_soz = "O'ttiz"
//             break;
//         case 4:
//             onlar_soz = "Qirq"
//             break;
//         case 5:
//             onlar_soz = "Ellik"
//             break;
//         case 6:
//             onlar_soz = "Oltmush"
//             break;
//     }
//     switch(birlar) {
//         case 1: 
//             birlar_soz = 'bir'
//             break;
//         case 2: 
//             birlar_soz = 'ikki'
//             break;
//         case 3: 
//             birlar_soz = 'uch'
//             break;
//         case 4: 
//             birlar_soz = "to'rt"
//             break;
//         case 5: 
//             birlar_soz = 'besh'
//             break;
//         case 6: 
//             birlar_soz = 'olti'
//             break;
//         case 7: 
//             birlar_soz = 'yetti'
//             break;
//         case 8: 
//             birlar_soz = 'sakkiz'
//             break;
//         case 9: 
//             birlar_soz = "to'qqiz"
//             break;
//         case 0: 
//             birlar_soz = ''
//             break;
//     }
//     console.log(`${onlar_soz} ${birlar_soz} yosh`)
// }

// yosh(69)

// masala 17;

// function yosh(Y) {
//     let onlar = (Y - (Y % 10)) / 10;
//     let birlar = Y % 10;
//     switch(onlar) {
//         case 1: 
//             onlar = "O'n"
//             break;
//         case 2: 
//             onlar = 'Yigirma'
//             break;
//         case 3:
//             onlar = "O'ttiz"
//             break;
//         case 4:
//             onlar = "Qirq"
//             break;
//     }
//     switch(birlar) {
//         case 1: 
//             birlar = 'bir'
//             break;
//         case 2: 
//             birlar = 'ikki'
//             break;
//         case 3: 
//             birlar = 'uch'
//             break;
//         case 4: 
//             birlar = "to'rt"
//             break;
//         case 5: 
//             birlar = 'besh'
//             break;
//         case 6: 
//             birlar = 'olti'
//             break;
//         case 7: 
//             birlar = 'yetti'
//             break;
//         case 8: 
//             birlar = 'sakkiz'
//             break;
//         case 9: 
//             birlar = "to'qqiz"
//             break;
//         case 0: 
//             birlar = ''
//             break;
//     }
//     console.log(`${onlar} ${birlar}ta masala`)
// }

// yosh(16)

// masala 18;

// function yosh(Y) {
//     let yuzlar = (Y - (Y % 100)) /100
//     let onlar = ((Y % 100) - (Y % 10)) / 10;
//     let birlar = Y % 10;
//     switch(yuzlar) {
//         case 1:
//             yuzlar = "Bir";
//             break;
//         case 2:
//             yuzlar = "Ikki";
//             break;
//         case 3:
//             yuzlar = "Uch";
//             break;
//         case 4:
//             yuzlar = "To'rt";
//             break;
//         case 5:
//             yuzlar = "Besh";
//             break;
//         case 6:
//             yuzlar = "Olti";
//             break;
//         case 7:
//             yuzlar = "Yetti";
//             break;
//         case 8:
//             yuzlar = "Sakkiz";
//             break;
//         case 9:
//             yuzlar = "To'qqiz";
//             break;
        
//     }
//     switch(onlar) {
//         case 1: 
//             onlar = "O'n"
//             break;
//         case 2: 
//             onlar = 'Yigirma'
//             break;
//         case 3:
//             onlar = "O'ttiz"
//             break;
//         case 4:
//             onlar = "Qirq"
//             break;
//         case 5:
//             onlar = "Ellik"
//             break;
//         case 6:
//             onlar = "Oltmush"
//             break;
//         case 7:
//             onlar = "Yetmush"
//             break;
//         case 8:
//             onlar = "Sakson"
//             break;
//         case 9:
//             onlar = "To'qson"
//             break;
//         case 0:
//             onlar = ""
//             break;
//     }
//     switch(birlar) {
//         case 1: 
//             birlar = 'bir'
//             break;
//         case 2: 
//             birlar = 'ikki'
//             break;
//         case 3: 
//             birlar = 'uch'
//             break;
//         case 4: 
//             birlar = "to'rt"
//             break;
//         case 5: 
//             birlar = 'besh'
//             break;
//         case 6: 
//             birlar = 'olti'
//             break;
//         case 7: 
//             birlar = 'yetti'
//             break;
//         case 8: 
//             birlar = 'sakkiz'
//             break;
//         case 9: 
//             birlar = "to'qqiz"
//             break;
//         case 0: 
//             birlar = ''
//             break;
//     }
//     console.log(`${yuzlar} yuz ${onlar} ${birlar}`)
// }

// yosh(763)

// masala 19;

// function muchalFun(Y) {
//     let yil = (Y - 1983) <= 60 ? Y - 1983 : (Y - 1983) % 60;
//     let rang = (yil - (yil % 12)) / 12 ? (yil - (yil % 12)) / 12 + 1 : 1;
//     let muchal = yil % 12 
//     switch(rang) {
//         case 1:
//             rang = 'Yashil';
//             break;
//         case 2:
//             rang = 'Qizil';
//             break;
//         case 3:
//             rang = 'Sariq';
//             break;
//         case 4:
//             rang = 'Oq';
//             break;
//         case 5:
//             rang = 'Qora';
//             break;
//     }
//     switch(muchal) {
//         case 1:
//             muchal = 'Sichqon'
//             break;
//         case 2:
//             muchal = 'Sigir'
//             break;
//         case 3:
//             muchal = "Yo'lbars"
//             break;
//         case 4:
//             muchal = 'Quyon'
//             break;
//         case 5:
//             muchal = 'Ajdar'
//             break;
//         case 6:
//             muchal = 'Ilon'
//             break;
//         case 7:
//             muchal = 'Ot'
//             break;
//         case 8:
//             muchal = "Qo'y"
//             break;
//         case 9:
//             muchal = 'Maymun'
//             break;
//         case 10:
//             muchal = 'Tovuq'
//             break;
//         case 11:
//             muchal = 'It'
//             break;
//         case 0:
//             muchal = "To'ng'iz"
//             break;
//     }
//     console.log(`${Y}-yil: ${rang} ${muchal} yili`);
// }

// muchalFun(2006)

// masala 20;

function burj(D, M) {
    switch(M) {
        case 1:
            console.log(D >= 20 ? "Qovg'a" : "Echki");
            break;
        case 2:
            console.log(D >= 19 ? "Baliq" : "Qovg'a");
            break;
        case 3:
            console.log(D >= 21 ? "Qo'y" : "Baliq");
            break;
        case 4:
            console.log(D >= 20 ? "Buzoq" : "Qo'y");
            break;
        case 5:
            console.log(D >= 21 ? "Egizaklar" : "Buzoq");
            break;
        case 6:
            console.log(D >= 22 ? "Qisqichbaqa" : "Egizaklar");
            break;
        case 7:
            console.log(D >= 23 ? "Arslon" : "Qisqichbaqa");
            break;
        case 8:
            console.log(D >= 23 ? "Parizod" : "Arslon");
            break;
        case 9:
            console.log(D >= 23 ? "Tarozi" : "Parizod");
            break;
        case 10:
            console.log(D >= 23 ? "Chayon" : "Tarozi");
            break;
        case 11:
            console.log(D >= 23 ? "O'qotar" : "Chayon");
            break;
        case 12:
            console.log(D >= 22 ? "Echki" : "O'qotar");
            break;
    }
}

burj(12, 6)