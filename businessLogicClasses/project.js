export class Project {
    constructor(title, toDoList) {
        this.id = Date.now()

        this.title = title
        this.toDoList = toDoList
    }

    addItem(toDoItem) {
        this.toDoList.push(toDoItem)
    }

    removeItem(toDoItem) {
        this.toDoList.forEach((element, index) => {
            if (element.id === toDoItem.id) {
                this.toDoList.splice(index, 1);
            }
        })
    }
}