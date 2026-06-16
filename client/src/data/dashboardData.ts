
import { topics } from "../data/topicsData";
import { tasks } from "../data/taskData";
import { subjects } from "../data/subjectsData";

    const totalSubjects=subjects.length;
    const totalTopics=topics.length;
    const completedTasks=tasks.filter((task)=>task.completed).length;
    const pendingTasks=tasks.filter((task)=>!task.completed).length;
    export const dashboardStats=[
    {
    title:"Subjects",
    value:totalSubjects,
    icon:"📚",
    color:"bg-blue-100"
    },
    {
    title:"Topics",
    value:totalTopics,
    icon:"📝",
    color:"bg-green-100"
    },
    {
    title:"Tasks",
    value:completedTasks,
    icon:"✅",
    color:"bg-yellow-100"
    },
    {
    title:"Pending Tasks",
    value:pendingTasks,
    icon:"⏰",
    color:"bg-red-100"
    },
  ]

export const recentTasks = tasks.slice(0,3);