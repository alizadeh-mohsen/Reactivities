import { createBrowserRouter, Navigate } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import ActivityDashboard from "../../features/activities/Dashboard/ActivityDashboard";
import ActivityDetailPage from "../../features/activities/Details/ActivityDetailPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'activities', element: <ActivityDashboard /> },
            { path: 'activities/:id', element: <ActivityDetailPage /> },
            { path: 'createActivity', element: <ActivityForm key='create' /> },
            { path: 'manage/:id', element: <ActivityForm /> },
            { path: 'not-found', element: <NotFound /> },
            { path: 'server-error', element: <ServerError /> },
            { path: '*', element: <Navigate replace to='/not-found' /> },
        ]
    }
])