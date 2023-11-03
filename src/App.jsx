import { Box } from "@mantine/core";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Box>
  );
}

export default App;
