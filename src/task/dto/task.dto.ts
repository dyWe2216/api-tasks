import { IsBoolean, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class TaskDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  readonly description: string;

  @IsBoolean()
  @IsNotEmpty()
  readonly isDone: boolean;
}
