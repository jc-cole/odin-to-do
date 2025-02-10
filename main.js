import { Project } from "./businessLogicClasses/project.js"
import { ProjectManager } from "./businessLogicClasses/projectManager.js"
import { ToDoItem } from "./businessLogicClasses/toDoItem.js"
import { ProjectBar } from "./domNodeClasses/projectBar.js"
import { ProjectList } from "./domNodeClasses/projectList.js"
import { ToDoCard } from "./domNodeClasses/toDoCard.js"

let exampleToDo = new ToDoItem()
exampleToDo.title = "Example to do item"
exampleToDo.description = "This is an example to do item"
exampleToDo.dueDate = new Date(2025, 2, 10)
exampleToDo.priority = "high"

let exampleProject = new Project("Example Project Title")
let myProjectList = new ProjectList(exampleProject)

let exampleProjectManager = new ProjectManager()
exampleProjectManager.addProject(exampleProject)
let myProjectBar = new ProjectBar(exampleProjectManager)



let projectBarContainer = document.querySelector(".project-selector")
let projectContainer = document.querySelector(".project-container")
let projectCardContainer = document.querySelector(".card-container")

projectBarContainer.appendChild(myProjectBar.element)

projectCardContainer.appendChild(myProjectList.element)
