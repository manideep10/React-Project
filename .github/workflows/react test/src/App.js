import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./components/dashboard";
import OurPrograms from "./pages/OurPrograms";
import MyInfo from "./components/MyInfo";
import SchoolInfo from "./components/SchoolInfo";
import Parent from "./components/Parent";
import Guardian from "./components/Guardian/Guardian";
import CreateGuardian from "./components/Guardian/CreateGuardian";
import EditGuardian from "./components/Guardian/EditGuardian";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />}  >
            <Route path="my-info" element={<MyInfo />} />
            <Route path="school-info" element={<SchoolInfo />} />
            <Route path="parent" element={<Parent />} />
            {/* <Route path="courses" element={<Courses />} /> */}
            <Route path="courses" element={<Guardian />} />
            <Route path="course-create" element={<CreateGuardian />} />
            <Route path="courses-edit" element={<EditGuardian />} />
          </Route>
          <Route path="our-programs" element={<OurPrograms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
