const userinput = document.getElementById('userinput');
const list = document.getElementById('list');

function addtask(){
    if(userinput.value=== ''){
        alert('Please enter a task');
    }else{
        let li = document.createElement("li")
        li.innerHTML=userinput.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }userinput.value =''
    savedata()
        
}

list.addEventListener("click",(c)=>{
    if(c.target.tagName === 'LI'){
        c.target.classList.toggle('checked');
        savedata()
    }
    else if(c.target.tagName === 'SPAN'){
        c.target.parentElement.remove();
        savedata()
    }
})

function savedata(){
    localStorage.setItem("data",list.innerHTML);
}

function loaddata() {
    list.innerHTML = localStorage.getItem("data")
}

loaddata()



