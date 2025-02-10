export class ProjectManager {
    constructor(containerNode) {
        this.projectList = []
    }

    addProject(project) {
        this.projectList.push(project)
    }

    removeProject(projectToRemove) {
        this.projectList.forEach((project, index) => {
            if (projectToRemove.id === project.id) {
                this.projectList.splice(index, 1)
            }
        })
    }
}