let count=0;
let sub=0
function func(){
  var node = document.createElement("ul");    
  node.id=count++;
  var inp=document.createElement("p");
  inp.appendChild(document.createTextNode(input.value));
  inp.id=count++;
  var btn = document.createElement("INPUT");
  btn.type="checkbox";
  btn.style="margin-left:10px";
  btn.id=count++;
  btn.onclick=function(){
  func1(this.id);
  }; 
  input.value="";       
  inp.appendChild(btn);
  node.appendChild(inp);
  document.getElementById("list").appendChild(node);
}

function func1(obj){
  var element1=document.getElementById(obj-2);
  var element = document.getElementById(obj-1);
  var inp=document.createElement("p");
  var v=document.createElement("STRIKE")
  var btn = document.createElement("INPUT");
  btn.type="checkbox";
  btn.style="margin-left:10px";
  btn.checked=true;
  v.appendChild(document.createTextNode(element.textContent))
  v.appendChild(btn)
  v.appendChild(document.createElement("BR"))
  inp.appendChild(v);
  element1.insertBefore(inp,element);
  element1.removeChild(element);
  
  console.log(obj)
  sub++;   
}