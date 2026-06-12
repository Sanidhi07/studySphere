import DashboardLayout from "../layouts/DashboardLayout";
import TopicCard from "../components/TopicCard";
import { topics } from "../data/topicsData";
import {useParams} from "react-router-dom";

function TopicsPage(){
    const { subjectId } = useParams();
    const filteredTopics = topics.filter(topic => topic.subjectId === Number(subjectId));
    return(
        <DashboardLayout>
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Topics</h1>
                <p className="text-gray-500 mt-2">Browse topics for this subject</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTopics.map((topic) => (
                    <TopicCard 
                        key={topic.id} 
                        name={topic.name} 
                        description={topic.description} 
                    />
                ))}
            </div>
        </DashboardLayout>
    );
} 
export default TopicsPage;