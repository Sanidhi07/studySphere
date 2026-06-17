interface TaskCardProps{
  title:string;
  completed: boolean;
}

function TaskCard({title,completed}:TaskCardProps){
  return (
    <div className={`rounded-xl p-4 flex items-center justify-between shadow-sm transition-shadow ${
          completed
            ? "bg-gray-50 border border-gray-200"
            : "bg-white border border-gray-200 hover:shadow-md"
          }`}>
      <div className="flex items-center gap-3">
        <div className={`w-4 h-4 rounded-full ${completed ? "bg-green-500":"bg-gray-300"}`}></div>
        <h3 className={`font-medium ${completed?"line-through text-gray-400":""}`}>{title}</h3>
      </div>
      <span
        className={`px-3 py-1 rounded-full text-sm ${
          completed
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
          }`}
      >
        {completed ? "Completed" : "Pending"}
      </span>
    </div>
  );
}
export default TaskCard;