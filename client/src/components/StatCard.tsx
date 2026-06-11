interface StatCardProps{
  title:string;
  value:number;
  icon:string;
  color:string;
}

function StatCard({title,value,icon,color}:StatCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-content">
        <div className={`${color} w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3`}>{icon}</div>
        <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
      </div>
      <p className="mt-3 text-4xl font-bold text-slate-800">{value}</p>
    </div>
  );
}
export default StatCard;