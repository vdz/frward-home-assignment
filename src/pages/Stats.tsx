import React from "react";
import { StatsDashboard } from "../components/StatsDashboard/StatsDashboard";
/**
 * Users page written in a way so that if need to migrane to next.js 
 * (or its router) can be done seamlessly — minimally
 */
export const Stats: React.FC = () => {
    return <StatsDashboard />;
}