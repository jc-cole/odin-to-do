class ToDoItem {
    constructor(title, description, dueDate, priority) {
        if (!(dueDate instanceof Date)) {
            throw new Error("Parameter 'dueDate' must be of type Date.")
        }

        this.id = Date.now() // kind of a scuffed way of making an id but ok for now

        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }

    // setters and getters if I need them
}