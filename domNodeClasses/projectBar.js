export class ProjectBar {
    constructor(projectManager) {
        this.projectManager = projectManager
        createDomNode()
    }

    createDomNode() {
        let projectBarDomNode = document.createElement("div")
        
        this.projectManager.projectList.forEach(project => {
            let newDomNode = document.createElement("div")
            newDomNode.textContent = `Project title: ${project.title}`
            projectBarDomNode.appendChild(newDomNode)
        });

        this.domNode = projectBarDomNode
    }
}