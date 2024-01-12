import { Transform } from 'class-transformer';
import { IsBoolean, IsString, MaxLength, MinLength } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// An entity is a class that maps to a database table
@Entity()
export class Note extends BaseEntity {
  // creates a primary column which value will be generated with an auto-increment value
  @PrimaryGeneratedColumn()
  id: number;
  // Title
  @Column({ length: 150 })
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  title: string;
  // Tag Column
  @Column()
  @MinLength(1)
  @IsString()
  tag: string;
  // Description
  @Column()
  @MinLength(1)
  @IsString()
  description: string;
  // Archived
  @Column({ default: false, type: 'boolean' })
  @Transform(({ value }) => value === 'true')
  @IsBoolean()
  archived: boolean;
}
