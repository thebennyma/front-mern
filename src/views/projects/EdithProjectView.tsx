import { Navigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getProjectsById } from "@/api/ProjectApi"
import EdithProjectForm from "@/components/projects/EdithProjectForm"

export default function EdithProjectView() {
    const params = useParams()
    const projectId = params.projectId!

    const { data, isLoading, isError } = useQuery({
        queryKey: ['editProject', projectId],
        queryFn: () => getProjectsById(projectId),
        retry: false
    })

    if (isLoading) return "Cargando ..."
    if (isError) return <Navigate to='/404' />

    if (data) return <EdithProjectForm data={data} projectId={projectId} />
}
