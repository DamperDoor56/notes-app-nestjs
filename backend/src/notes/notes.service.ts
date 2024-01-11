import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Note } from './notes.entity';

// It's injectable because of notesRepository dependency
@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note) private notesRepository: Repository<Note>,
  ) {}
  // Retrieves all notes from the database
  async getNotes(): Promise<Note[]> {
    return await this.notesRepository.find();
  }
  // Retrieves a single note by its ID
  findOneById(id: string): Promise<Note> {
    return this.notesRepository.findOne(id as FindOneOptions);
  }
  // Retrieves a single note by its tag
  findOneByTag(tag: string): Promise<Note> {
    return this.notesRepository.findOne(tag as FindOneOptions);
  }
  // Saves a new note
  async createNote(note: Note) {
    this.notesRepository.save(note);
  }
  // Deletes a note
  async remove(id: string): Promise<void> {
    await this.notesRepository.delete(id);
  }
  // Edits an existing note
  async editNote(id: number, note: Note): Promise<Note> {
    // First, it retrieves the note and then updates and saves it.
    const editNote = await this.notesRepository.findOne(id as FindOneOptions);
    if (!editNote) {
      throw new NotFoundException('Note is not found');
    }
    editNote.description = note.description;
    editNote.title = note.title;
    await editNote.save();
    return editNote;
  }
}
