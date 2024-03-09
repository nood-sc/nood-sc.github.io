// let myHeading = document.querySelector("h1");
// // document.querySelector 和 alert 是浏览器内置的函数，随时可用。
// // 用 querySelector() 函数获取标题的引用，并把它储存在 myHeading 变量中
// myHeading.textContent = "Hello world!";
// // 把 myHeading 变量的属性 textContent （标题内容）修改为“Hello world!” 
// let myVariable = "李雷";
// /*
// 这里的所有内容
// 都是注释。
// */
// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//   alert("我最喜欢巧克力冰淇淋了。");
// } else {
//   alert("但是巧克力才是我的最爱呀……");
// }
// multiply(4, 7);
// multiply(20, 20);
// multiply(0.5, 3);
let myImage = document.querySelector("img");
myImage.onclick = function () {
// 1、首先把 <img> 元素的引用存放在 myImage 变量里。然后将这个变量的 onclick 事件与一个匿名函数绑定。
  let mySrc = myImage.getAttribute("src");
//2、 获取这张图片的 src 属性值。
  if (mySrc === "images/firefox1.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox1.png") ;
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("请输入你的名字。");
  //  prompt() 函数，与 alert() 类似会弹出一个对话框
  localStorage.setItem("name", myName);
  myHeading.textContent = "你好，" + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "你好，" + storedName;
}
myButton.onclick = function () {
  setUserName();
};


