const addButton = document.querySelector('.addButton');
var input =  document.querySelector('.input');
const container =  document.querySelector('.container');

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

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');
        
        let editButton =document.createElement('Button');
        editButton.innerHTML="<i class='fas fa-pencil-alt fa-lg'></i>";
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.innerHTML='<i class="far fa-times-circle fa-lg"></i>';
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click',()=> this.edit(input,editButton));
        removeButton.addEventListener('click',()=> this.remove(itemBox))
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