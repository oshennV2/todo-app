const toDoInput = document.querySelector(".text-field")
const subBtn = document.querySelector(".list-button")
const ol = document.querySelector("ol")
const li = document.createElement("li")





subBtn.addEventListener("click",function(){
    const li = document.createElement("li")
   
    const deleteBtn = document.createElement("button")
    deleteBtn.addEventListener("click", function(){
        ol.removeChild(li)
    })
    
    if (toDoInput.value == "" || toDoInput.value ==" " || toDoInput.value== "  " ||toDoInput.value == "   "){
        li.textContent = "Nothing To Do!"
        deleteBtn.textContent = "X"
        li.appendChild(deleteBtn)    
        ol.appendChild(li)
         

    }
        else
        {
    li.textContent = toDoInput.value

    ol.appendChild(li)
    deleteBtn.textContent = "X"
    li.appendChild(deleteBtn)    
    toDoInput.value =" "
    }
    
})

const clearBtn = document.querySelector(".clear-button")

clearBtn.addEventListener("click", function(){
    ol.textContent = " "
})