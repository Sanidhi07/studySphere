import DashboardLayout from "../layouts/DashboardLayout";
import { user } from "../data/userData";
import { subjects } from "../data/subjectsData";
import { topics } from "../data/topicsData";
import { tasks } from "../data/taskData";
function ProfilePage(){
    return(
        <DashboardLayout>
            <h1 className="text-3xl font-bold">Profile</h1>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mt-6">
                <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-3xl mb-4">
                    👤
                </div>
                <h2 className="text-2xl font-semibold">{user.name}</h2>
                <p className="text-gray-500 mt-2">{user.email}</p>
                <p className="mt-4">Goal: {user.studyGoal}</p>
                <p className="mt-2 text-gray-500">
                    Every topic mastered is a step closer to your goal.
                </p>

            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mt-6">
                <h2 className="text-xl font-semibold mb-4">Study Statistics</h2>
                <p>Total Subjects: {subjects.length}</p>
                <p>Total Topics: {topics.length}</p>
                <p>Completed Tasks: {tasks.filter(task => task.completed).length}</p>
            </div>
        </DashboardLayout>
    );
} 
export default ProfilePage;