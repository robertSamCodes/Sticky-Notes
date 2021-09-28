const container = document.querySelector(".container")
const addBtn = document.querySelector(".addBtn")

addBtn.addEventListener('click', addNote)

function addNote(){
    const noteApp = document.createElement('div')
    noteApp.innerHTML =
     `
     <h1 class="heading">Header Here</h1>
     <h3 class="content">Content Here</h3>
     <button class="btn" onclick="edit()">Edit</button>
     <button class="btn">Save</button>
     <button class="btn">Delete</button>
    `
    noteApp.classList.add('noteApp')
    container.appendChild(noteApp)

}

function edit(){
    document.querySelector(".content").contentEditable = true
    document.querySelector(".heading").contentEditable = true
}