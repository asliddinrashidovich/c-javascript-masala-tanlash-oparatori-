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

