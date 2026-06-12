import {Link} from "react-router-dom";

interface SubjectCardProps {
  id:number;
  name: string;
  description: string;
  topicCount: number;
  icon:string;
}
function SubjectCard({ id, name, description, topicCount, icon }: SubjectCardProps){
  return(
    <Link to={`/subjects/${id}/topics`}>
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
        <div className="text-3xl mb-3">{icon}</div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500 mt-2">{description}</p>
        <p className="text-sm text-indigo-600 mt-4">{topicCount} Topics</p>
      </div>
    </Link>
  )
}

export default SubjectCard;