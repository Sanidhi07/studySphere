interface TopicCardProps {
  name:string;
  description:string;
}
function TopicCard({name,description}:TopicCardProps){
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  )
}
export default TopicCard;