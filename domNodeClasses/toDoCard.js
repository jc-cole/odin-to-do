export class ToDoCard {
    constructor(toDoItem) {
        this.toDoItem = toDoItem
        this.createElement()
    }

    // not implemented
    createDomNode() {
        let card = document.createNode("div")
        card.textContent = "this is a to do item: " + this.toDoItem.title
        this.element = card
    }
}