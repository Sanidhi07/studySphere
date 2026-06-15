import type {Task} from "../types/task";

export const tasks: Task[] = [
  {
    id:1,
    topicId:1,
    title:"Write Task 1 Essay",
    completed:false,
  },
  {
    id:2,
    topicId:1,
    title:"Write Task 2 Essay",
    completed:true,
  },
  {
     id: 3,
    topicId: 2,
    title: "Reading Passage 1",
    completed: false,
  },
  {
    id:4,
    topicId:2,
    title:"Reading Passage 2",
    completed:true
  },
  {
    id: 5,
    topicId: 4,
    title: "Solve Two Sum",
    completed: false,
  },
  {
     id: 6,
    topicId: 4,
    title: "Solve Best Time to Buy Stock",
    completed: false,
  }

]