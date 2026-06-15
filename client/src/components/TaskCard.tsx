interface TaskCardProps{
  title:string;
  completed: boolean;
}

function TaskCard({title,completed}:TaskCardProps){
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{title}</h3>

        <span className={`px-3 py-1 rounded-full text-sm ${completed ? "bg-green-100 text-green-700":"bg-yellow-100 text-yellow-700"}`}>{completed?"Completed":"Pending"}</span>
      </div>
    </div>
  );
}
export default TaskCard;