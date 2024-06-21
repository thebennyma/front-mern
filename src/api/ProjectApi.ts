import api from "@/lib/axios";
import { Project, ProjectFormData, dashboardProjectSchema } from "../types";
import { isAxiosError } from "axios";


export async function createProject(formData: ProjectFormData) {
    try {
        const { data } = await api.post('/projects', formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getProjects() {
    try {
        const { data } = await api('/projects')
        console.log(data);


        const response = dashboardProjectSchema.safeParse(data)
        console.log(response);


        if (response.success) {
            return response.data
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }

    }
}

export async function getProjectsById(id: Project['_id']) {
    try {
        const { data } = await api(`/projects/${id}`)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

type ProjectApiType = {
    formData: ProjectFormData
    projectId: Project['_id']
}

export async function updateProjectsById({ formData, projectId }: ProjectApiType) {
    try {
        const { data } = await api.put<string>(`/projects/${projectId}`, formData)
        return data
    } catch (error) {

        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}