import DashboardLayout from "../layouts/DashboardLayout";
import TaskCard from "../components/TaskCard";
import  {tasks}  from "../data/taskData";
import {useParams} from "react-router-dom";

function TasksPage(){
    const {topicId}=useParams();
    const filteredTasks=tasks.filter((task)=>task.topicId===Number(topicId));
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