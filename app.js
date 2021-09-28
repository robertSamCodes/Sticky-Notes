const container = document.querySelector(".container")
const addBtn = document.querySelector(".addBtn")

addBtn.addEventListener('click', addNote)

function addNote(){
    const noteApp = document.createElement('div')
    noteApp.innerHTML =
     `
     <h1 class="heading">Untitled</h1>
     <h3 class="content" >Add content</h3>
     <button class="btn" onclick="edit()">Edit</button>
     <button class="btn" onclick="save()">Save</button>
     <button class="btn" onclick="this.parentElement.remove()">Delete</button>
    `
    noteApp.classList.add('noteApp')
    container.appendChild(noteApp)

}

function edit(){
    document.querySelectorAll(".content").forEach(content=>{
        content.contentEditable = true
    })
    document.querySelectorAll(".heading").forEach(heading=>{
        heading.contentEditable = true
    })
}

function save(){
    document.querySelector(".content").contentEditable = false
    document.querySelector(".heading").contentEditable = false
}

function removeNote(){
    this.remove()
}