import { element, path } from "./data.js";
import { bannerChara, iconChara, karakter } from "./chara/images.js";

console.log("Riwayat Gacha");

//Area Penyeleksian Elemen
const body = document.querySelector("body");
const banner = document.querySelector(".banner");
const title = document.querySelector(".title");
const subTitle = document.querySelector("h3");
const mainBox = document.querySelector(".main");
const pityText = document.querySelector("#pity");
const rate = document.querySelector(".rateoff");
const charaExist = document.querySelector("span");
const display = document.querySelector(".display");
const charaDisplayS = document.querySelectorAll(".event");
const charaDisplayA = document.querySelectorAll(".event-2");
const charaEnded = document.querySelector(".ended");
const btn = document.querySelector("button");
const chara = document.querySelector(".chara");
const output = document.querySelector("#output");
const outputPath = document.querySelector(".path");
const outputElement = document.querySelector(".element");
const selectBanner = document.querySelector(".list-banner");
const details = document.querySelector("details");
//Area Peneyeleksian Elemen

//Variabel Ketergantungan
let pity = 0;
let rateOff = true;
//Variabel Ketergantungan

//                       Data Karakter                     //

// Data Detail Karakter
const seele = {
  name: "Seele",
  title: "Butterfly on Swordtip",
  banner: bannerChara.seele,
  icon: iconChara.seele,
  path: path[0],
  element: element.quantum,
  character: karakter.seele,
};

const silverWolf = {
  name: "Silver Wolf",
  title: "Contract Zero",
  banner: bannerChara.silverWolf,
  icon: iconChara.silverWolf,
  path: path[4],
  element: element.quantum,
  character: karakter.silverWolf,
};

const blade = {
  name: "Blade",
  title: "A Lost Soul",
  banner: bannerChara.blade,
  icon: iconChara.blade,
  path: path[3],
  element: element.wind,
  character: karakter.blade,
};

const kafka = {
  name: "Kafka",
  title: "Nessum Dorma",
  banner: bannerChara.kafka,
  icon: iconChara.kafka,
  path: path[4],
  element: element.lightning,
  character: karakter.kafka,
};

const fuXuan = {
  name: "Fu Xuan",
  title: "Foreseen, Foreknown, Foretold",
  banner: bannerChara.fuXuan,
  icon: iconChara.fuXuan,
  path: path[2],
  element: element.quantum,
  character: karakter.fuXuan,
};

const jingliu = {
  name: "Jingliu",
  title: "Gentle Eclipse of the Moon",
  banner: bannerChara.jingliu,
  icon: iconChara.jingliu,
  path: path[3],
  element: element.ice,
  character: karakter.jingliu,
};

const topaz = {
  name: "Topaz",
  title: "Sunset Clause",
  banner: bannerChara.topaz,
  icon: iconChara.topaz,
  path: path[0],
  element: element.fire,
  character: karakter.topaz,
};

const huohuo = {
  name: "Huohuo",
  title: "Coming Soon",
  banner: bannerChara.huohuo,
  icon: iconChara.huohuo,
  path: path[6],
  element: element.wind,
  character: karakter.huohuo,
};
// Data Detail Karakter

// Data Array Karakter
const getChara = [
  seele,
  silverWolf,
  blade,
  kafka,
  fuXuan,
  jingliu,
  topaz,
  huohuo,
];
// Data Array Karakter

// Icon Karakter
const icon = [
  seele.icon,
  silverWolf.icon,
  blade.icon,
  kafka.icon,
  fuXuan.icon,
  jingliu.icon,
  topaz.icon,
  huohuo.icon,
];
// Icon Karakter

//Event Banner Sekarang
const eventKarakter = {
  b5: [seele],
  b4: {
    name: "Guinaifen",
    path: path[4],
    element: element.fire,
    character: karakter.guinaifen,
  },
};

//Seleksi Dinamis
for (let i = 0; i < getChara.length; i++) {
  const create = document.createElement("img");
  selectBanner.appendChild(create);
  create.setAttribute("class", "select-banner");
}
const bannerList = document.querySelectorAll(".select-banner");

for (let i = 0; i < bannerList.length; i++) {
  const element = bannerList[i];
  element.setAttribute("src", icon[i]);
  bannerList[0].classList.add("select-active");
}

