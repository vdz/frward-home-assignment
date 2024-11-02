import React from "react";
import { UserDashboard } from "../components/UserDashboard/UserDashboard";
import 'rsuite/dist/rsuite-no-reset.min.css';

/**
 * Users page written in a way so that if need to migrane to next.js 
 * (or its router) can be done seamlessly — minimally
 */
export const Users: React.FC = () => {
    return <UserDashboard />;
}