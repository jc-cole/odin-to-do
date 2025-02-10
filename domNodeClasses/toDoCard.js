class ToDoCard {
    constructor(toDoItem, domNode) {
        this.toDoItem = toDoItem
        this.domNode = domNode
    }

    // not implemented
    createDomNode() {
        let card = document.createNode("div")
        card.textContent = "this is a to do item: " + this.toDoItem.title
    }
}

export { ToDoCard }