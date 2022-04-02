let ol_circles = document.querySelector(".circles");

/* 点击小圆圈出现底色 以及图片滚动的事件 */
$(".circles").on("click", "li", (e) => {
  let t = e.currentTarget;
  let x = parseInt(t.dataset.index) * (-75) + "vw";
  num = parseInt(t.dataset.index);
  $(".playWorks").animate({
    left: x,
  }, 1600,);
  /*.css('left',x)*/
  $(".circles li").removeClass("selected");
  $(t).addClass("selected");
});

/* 广告图片轮播事件 */
/* 注意，轮播的时候是ul在动，而不是li在动 */
let num = 0;  //图片播放的图数
let cd = false; //函数节流--连续点击右键或左键图片再动画执行完之前不会连续触发事件

/* 点击向左按钮图片左移 */
$(".left").on("click", () => {
  if (!cd) {
    cd = true;
    $(".circles li").removeClass("selected");
    if (num === 0) {
      num = 2;
      $(".playWorks").css("left", num * (-100) + "vw");
    }
    num--;
    ol_circles.children[num].className = "selected";
    $(".playWorks").animate({
      left: "+=100vw",
      cd: true,
    }, 1600, () => {
      cd = false;
    });
  }
});

/* 点击向右按钮图片右移 */
$(".right").on("click", () => {
  if (!cd) {
    cd = true;
    $(".circles li").removeClass("selected");
    if (num === 2) {
      $(".playWorks").css("left", "0");
      num = 0;
    }
    num++;
    ol_circles.children[num % 2].className = "selected";
    $(".playWorks").animate({
      left: "-=100vw",
    }, 1600, () => {
      cd = false;
    });
  }
});

/* 自动播放广告图片事件 */
let timer = setInterval(() => {
  $(".right").click();
}, 3000);

/* 当鼠标放在图片上就停止播放，离开图片就开始播放 */
$(".adPlayer").on("mouseenter", () => {
  clearInterval(timer);
}).on("mouseleave", () => {
  timer = setInterval(() => {
    $(".right").click();
  }, 3000);
});

$(".submit").click(() => {
  let input1 = document.querySelector(".wayToContact label input");
  let input2 = document.querySelector(".content label input");
  if (input1.value.trim() === "" || input2.value.trim() === "") {
    alert("请输入完整的信息！");
  } else {
    alert("提交成功！");
  }
});

