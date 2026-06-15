import { BrowserRouter,Routes, Route} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import SubjectsPage from "./pages/SubjectsPage";
import TopicsPage from "./pages/TopicsPage";
import TasksPage from "./pages/TasksPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/subjects/:subjectId/topics" element={<TopicsPage />} />
        <Route path="/topics/:topicId/tasks" element={<TasksPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      {/* <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-5xl font-bold text-indigo-600">
        StudySphere 🚀
      </h1>
    </div> */}
    </BrowserRouter>
    
  );
}

export default App;