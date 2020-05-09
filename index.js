const addButton = document.querySelector('.addButton');
var input =  document.querySelector('.input');
const container =  document.querySelector('.container');
var count=0;
class item{
    constructor(itemName){
        this.createDiv(itemName);
    }

    createDiv(itemName){

        let input = document.createElement('input');
        input.value=itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type='text';
        
        let check = document.createElement('div');
        check.classList.add('custom-control');
        check.classList.add('custom-checkbox');
        check.classList.add('item');
        

        let checkbox = document.createElement('input');
        checkbox.type='checkbox';
        checkbox.classList.add('custom-control-input');
        checkbox.id=`customCheck${count++}`;
        check.append(checkbox);
        check.innerHTML+=`<label class="custom-control-label" for="${checkbox.id}"></label>`
        
        let editButton =document.createElement('Button');
        editButton.innerHTML="<i class='fas fa-pencil-alt fa-lg'></i>";
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.innerHTML='<i class="far fa-times-circle fa-lg"></i>';
        removeButton.classList.add('removeButton');

        container.appendChild(check);
        check.appendChild(input);
        check.appendChild(editButton);
        check.appendChild(removeButton);
        check.addEventListener('click',()=>{this.strike(input,check)})

        editButton.addEventListener('click',()=> this.edit(input,editButton));
        removeButton.addEventListener('click',()=> this.remove(check))
    }
        edit(input,button) {
            input.disabled=!input.disabled;
            if(input.disabled===false){
                button.classList.add('blink');
                button.style.color="lime";
            }
            else{
                button.style.color='rgb(22, 224, 218)';
                button.classList.remove('blink');
            }
        }

        remove(item){
            container.removeChild(item);
        }

        strike(item,box){
            console.log(box.children[0].checked);
            if(box.children[0].checked){
            item.style="text-decoration : line-through";}
            else{
                item.style="text-decoration : none";
            }
        }
    }

function check(){
    if(input.value!=""){
        new item(input.value);
        input.value="";
    } 
}
addButton.addEventListener('click',check);
window.addEventListener('keydown', (e)=>{
    if(e.which==13){
        check();
    }
})