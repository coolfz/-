let myImage = document.querySelector('img');
//点击图片切换另一张图片
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/2020最新大数据学习路线图.jpg') {
        myImage.setAttribute('src', 'images/新天骄.jpg');
    } else {
        myImage.setAttribute('src', 'images/2020最新大数据学习路线图.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
//设置用户名
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = '欢迎你，' + myName;
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎你，' + storedName;
}
myButton.onclick = function() {
    setUserName();
}