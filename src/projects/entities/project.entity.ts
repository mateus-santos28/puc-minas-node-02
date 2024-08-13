import { Task } from 'src/tasks/entities/task.entity';

export class Project {
    id: string;
    name: string;
    description: string;
    tasks: Task[];
}
