export class ProjectManager {
    constructor(containerNode, projectList) {
        this.projectList = projectList || []
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