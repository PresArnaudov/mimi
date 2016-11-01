// document.getElementById('btn').onclick(
// )
  //1<=n<=30000
  //x =1/2
  //1= put in
  //2 = take
  var  helper=[];
function safe(param) {
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
