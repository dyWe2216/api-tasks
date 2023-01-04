import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid'
import { TaskDTO } from './dto/task.dto';
import { ITask } from './task.interface';

@Injectable()
export class TaskService {
    tasks: ITask[] = [];
    create(taskDTO: TaskDTO): ITask {
        const task = {
            id: uuidv4(),
            ...taskDTO
        }

        this.tasks.push(task);
        return task;
    }

    findAll(): ITask[] {
        return this.tasks;
    }

    findOne(id: string): ITask {
        return this.tasks.find((task) => task.id === id);
    }

    update(id: string, taskDTO: TaskDTO): ITask {
        const newTask = { id, ...taskDTO };
        this.tasks = this.tasks.map((task) => task.id === id ? newTask : task)

        return newTask;
    }

    delete(id: string): string {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        return 'Task deleted!';
    }
}
