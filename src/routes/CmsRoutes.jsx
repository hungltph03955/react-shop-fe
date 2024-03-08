import { Routes, Route } from "react-router-dom";
import { CmsLayout } from "../layouts/CmsLayout";
import DashboardIndex from "../pages/cms/dashboard/Index";
import LoginIndex from "../pages/cms/login/Index";
import { CmsPrivate } from "./CmsPrivate";


export const CmsRoutes = () => <Routes>
    <Route path="/cms" element={<CmsLayout />}>
        <Route index element={
            <CmsPrivate>
                <DashboardIndex />
            </CmsPrivate>
        } />
        <Route path="login" element={<LoginIndex />} />
    </Route>
</Routes>

