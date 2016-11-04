var n;
var up=0;
function getThis(event) {
  event.preventDefault()
   n =document.getElementById('n').value;
  console.log(n);
  makeForm(n);
}

function makeForm(n){
var form = document.createElement('form');
form.setAttribute('method',"post");
form.setAttribute('action',"index.html");
while (up<=n) {
  var i = document.createElement("input"); //input element, text
  i.setAttribute('type',"text");
  i.setAttribute('id',"comand".n);
  form.appendChild(i);
}
var s = document.createElement("input"); //input element, Submit button
s.setAttribute('type',"submit");
s.setAttribute('value',"Submit");
form.appendChild(s);
}




// var par;
// par=document.getElementById('arr').value;
  //1<=n<=30000
  //x =1/2
  //1= put in
  //2 = take
function safe(param) {
  var  helper=[];
  var n=param[0];
  if (n<1 || n>30000) {
    console.log("off parameters");
  }
for (var i = 1; i < param.length; i++) {
// console.log(param[i]);
if (param[i]==2) {
  console.log(Math.max(...helper));
}
for (var j = 0; j < param.length; j++) {
  // console.log(param[i][j]);
     if (param[i][j-1]==1) {
       helper.push(param[i][j])
     }
}
}
console.log(helper);
}
safe([6,[1,2],[1,4],2,[1,8],[1,7],2]);
console.log('next');
safe([6,[1,40],[1,8],2,[1,30],[1,35],2]);
makeForm(2);
// safe(par);
