import DashboardLayout from "../layouts/DashboardLayout";
import SubjectCard from "../components/SubjectCard";
import { subjects } from "../data/subjectsData";
function SubjectsPage(){
    return(
        <DashboardLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {subjects.map((subject)=>(
                    <SubjectCard key={subject.id} name={subject.name} description={subject.description} topicCount={subject.topicCount} icon={subject.icon} />
               ))}
                
            </div>
        </DashboardLayout>
    );
}
export default SubjectsPage;