var n;
var up=1;
var i;
var c;
//take n

function getThis(event) {
  event.preventDefault()
  n =document.getElementById('n').value;
  //console.log(n);
  if (n<1 || n>30000) {
    console.log("off parameters");
  }else{
  makeForm(n);
}
}

//create form

function makeForm(par){
  var form = document.createElement('form');
  form.setAttribute('method',"post");
  form.setAttribute('action',"index.html");
  while (up<=par) {
    i = document.createElement("input"); //input element, text
    i.setAttribute('type',"number");
    i.setAttribute('id',"comand"+up);
    form.appendChild(i);
    up++;
  }
  var s = document.createElement("input"); //input element, Submit button
  s.setAttribute('type',"submit");
  s.setAttribute('value',"Submit");
  s.setAttribute('onclick',"getComand(event)");
  form.appendChild(s);
  document.getElementsByTagName('div')[0].appendChild(form);
}


// new form


function makeFormLast(c){
  var upFS = 1;
  var upForFun=1;
  var form = document.createElement('form');
  form.setAttribute('method',"post");
  form.setAttribute('action',"index.html");
  while (upFS<=c) {
    i = document.createElement("input"); //input element, text
    i.setAttribute('type',"text");
    i.setAttribute('id',"valueForArray"+upFS);
    form.appendChild(i);
    upFS++;
  }
    var s = document.createElement("input"); //input element, Submit button
    s.setAttribute('type',"submit");
    s.setAttribute('value',"Submit");
    s.setAttribute('onclick',"getValue(event,this)");
    form.appendChild(s);
  document.getElementsByTagName('div')[0].appendChild(form);
}

// take comands


var allC=0;
function getComand(event){
  event.preventDefault();
  var up=1
while (up<=n) {
 c=document.getElementById('comand'+up).value;
   up++;
    allC=allC+Number(c);
    // console.log(allC);
  //  makeFormLast(c);
}
makeFormLast(allC);
// var allV;
// var br=allC.split('');
// for (let value of br) {
//   allV+value;
// }
// console.log(allV);
// console.log(c);
}

//take arry values


function getValue(event,_btn) {
    event.preventDefault();
     var formEl = _btn.parentElement.parentElement.querySelector("form");
    var arr=[];
    var up=1;
    while (up<=allC) {
      var someRand= (document.getElementById('valueForArray'+up).value);
    var nSR=  someRand.split(' ');
    // console.log(nSR);
      arr.push(nSR);
    //  arr.push(document.getElementById('valueForArray'+up).value);
       up++;
    }
    // console.log(arr);
  safe(arr)
}



//create function

function safe(param) {
  var  helper=[];
  len=param.length;
  // console.log(param);
  // var n=param[0];
  // if (n<1 || n>30000) {
  //   console.log("off parameters");
  // }
  for (var iArr = 0; iArr < len; iArr++) {
    //  console.log(param[iArr]);
    for (var jArr = 0; jArr < len; jArr++) {
      // console.log(param[iArr][jArr]);
      if (param[iArr][jArr-1]==1) {
        // console.log(param[iArr][jArr]);
        helper.push(param[iArr][jArr]);
      }
    }
    if (param[iArr]==2) {
      console.log(Math.max(...helper));
      var rem=helper.indexOf(Math.max(...helper));
      if (rem > -1) {
        helper.splice(rem, 1);
      }
    }
  }
  console.log(helper);
  }
// safe([[1,2],[1,4],2,[1,8],[1,7],2]);
// console.log('next');
// safe([6,[1,40],[1,8],2,[1,30],[1,35],2]);
// safe(par);
