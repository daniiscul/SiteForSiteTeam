// let rotationAngle = 10;
// let opacityBackground8 = 0.1;
// let opacityBackground7 = 0.1;
// let opacityBackground6 = 0.1;
// let opacityBackground5 = 0.1;
// let opacityBackground4 = 0.1;
// let opacityBackground3 = 0.1;
// let opacityBackground2 = 0.1;
// let opacityBackground1 = 0.1;
// let counter1 = 0;
// let increaseBackgroundOpacity = 0;
// let backgroundState = false;
// let frameCount = 0;

// const navLinkMain = document.querySelector(".nav-link-hover-check-main");

// navLinkMain.addEventListener("mouseenter", () => {
//   backgroundState = true;
//   increaseBackgroundOpacity = 0.05;
// });

// navLinkMain.addEventListener("mouseleave", () => {
//   backgroundState = false;
//   increaseBackgroundOpacity = -0.05;
// });

// function adjustOpacity() {
//   if (backgroundState) {
//     opacityBackground1 += increaseBackgroundOpacity * 1;
//   } else {
//     opacityBackground1 += increaseBackgroundOpacity * 11.5;
//   }
//   if (backgroundState) {
//     opacityBackground2 += increaseBackgroundOpacity * 2.5;
//   } else {
//     opacityBackground2 += increaseBackgroundOpacity * 10;
//   }
//   if (backgroundState) {
//     opacityBackground3 += increaseBackgroundOpacity * 4;
//   } else {
//     opacityBackground3 += increaseBackgroundOpacity * 8.5;
//   }
//   if (backgroundState) {
//     opacityBackground4 += increaseBackgroundOpacity * 5.5;
//   } else {
//     opacityBackground4 += increaseBackgroundOpacity * 7;
//   }
//   if (backgroundState) {
//     opacityBackground5 += increaseBackgroundOpacity * 7;
//   } else {
//     opacityBackground5 += increaseBackgroundOpacity * 7;
//   }
//   if (backgroundState) {
//     opacityBackground6 += increaseBackgroundOpacity * 8.5;
//   } else {
//     opacityBackground6 += increaseBackgroundOpacity * 7;
//   }
//   if (backgroundState) {
//     opacityBackground7 += increaseBackgroundOpacity * 10;
//   } else {
//     opacityBackground7 += increaseBackgroundOpacity * 7;
//   }
//   if (backgroundState) {
//     opacityBackground8 += increaseBackgroundOpacity * 11.5;
//   } else {
//     opacityBackground8 += increaseBackgroundOpacity * 7;
//   }

//   // Ensure opacity values stay within the range [0.1, 0.9]
//   opacityBackground1 = Math.max(0.1, Math.min(0.9, opacityBackground1));
//   opacityBackground2 = Math.max(0.1, Math.min(0.9, opacityBackground2));
//   opacityBackground3 = Math.max(0.1, Math.min(0.9, opacityBackground3));
//   opacityBackground4 = Math.max(0.1, Math.min(0.9, opacityBackground4));
//   opacityBackground5 = Math.max(0.1, Math.min(0.9, opacityBackground5));
//   opacityBackground6 = Math.max(0.1, Math.min(0.9, opacityBackground6));
//   opacityBackground7 = Math.max(0.1, Math.min(0.9, opacityBackground7));
//   opacityBackground8 = Math.max(0.1, Math.min(0.9, opacityBackground8));
//   console.log(opacityBackground8);
// }

