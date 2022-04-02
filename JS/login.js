/* 注册信息 */
$(".register").click(() => {
  let user = JSON.parse(localStorage.getItem("users") || "[]");
  let uname = document.querySelectorAll(".loginInfo input")[0].value;
  let email = document.querySelectorAll(".loginInfo input")[1].value;
  let flag=false;
  for (let i = 0; i < user.length; i++) {
    if (uname === user[i].name && email === user[i].email) {
      flag=true;
      localStorage.setItem("users", JSON.stringify(user));
    }
  }
  if(flag){
    alert('您已经注册过该账户信息了！')
  }
  else {
    user.push({'name':uname,'email':email,'isLogin':false});
    localStorage.setItem('users',JSON.stringify(user));
    alert('注册成功！')
  }
});

/* 登录信息 */
$(".loginBtn").click(() => {
  let user = JSON.parse(localStorage.getItem("users") || "[]");
  let uname = document.querySelectorAll(".loginInfo input")[0].value;
  let email = document.querySelectorAll(".loginInfo input")[1].value;
  let flag=false;
  console.log(uname);
  console.log(email);
  if (uname.trim() === "" || email.trim() === "") {
    alert("请输入完整的信息！");
    return ;
  }
  for (let i = 0; i < user.length; i++) {
    if (uname === user[i].name && email === user[i].email) {
      flag=true;
      user[i].isLogin = true;
      localStorage.setItem("users", JSON.stringify(user));
    }
  }
  if(flag){
    alert('登录成功！即将跳转至首页。')
    window.open('../HTML/index.html')
  }
  else {
    alert('未查询到该账户信息，请点击注册！')
  }
});