function update() {
  for (let i = 0; i < getChara.length; i++) {
    const element = getChara[i];
    if (element.character == undefined) {
      bannerList[i].style.filter = "saturate(0%)";
      bannerList[i].style.opacity = "50%";
    }
  }

  if (eventKarakter.b5[0].title == "Coming Soon") {
    mainBox.style.height = "90px";
    btn.classList.add("invisible");
    display.classList.add("invisible");
    details.style.visibility = "hidden";
    charaExist.innerHTML = "Tidak ada karakter yang tersedia.";
  } else {
    mainBox.style.height = "auto";
    btn.classList.remove("invisible");
    display.classList.remove("invisible");
    details.style.visibility = "visible";
    charaExist.innerHTML = "Karakter tersedia:";
  }

  body.style.backgroundColor = eventKarakter.b5[0].element.color;
  title.innerHTML = eventKarakter.b5[0].title;
  subTitle.style.backgroundColor = eventKarakter.b5[0].element.solid;
  banner.setAttribute("src", eventKarakter.b5[0].banner);

  charaDisplayS[0].innerHTML = "(S) " + eventKarakter.b5[0].name + " [ UP! ]";
  charaDisplayS[1].innerHTML =
    "(S) " + eventKarakter.b5[0].name + " 2% [ UP! ]";

  charaDisplayA[0].innerHTML = "(A) " + eventKarakter.b4.name;
  charaDisplayA[1].innerHTML = "(A) " + eventKarakter.b4.name + " 98%";

  for (let i = 0; i < bannerList.length; i++) {
    const element = bannerList[i];
    element.style.backgroundColor = eventKarakter.b5[0].element.color;
  }
}
update();

//Pemilihan Banner
for (let i = 0; i < bannerList.length; i++) {
  const element = bannerList[i];
  element.addEventListener("click", () => {
    if (output.innerHTML == "Menganalisis pity...") {
      Swal.fire({
        title: "Contract sedang berlangsung",
        text: "Mohon bersabar sampai proses contract selesai",
        icon: "error",
        confirmButtonText: "Kembali",
      });
    } else {
      eventKarakter.b5[0] = getChara[i];
      banner.classList.remove("banner-translate");
      setTimeout(() => {
        banner.classList.add("banner-translate");
      }, 0);
      for (let e = 0; e < bannerList.length; e++) {
        bannerList[e].classList.remove("select-active");
      }
      element.classList.add("select-active");
      output.innerHTML = "";
      classRemove();
      update();
    }
  });
}
// Pemilihan Banner

//                       Data Karakter                    //

//                       Setup Sistem Function                     //

//Sistem Penghapusan Class
const classRemove = () => {
  chara.removeAttribute("src");
  output.classList.remove("stylush");
  output.classList.remove("stylush-2");
  output.classList.remove("translate");
  outputPath.classList.remove("path-translate");
  outputElement.classList.remove("element-translate");
  chara.classList.remove("charaTranslate");
}; //Sistem Penghapusan Class

//Sistem Penambahan Class
const classAddSetup = () => {
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
    console.log(eventKarakter.b5[0].name + " x1");
    output.innerHTML = eventKarakter.b5[0].name;
    outputPath.innerHTML = eventKarakter.b5[0].path;
    chara.setAttribute("src", eventKarakter.b5[0].character);
    outputElement.setAttribute("src", eventKarakter.b5[0].element.icon);
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
  guinaifen: () => {
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
  classRemove();
  btn.classList.add("animation");
  output.innerHTML = "Menganalisis pity...";

  //Kalkulasi Sistem RNG

  let select = Math.random() * 100;
  let getChara = Math.floor(select);
  let modulus = getChara % 2;
  let rare = 2;
  let common = 100 - rare - pity * 0.2;

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
      commonChara.guinaifen();
    } else {
      if (rateOff) {
        modulus == 1 ? guarantee.exclusiveChara() : guarantee.standartChara();
      } else {
        guarantee.exclusiveChara();
      }
      pity = 0;
    } //Pity Random End

    //Style Tambahan Jika Mendapat Karakter Ekslusif
    output.innerHTML == eventKarakter.b5[0].name
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