// function updateBackground() {
//   document.body.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Ccircle stroke='%2367C6E3' vector-effect='non-scaling-stroke' id='a' fill='none' stroke-width='7' r='315'/%3E%3Cuse id='f' href='%23a' stroke-dasharray='100 100 100 9999' opacity='${opacityBackground8}' /%3E%3Cuse id='b' href='%23a' stroke-dasharray='250 250 250 250 250 9999' opacity='${opacityBackground7}' /%3E%3Cuse id='e' href='%23a' stroke-dasharray='1000 500 1000 500 9999' opacity='${opacityBackground6}' /%3E%3Cuse id='g' href='%23a' stroke-dasharray='1500 9999' opacity='${opacityBackground5}' /%3E%3Cuse id='h' href='%23a' stroke-dasharray='2000 500 500 9999' opacity='${opacityBackground4}' /%3E%3Cuse id='j' href='%23a' stroke-dasharray='800 800 800 800 800 9999' opacity='${opacityBackground3}' /%3E%3Cuse id='k' href='%23a' stroke-dasharray='1200 1200 1200 1200 1200 9999' opacity='${opacityBackground2}' /%3E%3Cuse id='l' href='%23a' stroke-dasharray='1600 1600 1600 1600 1600 9999' opacity='${opacityBackground1}' /%3E%3C/defs%3E%3Cg transform='translate(1000 750)' %3E%3Cg transform='rotate(${rotationAngle} 0 0)' %3E%3Ccircle stroke='%235356ff' r='0'/%3E%3Cg %3E%3Cuse href='%23f' transform='scale(.1) rotate(50 0 0)' /%3E%3Cuse href='%23f' transform='scale(0.2) rotate(${
//     rotationAngle * -2
//   } 0 0)' /%3E%3Cuse href='%23f' transform='scale(.3) rotate(150 0 0)' /%3E%3C/g%3E%3Cg transform='rotate(-58.8 0 0)'%3E%3Cuse href='%23b' transform='scale(.4) rotate(${rotationAngle} 0 0)' /%3E%3Cuse href='%23z' transform='scale(.5) rotate(250 0 0)' /%3E%3C/g%3E%3Cg id='z' transform=''%3E%3Cg transform='rotate(159.75 0 0)'%3E%3Cuse href='%23b'/%3E%3Cuse href='%23b' transform='scale(1.2) rotate(90 0 0)' /%3E%3Cuse href='%23b' transform='scale(1.4) rotate(60 0 0)' /%3E%3Cuse href='%23e' transform='scale(1.6) rotate(120 0 0)' /%3E%3Cuse href='%23e' transform='scale(1.8) rotate(30 0 0)' /%3E%3C/g%3E%3C/g%3E%3Cg id='y' transform='rotate(264.6 0 0)'%3E%3Cg transform='rotate(95.85 0 0)'%3E%3Cuse href='%23e' transform='scale(1.1) rotate(20 0 0)' /%3E%3Cuse href='%23g' transform='scale(1.3) rotate(-40 0 0)' /%3E%3Cuse href='%23g' transform='scale(1.5) rotate(60 0 0)' /%3E%3Cuse href='%23h' transform='scale(1.7) rotate(-80 0 0)' /%3E%3Cuse href='%23j' transform='scale(1.9) rotate(100 0 0)' /%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(-191.7 0 0)'%3E%3Cg transform=''%3E%3Cg transform='rotate(-352.8 0 0)'%3E%3Cuse href='%23h' transform='scale(2) rotate(60 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.1) rotate(120 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.3) rotate(180 0 0)'/%3E%3Cuse href='%23h' transform='scale(2.4) rotate(240 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.5) rotate(300 0 0)'/%3E%3C/g%3E%3Cuse href='%23y' transform='scale(2) rotate(180 0 0)' /%3E%3Cuse href='%23j' transform='scale(2.7)'/%3E%3Cuse href='%23j' transform='scale(2.8) rotate(${
//     rotationAngle * -2
//   } 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.9) rotate(90 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.1) rotate(135 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.2) rotate(180 0 0)'/%3E%3C/g%3E%3Cuse href='%23k' transform='scale(3.3) rotate(225 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.5) rotate(270 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.6) rotate(315 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.7)'/%3E%3Cuse href='%23k' transform='scale(3.9) rotate(75 0 0)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

//   rotationAngle += 0.5;

