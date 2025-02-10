export class ProjectList {
    constructor(project) {
        this.project = project
        this.createElement()
    }

    createElement() {
        this.element = document.createElement("div")
        this.element.textContent = "this is a ProjectList placeholder"
    }
}