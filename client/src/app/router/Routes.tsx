import { createBrowserRouter, Navigate } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import LoginForm from "../../features/account/LoginForm";
import RequireAuth from "./RequireAuth";
import RegisterForm from "../../features/account/RegisterForm";
import ProfilePage from "../../features/profiles/ProfilePage";
import ActivityDetailPage from "../../features/activities/details/ActivityDetailPage";
import About from "../../features/about/About";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {element: <RequireAuth />, children: [
                { path: 'activities', element: <ActivityDashboard /> },
                { path: 'activities/:id', element: <ActivityDetailPage /> },
                { path: 'createActivity', element: <ActivityForm key='create' /> },
                { path: 'manage/:id', element: <ActivityForm /> },
                { path: 'profiles/:id', element: <ProfilePage /> },
                
            ]},
            { path: '', element: <HomePage /> },
            { path: 'about', element: <About /> },  
            { path: 'not-found', element: <NotFound /> },
            { path: 'server-error', element: <ServerError /> },
            { path: 'login', element: <LoginForm /> },
            { path: 'register', element: <RegisterForm /> },
            { path: '*', element: <Navigate replace to='/not-found' /> },
        ]
    }
])