//   if (frameCount % 6 === 0) {
//     adjustOpacity();
//     console.log(opacityBackground8);
//   }

//   frameCount++;
//   requestAnimationFrame(updateBackground);
// }

// updateBackground();

let rotationAngle = 10;
let opacityBackground8 = 0.1;
let opacityBackground7 = 0.1;
let opacityBackground6 = 0.1;
let opacityBackground5 = 0.1;
let opacityBackground4 = 0.1;
let opacityBackground3 = 0.1;
let opacityBackground2 = 0.1;
let opacityBackground1 = 0.1;
let counter1 = 0;
let increaseBackgroundOpacity = 0;
let backgroundState = false;
let frameCount = 0;

const navLinkMain = document.querySelector(".nav-link-hover-check-main");

navLinkMain.addEventListener("mouseenter", () => {
  backgroundState = true;
  increaseBackgroundOpacity = 0.001; // the BASE SPEED that elements use
});

navLinkMain.addEventListener("mouseleave", () => {
  backgroundState = false;
  increaseBackgroundOpacity = -0.001;
});

// Easing function
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2;
}

function adjustOpacity() {
  const ease = easeInOutCubic(3); // Calculate easing value based on frame count

  // 1 : 11.5 --> 1 is the speed when you hover over it, so it's 1 * 0.001 (BASE SPEED), and when you are not hovering over it 11.5 is the speed at which it decreases
  // we need the right one to be bigger because otherwise it would be a wave effect where as now its an effect where it lights up from the middle outwards,
  //and it closes from the outer ring inwards (this gives it a charge-like effect)
  opacityBackground1 +=
    increaseBackgroundOpacity * (backgroundState ? 1 : 11.5) * ease; // most outer ring
  opacityBackground2 +=
    increaseBackgroundOpacity * (backgroundState ? 2.5 : 10) * ease;
  opacityBackground3 +=
    increaseBackgroundOpacity * (backgroundState ? 2.5 : 8.5) * ease;
  opacityBackground4 +=
    increaseBackgroundOpacity * (backgroundState ? 8 : 7) * ease;
  opacityBackground5 += increaseBackgroundOpacity * 7 * ease;
  opacityBackground6 +=
    increaseBackgroundOpacity * (backgroundState ? 8 : 7) * ease;
  opacityBackground7 +=
    increaseBackgroundOpacity * (backgroundState ? 8 : 7) * ease;
  opacityBackground8 +=
    increaseBackgroundOpacity * (backgroundState ? 10 : 7) * ease; // the most inner ring

  // Ensure opacity values stay within the range [0.1, 0.9]
  opacityBackground1 = Math.max(0.1, Math.min(0.5, opacityBackground1));
  opacityBackground2 = Math.max(0.1, Math.min(0.5, opacityBackground2));
  opacityBackground3 = Math.max(0.1, Math.min(0.5, opacityBackground3));
  opacityBackground4 = Math.max(0.1, Math.min(0.5, opacityBackground4));
  opacityBackground5 = Math.max(0.1, Math.min(0.5, opacityBackground5));
  opacityBackground6 = Math.max(0.1, Math.min(0.5, opacityBackground6));
  opacityBackground7 = Math.max(0.1, Math.min(0.5, opacityBackground7));
  opacityBackground8 = Math.max(0.1, Math.min(0.5, opacityBackground8));
}

