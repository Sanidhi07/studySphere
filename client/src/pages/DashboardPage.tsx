import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import {dashboardStats,recentTasks} from "../data/dashboardData";

function DashboardPage(){
    return(
        <DashboardLayout>
            <h1 className="text-4xl font-bold">Welcome back</h1>
            <p className="text-gray-500 mt-2">Let's make today productive.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {dashboardStats.map((stat)=>(
                    <StatCard key={stat.title} title={stat.title} value={stat.value} />
                ))}
            </div>
            <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">Recent Tasks</h2>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                    <ul className="space-y-3">
                        {recentTasks.map((task,index)=>(
                            <li key={index} className="flex items-center space-x-3">
                                {task}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </DashboardLayout>
    );
}
export default DashboardPage;