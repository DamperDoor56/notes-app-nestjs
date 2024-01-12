import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, ILike, Repository } from 'typeorm';
import { Note } from './notes.entity';
import { PromiseTypes } from './types';

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
  // Retrieves all notes based on the archive status
  async getNotesByArchive(archive: boolean): Promise<Note[]> {
    return this.notesRepository.find({ where: { archived: archive } });
  }
  // Retrieves multiple notes by its title or description
  async findByTitleOrDescription(query: string): Promise<Note[]> {
    const conditions: FindConditions<Note> = {};
    // Case-insensitive search
    conditions.title = ILike(`%${query}%`);
    conditions.description = ILike(`%${query}%`);

    const note = await this.notesRepository.find({ where: conditions });
    if (!note) {
      throw new NotFoundException(
        `Note not found with title or description containing '${query}'`,
      );
    }
    return note;
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
  async findOneByTag(tag: string): Promise<PromiseTypes> {
    const notes = await this.notesRepository.find({ where: { tag } });
    if (notes.length === 0) {
      // if the array comes empty, then not found
      throw new NotFoundException(`Note with tag '${tag}' not found`);
    }
    return {
      status: 200,
      message: 'Notes retrieved successfully!',
      data: notes,
    };
  }
  // Saves a new note
  async createNote(note: Note) {
    return this.notesRepository.save(note);
  }

  // Archives a note
  async archiveNote(noteId: number, archive: boolean): Promise<PromiseTypes> {
    const note = await this.notesRepository.findOne(noteId);
    if (!note) {
      throw new NotFoundException('Note not found');
    }
    note.archived = archive;
    const editedNote = await note.save();
    // Convert boolean to true boolean for consistent JSON serialization
    return {
      status: 200,
      message: 'Changes made successfully',
      data: editedNote,
    };
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
