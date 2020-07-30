


// 讓X鍵出現在每一個LIST上
// var list = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < list.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   list[i].appendChild(span);
// }

// 點下X建後隱藏該列
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



// 按新增建後新增一項資料
function newlist() {
  var li = document.createElement("li");         //先建立一個 li 標籤
  var inputValue = document.getElementById("input").value; 
  var t = document.createTextNode(inputValue);   //再建立一個文字節點
  li.appendChild(t);                             //把文字附加到 li 標籤之後
  if (inputValue === '') {
    alert("請輸入東西!");
  } else {
    document.getElementById("listTo").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}