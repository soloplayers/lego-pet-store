let dogDown = document.querySelector(".dogDown");
let catDown = document.querySelector(".catDown");
let products = document.querySelector(".mainProductList");
let controller_lis = document.querySelectorAll(".controller li");

$(".dogDown").click(() => {
  $(".dogList").toggle();
  let src = dogDown.getAttribute("src");
  if (src.includes("down")) {
    dogDown.setAttribute("src", "../assets/icons/up.png");
  } else {
    dogDown.setAttribute("src", "../assets/icons/down.png");
  }
});

$(".catDown").click(() => {
  $(".catList").toggle();
  let src = catDown.getAttribute("src");
  if (src.includes("down")) {
    catDown.setAttribute("src", "../assets/icons/up.png");
  } else {
    catDown.setAttribute("src", "../assets/icons/down.png");
  }
});

/* 页面点击事件 */
for (let i = 1; i < controller_lis.length - 1; i++) {
  controller_lis[i].addEventListener("click", () => {
    for (let j = 1; j < controller_lis.length - 1; j++) {
      if (controller_lis[j].className === "selected") {
        controller_lis[j].className = "";
      }
    }
    controller_lis[i].className = "selected";
    products.style.top = `${-(i - 1) * 97.5}%`;
  });
}
$(".leftPage").click(() => {
  alert("时间不够，功能未完善！");
});

$(".rightPage").click(() => {
  alert("时间不够，功能未完善！");
});

$(".dogList").click(() => {
  alert("时间不够，功能未完善！");
});

$(".catList").click(() => {
  alert("时间不够，功能未完善！");
});