function updateBackground() {
  document.body.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Ccircle stroke='%2367C6E3' vector-effect='non-scaling-stroke' id='a' fill='none' stroke-width='7' r='315'/%3E%3Cuse id='f' href='%23a' stroke-dasharray='100 100 100 9999' opacity='${opacityBackground8}' /%3E%3Cuse id='b' href='%23a' stroke-dasharray='250 250 250 250 250 9999' opacity='${opacityBackground7}' /%3E%3Cuse id='e' href='%23a' stroke-dasharray='1000 500 1000 500 9999' opacity='${opacityBackground6}' /%3E%3Cuse id='g' href='%23a' stroke-dasharray='1500 9999' opacity='${opacityBackground5}' /%3E%3Cuse id='h' href='%23a' stroke-dasharray='2000 500 500 9999' opacity='${opacityBackground4}' /%3E%3Cuse id='j' href='%23a' stroke-dasharray='800 800 800 800 800 9999' opacity='${opacityBackground3}' /%3E%3Cuse id='k' href='%23a' stroke-dasharray='1200 1200 1200 1200 1200 9999' opacity='${opacityBackground2}' /%3E%3Cuse id='l' href='%23a' stroke-dasharray='1600 1600 1600 1600 1600 9999' opacity='${opacityBackground1}' /%3E%3C/defs%3E%3Cg transform='translate(1000 750)' %3E%3Cg transform='rotate(${rotationAngle} 0 0)' %3E%3Ccircle stroke='%235356ff' r='0'/%3E%3Cg %3E%3Cuse href='%23f' transform='scale(.1) rotate(50 0 0)' /%3E%3Cuse href='%23f' transform='scale(0.2) rotate(${
    rotationAngle * -2
  } 0 0)' /%3E%3Cuse href='%23f' transform='scale(.3) rotate(150 0 0)' /%3E%3C/g%3E%3Cg transform='rotate(-58.8 0 0)'%3E%3Cuse href='%23b' transform='scale(.4) rotate(${rotationAngle} 0 0)' /%3E%3Cuse href='%23z' transform='scale(.5) rotate(250 0 0)' /%3E%3C/g%3E%3Cg id='z' transform=''%3E%3Cg transform='rotate(159.75 0 0)'%3E%3Cuse href='%23b'/%3E%3Cuse href='%23b' transform='scale(1.2) rotate(90 0 0)' /%3E%3Cuse href='%23b' transform='scale(1.4) rotate(60 0 0)' /%3E%3Cuse href='%23e' transform='scale(1.6) rotate(120 0 0)' /%3E%3Cuse href='%23e' transform='scale(1.8) rotate(30 0 0)' /%3E%3C/g%3E%3C/g%3E%3Cg id='y' transform='rotate(264.6 0 0)'%3E%3Cg transform='rotate(95.85 0 0)'%3E%3Cuse href='%23e' transform='scale(1.1) rotate(20 0 0)' /%3E%3Cuse href='%23g' transform='scale(1.3) rotate(-40 0 0)' /%3E%3Cuse href='%23g' transform='scale(1.5) rotate(60 0 0)' /%3E%3Cuse href='%23h' transform='scale(1.7) rotate(-80 0 0)' /%3E%3Cuse href='%23j' transform='scale(1.9) rotate(100 0 0)' /%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(-191.7 0 0)'%3E%3Cg transform=''%3E%3Cg transform='rotate(-352.8 0 0)'%3E%3Cuse href='%23h' transform='scale(2) rotate(60 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.1) rotate(120 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.3) rotate(180 0 0)'/%3E%3Cuse href='%23h' transform='scale(2.4) rotate(240 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.5) rotate(300 0 0)'/%3E%3C/g%3E%3Cuse href='%23y' transform='scale(2) rotate(180 0 0)' /%3E%3Cuse href='%23j' transform='scale(2.7)'/%3E%3Cuse href='%23j' transform='scale(2.8) rotate(${
    rotationAngle * -2
  } 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.9) rotate(90 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.1) rotate(135 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.2) rotate(180 0 0)'/%3E%3C/g%3E%3Cuse href='%23k' transform='scale(3.3) rotate(225 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.5) rotate(270 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.6) rotate(315 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.7)'/%3E%3Cuse href='%23k' transform='scale(3.9) rotate(75 0 0)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

  //rotation speed
  rotationAngle += 1;

  // this updates the opacity every 3 frames
  if (frameCount % 3 === 0) {
    adjustOpacity();
  }

  frameCount++;
  requestAnimationFrame(updateBackground);
}

updateBackground();
