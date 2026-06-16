import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import {dashboardStats,recentTasks} from "../data/dashboardData";
import SectionCard from "../components/SectionCard";
import { studyTips } from "../data/studyTips";


function DashboardPage(){
    const randomTip=studyTips[Math.floor(Math.random()* studyTips.length)]
    
    return(
        <DashboardLayout>
            <div className="mb-8">
            <h1 className="text-4xl font-bold">Welcome back</h1>
            <p className="text-gray-500 mt-2">Track your progress and stay consistent with your studies.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {dashboardStats.map((stat)=>(
                    <StatCard key={stat.title} title={stat.title} value={stat.value} icon={stat.icon} color={stat.color} />
                ))}
            </div>
            <div className="bg-indigo-50 border-indigo-100 rounded-b-xl p-6 mt-8">
                <h2 className="text-xl font-semibold text-indigo-700">Study Tip</h2>
                <p className="mt-2 text-gray-600 font-semibold text-lg">
                    {randomTip}
                </p>
            </div>
            <div className="mt-10">
                <SectionCard title="Recent Tasks">
                    <ul className="space-y-3">
                        {recentTasks.map((task)=>(
                            <li key={task.title} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-none">
                                <span>{task.title}</span>
                                <span className={`px-3 py-1 rounded-full text-sm ${task.completed ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                    {task.completed ? 'Completed' : 'Pending'}
                                </span>
                            </li>
                        ))}
                    </ul>
                </SectionCard>
            </div>
        </DashboardLayout>
    );
}
export default DashboardPage;