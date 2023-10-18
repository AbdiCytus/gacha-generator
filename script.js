console.log("Riwayat Gacha");

const btn = document.querySelector("button");
const output = document.querySelector("p");
const chara = document.querySelector(".chara");
const pityText = document.querySelector("#pity");
const rate = document.querySelector(".rateoff");

let pity = 0;
let rateOff = true;

const karakter = {
  fuXuan:
    "https://hsr.honeyhunterworld.com/img/character/fu-xuan-character_cut_in_front.webp?x57331",
  seele:
    "https://genshindb.org/wp-content/uploads/2023/03/Seele-Splash-Art.webp",
  hook: "https://genshindb.org/wp-content/uploads/2022/10/Hook-Splash-Art.webp",
  bailu:
    "https://genshindb.org/wp-content/uploads/2023/03/Bailu-Splash-Art.webp",
  clara:
    "https://hsr.honeyhunterworld.com/img/character/clara-character_cut_in_front.webp",
};

btn.ondblclick = () => {
  alert("Sabar ego!");
};

btn.addEventListener("click", () => {
  btn.classList.add("animation");
  chara.removeAttribute("src");
  chara.classList.remove("translate");
  output.classList.remove("stylush-2");
  output.classList.remove("charaTranslate");
  output.classList.remove("stylush");
  output.innerHTML = "Menganalisis pity...";

  let select = Math.random() * 100;
  let getChara = Math.floor(select);
  let modulus = getChara % 2;
  let rare = 2;
  let common = 100 - rare - pity * 0.25;

  setTimeout(() => {
    btn.classList.remove("animation");
    chara.classList.add("translate");
    output.classList.add("charaTranslate");
    output.classList.add("stylush");
    //Pity Jaminan (Start)
    if (pity == 80) {
      if (rateOff) {
        if (modulus == 1) {
          console.log("Fu Xuan x1");
          output.innerHTML = "Fu Xuan";
          chara.setAttribute("src", karakter.fuXuan);
          rateOff = true;
          rate.style.backgroundColor = "red";
          rate.innerHTML = "Rate off";
        } else {
          console.log("Clara x1");
          output.innerHTML = "Clara";
          chara.setAttribute("src", karakter.clara);
          rateOff = false;
          rate.style.backgroundColor = "green";
          rate.innerHTML = "Rate on";
        }
      } else {
        console.log("Fu Xuan x1");
        output.innerHTML = "Fu Xuan";
        chara.setAttribute("src", karakter.fuXuan);
        rateOff = true;
        rate.style.backgroundColor = "red";
        rate.innerHTML = "Rate off";
      }
      pity = 0;
      //Pity Jaminan (End)
    } else if (getChara < common) {
      pity += 10;
      console.log("Hook x1");
      output.innerHTML = "Hook";
      chara.setAttribute("src", karakter.hook);
    } else {
      if (rateOff) {
        if (modulus == 1) {
          console.log("Fu Xuan x1");
          output.innerHTML = "Fu Xuan";
          chara.setAttribute("src", karakter.fuXuan);
          rateOff = true;
          rate.style.backgroundColor = "red";
          rate.innerHTML = "Rate off";
        } else {
          console.log("Clara x1");
          output.innerHTML = "Clara";
          chara.setAttribute("src", karakter.clara);
          rateOff = false;
          rate.style.backgroundColor = "green";
          rate.innerHTML = "Rate on";
        }
      } else {
        console.log("Fu Xuan x1");
        output.innerHTML = "Fu Xuan";
        chara.setAttribute("src", karakter.fuXuan);
        rateOff = true;
        rate.style.backgroundColor = "red";
        rate.innerHTML = "Rate off";
      }
      pity = 0;
    }
    if (output.innerHTML == "Fu Xuan") {
      output.classList.add("stylush-2");
    }
    pityText.innerText = "Pity : " + pity;
  }, 2000);
});
