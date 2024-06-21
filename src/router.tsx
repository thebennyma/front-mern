import { Routes, BrowserRouter, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import DashBoardView from "./views/DashBoardView";
import CreateProjectView from "./views/projects/CreateProjectView";
import EdithProjectView from "./views/projects/EdithProjectView";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<DashBoardView />} index />
                    <Route path="/project/create" element={<CreateProjectView />} />
                    <Route path="/project/:projectId/edit" element={<EdithProjectView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}