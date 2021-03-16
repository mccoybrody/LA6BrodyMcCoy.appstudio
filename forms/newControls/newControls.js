
drpdown.onclick=function(){
  if (typeof(i) == "object") {
  return;
}
NSB.MsgBox(i + "Dropdown Works");
};

chbx.onchange=function(){
  let response = "Checkbox works";
  for (i=0; i<= chbx.length - 1; i++) {
    if (chbx.getValue(i)) {
      response == response;
      }
}
NSB.MsgBox(response);
};


slt.onchange=function(){
  NSB.MsgBox("Choice is " + slt.value);
};


nav.onclick=function(){
  if (typeof i == "object") return;
  NSB.MsgBox
}
