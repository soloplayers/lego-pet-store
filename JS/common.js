window.addEventListener("load", () => {
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  for (let i = 0; i < users.length; i++) {
    if (users[i].isLogin) {
      $(".loginRegister").html(`<p class="userInfo">${users[i].name},您好！</p>`);
    }
  }
  $(".userInfo").on("mouseenter", () => {
    $(".navBar em").css("display", "block").on("mouseenter", () => {
      $(".navBar em").css("display", "block").on("mouseleave", () => {
        $(".navBar em").css("display", "none");
      });
    });
  }).on("mouseleave", () => {
    $(".navBar em").css("display", "none");
  });
  $('.quit').click(()=>{
    for (let i = 0; i < users.length; i++) {
      if (users[i].isLogin) {
        users[i].isLogin=false;
        localStorage.setItem('users',JSON.stringify(users));
      }
    }
    $(".loginRegister").html('<a href="login.html" >登录/注册</a >');
  })
});