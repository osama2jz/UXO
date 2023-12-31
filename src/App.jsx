import { Box } from "@mantine/core";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import routeNames from "./routenames";
import MySchedule from "./Pages/MySchedule";
import Connect from "./Pages/Connect";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path={routeNames.superAdmin.schedule}
            element={<MySchedule />}
          />
          <Route
            path={routeNames.superAdmin.connect}
            element={<Connect />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Box>
  );
}

export default App;
