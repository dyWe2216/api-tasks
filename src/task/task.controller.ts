import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body('description') taskDTO: TaskDTO) {
    return this.taskService.create(taskDTO);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() taskDTO: TaskDTO) {
    return this.taskService.update(id, taskDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
