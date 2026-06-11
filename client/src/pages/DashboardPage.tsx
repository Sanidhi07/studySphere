import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import {dashboardStats,recentTasks} from "../data/dashboardData";
import SectionCard from "../components/SectionCard";

function DashboardPage(){
    return(
        <DashboardLayout>
            <h1 className="text-4xl font-bold">Welcome back</h1>
            <p className="text-gray-500 mt-2">Let's make today productive.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {dashboardStats.map((stat)=>(
                    <StatCard key={stat.title} title={stat.title} value={stat.value} icon={stat.icon} color={stat.color} />
                ))}
            </div>
            <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">Recent Tasks</h2>
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