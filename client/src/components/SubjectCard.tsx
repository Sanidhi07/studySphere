interface SubjectCardProps {
  name: string;
  description: string;
  topicCount: number;
  icon:string;
}
function SubjectCard({ name, description, topicCount, icon }: SubjectCardProps){
  return(
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
      <p className="text-sm text-indigo-600 mt-4">{topicCount} Topics</p>
    </div>
  )
}
export default SubjectCard;