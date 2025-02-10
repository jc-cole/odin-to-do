class Project {
    constructor(title, toDoList) {
        this.title = title
        this.toDoList = toDoList
    }

    addItem(toDoItem) {
        this.toDoList.push(toDoItem)
    }

    removeItem(toDoItem) {
        this.toDoList.forEach((element, index) => {
            if (element.id === toDoItem.id) {
                //remove element at current index
                this.toDoList.splice(index, 1);
            }
        });
    }
}