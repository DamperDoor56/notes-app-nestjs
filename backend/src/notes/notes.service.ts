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
  async findOneById(id: string): Promise<Note> {
    const note = await this.notesRepository.findOne(id);
    if (!note) {
      throw new NotFoundException('Note not found! Try another id');
    }
    return note;
  }
  // Retrieves multiple notes by their tag
  async findOneByTag(tag: string): Promise<Note[]> {
    const notes = await this.notesRepository.find({ where: { tag } });
    if (notes.length === 0) {
      // if the array comes empty, then not found
      throw new NotFoundException(`Note with tag '${tag}' not found`);
    }
    return notes;
  }
  // Saves a new note
  async createNote(note: Note) {
    return this.notesRepository.save(note);
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
