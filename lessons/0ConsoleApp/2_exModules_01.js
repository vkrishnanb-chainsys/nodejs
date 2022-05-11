exports.m1=function()
{
  var text1="Hello m1";
   console.log(text1);
}

m2=function()
{
  var text1="Hello m2";
   console.log(text1);
}

exports.m3=function()
{
  var text1="Calling m2 from m3";
   console.log(text1);
   m2();
}
exports.m4=function()
{
  var text1="Hello Node ";
  return text1;
}
