import DashboardLayout from "../layouts/DashboardLayout";
import TaskCard from "../components/TaskCard";
import  {tasks}  from "../data/taskData";
import {useParams} from "react-router-dom";

function TasksPage(){
    const {topicId}=useParams();
    const filteredTasks=tasks.filter((task)=>task.topicId===Number(topicId));
    const completedTasks=filteredTasks.filter((task)=>task.completed).length;
    const totalTasks=filteredTasks.length;
    const completionPercentage=totalTasks===0 ?0 :Math.round((completedTasks/totalTasks)*100);
    return(
        <DashboardLayout>
           <div className="mb-8">
            <h1 className="text-3xl font-bold">
                Tasks
            </h1>
            <p className="text-gray-500 mt-2">
                Manage your study tasks

            </p>

           </div>
           <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
            <h2 className="text-lg font-semibold">
                Progress

            </h2>
            <p className="text-3xl font-bold text-indigo-600">
                {completionPercentage}%
            </p>

            <p className="text-gray-500">
                {completedTasks} of {totalTasks} tasks completed
            </p>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                <div className="bg-indigo-600 h-3 rounded-full" 
                style={{ width: `${completionPercentage}%` }}
                ></div>
            </div>
           
           </div>
           <div className="space-y-4">
            {
                filteredTasks.map((task)=>(
                    <TaskCard key={task.id} title={task.title} completed={task.completed}/>
                ))
            }
           </div>
        </DashboardLayout>
    );
} 
export default TasksPage;