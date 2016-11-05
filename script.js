var n;
var up=1;
var i;

//take n

function getThis(event) {
  event.preventDefault()
  n =document.getElementById('n').value;
  //console.log(n);
  makeForm(n);
}

//create form

function makeForm(n){
  var form = document.createElement('form');
  form.setAttribute('method',"post");
  form.setAttribute('action',"index.html");
  while (up<=n) {
    i = document.createElement("input"); //input element, text
    i.setAttribute('type',"text");
    i.setAttribute('id',"comand"+up);
    form.appendChild(i);
    up++;
  }
  var s = document.createElement("input"); //input element, Submit button
  s.setAttribute('type',"submit");
  s.setAttribute('value',"Submit");
  s.setAttribute('onclick',"getComand(event)");
  form.appendChild(s);
  document.getElementsByTagName('body')[0].appendChild(form);
}

// take comands

function getComand(event){
  event.preventDefault();
  var up=1
while (up<=n) {
 console.log(document.getElementById('comand'+up).value);
  up++;
}
}

//make second form for values of arry

function makeFormSecond(){

}

//create function

function safe(param) {
  var  helper=[];
  var n=param[0];
  if (n<1 || n>30000) {
    console.log("off parameters");
  }
  for (var i = 1; i < param.length; i++) {
    if (param[i]==2) {
      console.log(Math.max(...helper));
    }
  }
  for (var j = 0; j < param.length; j++) {
    if (param[i][j-1]==1) {
     helper.push(param[i][j])
    }
  }
console.log(helper);
}
// safe([6,[1,2],[1,4],2,[1,8],[1,7],2]);
// console.log('next');
// safe([6,[1,40],[1,8],2,[1,30],[1,35],2]);
// safe(par);
