console.log("Riwayat Gacha");

//Area Penyeleksian Elemen
const body = document.querySelector("body");
const banner = document.querySelector(".banner");
const title = document.querySelector(".title");
const pityText = document.querySelector("#pity");
const rate = document.querySelector(".rateoff");
const charaDisplayS = document.querySelectorAll(".event");
const charaDisplayA = document.querySelectorAll(".event-2");
const charaEnded = document.querySelector(".ended")
const btn = document.querySelector("button");
const chara = document.querySelector(".chara");
const output = document.querySelector("p");
const outputPath = document.querySelector(".path");
const outputElement = document.querySelector(".element");
//Area Peneyeleksian Elemen

//Variabel Ketergantungan
let pity = 0;
let rateOff = true;
//Variabel Ketergantungan

//                       Data Karakter                     //
const element = {
  quantum: {
    icon: "assets/elements/element - quantum.webp",
    color: "rgb(40, 0, 80)",
  },
  imaginary: {
    icon: "assets/elements/element - imaginary.webp",
    color: "rgb(50, 50, 20)",
  },
  physical: {
    icon: "assets/elements/element - physical.webp",
    color: "rgb(40, 40, 40)",
  },
  fire: {
    icon: "assets/elements/element - fire.webp",
    color: "rgb(50, 10, 10)",
  },
  wind: {
    icon: "assets/elements/element - wind.webp",
    color: "rgb(5, 35, 10)",
  },
  ice: {
    icon: "assets/elements/element - ice.webp",
    color: "rgb(0, 20, 60)",
  },
  lightning: {
    icon: "assets/elements/element - lightning.webp",
    color: "rgb(70, 0, 30)",
  },
};

const path = [
  "Hunt",
  "Erudition",
  "Preservation",
  "Destruction",
  "Nihility",
  "Harmony",
  "Abundance",
];

const karakter = {
  jingliu: "assets/characters/Jingliu Splash Art.webp",
  fuXuan: "assets/characters/Fu Xuan Splash Art.webp",
  seele: "assets/characters/Seele Splash Art.webp",
  clara: "assets/characters/Clara Splash Art.webp",
  bailu: "assets/characters/Bailu Splash Art.webp",
  hook: "assets/characters/Hook Splash Art.webp",
};

//Event Banner Sekarang
let eventKarakter = {
  b5: {
    title: "Gentle Eclipse of the Moon",
    banner: "assets/banner/Jing liu (Banner).png",
    name: "Jingliu",
    path: path[3],
    element: element.ice,
    character: karakter.jingliu,
  },
  b4: {
    name: "Hook",
    path: path[3],
    element: element.fire,
    character: karakter.hook,
  },
};

//Seleksi Dinamis
body.style.backgroundColor = eventKarakter.b5.element.color;
title.innerHTML = eventKarakter.b5.title;
banner.setAttribute("src", eventKarakter.b5.banner);

charaDisplayS[0].innerHTML = "(S) " + eventKarakter.b5.name + " [ UP! ]";
charaDisplayS[1].innerHTML = "(S) " + eventKarakter.b5.name + " 2% [ UP! ]";

charaDisplayA[0].innerHTML = "(A) " + eventKarakter.b4.name;
charaDisplayA[1].innerHTML = "(A) " + eventKarakter.b4.name + " 98%";

charaEnded.innerHTML = "Fu Xuan (Telah Berakhir)";
//                       Data Karakter                    //

//                       Setup Sistem Function                     //

//Sistem Penghapusan Class
classRemove = () => {
  chara.removeAttribute("src");
  output.classList.remove("stylush");
  output.classList.remove("stylush-2");
  output.classList.remove("translate");
  outputPath.classList.remove("path-translate");
  outputElement.classList.remove("element-translate");
  chara.classList.remove("charaTranslate");
  output.innerHTML = "Menganalisis pity...";
}; //Sistem Penghapusan Class

//Sistem Penambahan Class
classAddSetup = () => {
  output.classList.add("stylush");
  btn.classList.remove("animation");
  output.classList.add("translate");
  outputPath.classList.add("path-translate");
  outputElement.classList.add("element-translate");
  chara.classList.add("charaTranslate");
}; //Sistem Penambahan Class

//Sistem Jaminan / Guarantee
const guarantee = {
  exclusiveChara: () => {
    rateOff = true;
    rate.innerHTML = "Rate off";
    rate.style.backgroundColor = "red";
    console.log(eventKarakter.b5.name + " x1");
    output.innerHTML = eventKarakter.b5.name;
    outputPath.innerHTML = eventKarakter.b5.path;
    chara.setAttribute("src", eventKarakter.b5.character);
    outputElement.setAttribute("src", eventKarakter.b5.element.icon);
  },
  standartChara: () => {
    rateOff = false;
    rate.innerHTML = "Rate on";
    rate.style.backgroundColor = "green";
    console.log("Clara x1");
    output.innerHTML = "Clara";
    outputPath.innerHTML = "Destruction";
    chara.setAttribute("src", karakter.clara);
    outputElement.setAttribute("src", element.physical.icon);
  },
}; //Sistem Jaminan / Guarantee

//Sistem Item Random
const commonChara = {
  hook: () => {
    console.log(eventKarakter.b4.name + " x1");
    output.innerHTML = eventKarakter.b4.name;
    outputPath.innerHTML = eventKarakter.b4.path;
    chara.setAttribute("src", eventKarakter.b4.character);
    outputElement.setAttribute("src", eventKarakter.b4.element.icon);
  },
}; //Sistem Item Random

//                       Setup Sistem Function                     //

//                       Contract Dimulai                     //

btn.addEventListener("click", () => {
  btn.classList.add("animation");
  classRemove();

  //Kalkulasi Sistem RNG

  let select = Math.random() * 100;
  let getChara = Math.floor(select);
  let modulus = getChara % 2;
  let rare = 2;
  let common = 100 - rare - pity * 0.25;

  //Sistem Kondisi Cotract & Pendapatan Karakter Dimulai

  setTimeout(() => {
    classAddSetup();

    //Pity Jaminan Start
    if (pity == 80) {
      if (rateOff) {
        modulus == 1 ? guarantee.exclusiveChara() : guarantee.standartChara();
      } else {
        guarantee.exclusiveChara();
      }
      pity = 0;
      //Pity Jaminan End

      //Pity Random Start
    } else if (getChara < common) {
      pity += 10;
      commonChara.hook();
    } else {
      if (rateOff) {
        modulus == 1 ? guarantee.exclusiveChara() : guarantee.standartChara();
      } else {
        guarantee.exclusiveChara();
      }
      pity = 0;
    } //Pity Random End

    //Style Tambahan Jika Mendapat Karakter Ekslusif
    output.innerHTML == eventKarakter.b5.name
      ? output.classList.add("stylush-2")
      : output.classList.remove("stylush-2");
    //Style Tambahan Jika Mendapat Karakter Ekslusif

    //Pity
    pityText.innerText = "Pity : " + pity;
    //Pity
  }, 2000);

  //Sistem Kondisi Cotract & Pendapatan Karakter Selesai
});

//                       Contract Berakhir                     //
