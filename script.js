let count=0;

function func(){
  var node1 = document.createElement("div");
  var node = document.createElement("li");
  node1.id=count++;
  node.id=count++;
  node.className="item";
  node.innerHTML=`<input type="checkbox" id="${count++}" style="margin:10px;" onClick="func1(this.id)">${input.value}`
  var a=document.createElement("a");
  a.innerHTML=`<img id=${count++} src="red_cross.png" height=20px width=20px alt="Delete" onClick="del(this.id)"/>`;
  a.href="#";
  a.onClick="del(this.id)";
  
  node1.appendChild(node);
  node1.appendChild(a);
  document.getElementById("list").appendChild(node1);
}

function del(obj){

  $(`#${obj-2}`).remove();
}

function func1(obj){
  var element1=document.getElementById(obj-1);
  if($(`#${obj}`).prop("checked")== true){
    console.log("Checked");
    element1.style="text-decoration: line-through;"  
  }else if($(`#${obj}`).prop("checked")== false){
    console.log("Not Checked");
    element1.style="text-decoration: none;" 
  }   
}