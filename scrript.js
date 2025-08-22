let add = document.getElementById("add")
let input = document.getElementById("text")
let tasklist=document.getElementById("tasklist")
let tasks=JSON.parse(localStorage.getItem("tasks"))||[]

window.addEventListener("DOMContentLoaded",()=>{



tasks.forEach(task => {
    let taskconatiner=document.createElement("div")
 taskconatiner.classList.add("taskconatiner")

//  tick btn

let btn1=document.createElement("button")
btn1.innerHTML="✅"


let span = document.createElement("span")
span.classList.add("spantext")
span.textContent=task.text


if(task.completed){

    span.classList.add("task-complete")
}


btn1.addEventListener("click",()=>{
span.classList.toggle("task-complete")

let index=tasks.findIndex(t=>t.text===task.text)

if(index!==-1){
tasks[index].completed=!tasks[index].completed;
localStorage.setItem("tasks",JSON.stringify(tasks))

}




})

// delete btn

let btn2=document.createElement("button")
btn2.innerHTML="❌"


btn2.addEventListener("click",()=>{
tasklist.removeChild(taskconatiner)

 tasks=tasks.filter((t)=>{
 return t.text!==task.text
})

localStorage.setItem("tasks",JSON.stringify(tasks))


})

// taskcontainer append 

taskconatiner.append(btn1)
taskconatiner.append(span)
taskconatiner.append(btn2)
// tasklist append
tasklist.append(taskconatiner)


});


// recreateupper
add.addEventListener("click",()=>{

let textadd=input.value.toLowerCase().trim()
 if(textadd==""){
return false
 
}

let newtask={text:textadd,completed:false};
tasks.push(newtask)
localStorage.setItem("tasks",JSON.stringify(tasks))


 let taskconatiner=document.createElement("div")
 taskconatiner.classList.add("taskconatiner")

//  tick btn

let btn1=document.createElement("button")
btn1.innerHTML="✅"


let span = document.createElement("span")
span.classList.add("spantext")
span.textContent=newtask.text


btn1.addEventListener("click",()=>{
span.classList.toggle("task-complete")
let index=tasks.findIndex(t=>t.text===newtask.text)

if(index!==-1){
tasks[index].completed=!tasks[index].completed;
localStorage.setItem("tasks",JSON.stringify(tasks))

}



})

// delete btn

let btn2=document.createElement("button")
btn2.innerHTML="❌"


btn2.addEventListener("click",()=>{
tasklist.removeChild(taskconatiner)

 tasks=tasks.filter((t)=>{
 return t.text!==newtask.text
})

localStorage.setItem("tasks",JSON.stringify(tasks))


})

// taskcontainer append 

taskconatiner.append(btn1)
taskconatiner.append(span)
taskconatiner.append(btn2)
// tasklist append
tasklist.append(taskconatiner)




input.value=""
input.focus()





})

})