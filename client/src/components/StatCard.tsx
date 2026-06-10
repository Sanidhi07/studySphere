interface StatCardProps{
  title:string;
  value:number;
}

function StatCard({title,value}:StatCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
      <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
      <p className="mt-3 text-4xl font-bold text-slate-800">{value}</p>
    </div>
  );
}
export default StatCard;