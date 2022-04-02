$(".submit").on("click", () => {
  let inputs = document.querySelectorAll(".rightContent div label input");
  let flag = false;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      flag = true;
      break;
    }
  }
  if (flag) {
    alert("请输入完整的信息！");
  } else {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value !== "") {
        inputs[i].value='';
      }
    }
    alert("内容成功提交！");
  }
});