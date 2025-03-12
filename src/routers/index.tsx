import { createBrowserRouter } from "react-router-dom";

import AddApoitment from "@/pages/AddApoitment";
import CallHistory from "@/pages/CallHistory";
import OutingCall from "@/pages/OutingCall";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";
import Patients from "@/pages/Patients";
import Tasks from "@/pages/Tasks";
import Staff from "@/pages/Staff";
import Home from "@/pages/Home";
import App from "@/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/tasks", element: <Tasks /> },
      { path: "/staff", element: <Staff /> },
      { path: "/patients", element: <Patients /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/outgoing-calls", element: <OutingCall /> },
      { path: "/call-history", element: <CallHistory /> },
      { path: "/add-appointment", element: <AddApoitment /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
