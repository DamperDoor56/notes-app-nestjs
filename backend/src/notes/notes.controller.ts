import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './notes.entity';
import { PromiseTypes } from './types';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}
  // retrieve all notes
  @Get()
  async findAll() {
    const notes = await this.notesService.getNotes();
    // add length too
    return { data: notes, length: notes.length };
  }
  // Filter by Id
  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id) {
    return this.notesService.findOneById(id);
  }
  // Retrieve all notes based on archive status
  @Get('archive/:archive')
  async getNotesByArchiveStatus(@Param('archive') archive: boolean) {
    const notes = await this.notesService.getNotesByArchive(archive);

    return {
      status: 200,
      message: 'Notes retrieved successfully!',
      data: notes,
    };
  }
  @Get('title-or-description/:titleOrDescription')
  async findOneByTitleOrDescription(
    @Param('titleOrDescription') titleOrDescription: string,
  ) {
    try {
      const notes =
        await this.notesService.findByTitleOrDescription(titleOrDescription);
      if (notes.length === 0) {
        // Note not found
        throw new NotFoundException(
          `Note not found with title or description '${titleOrDescription}'`,
        );
      }
      return {
        status: 200,
        message: 'Notes retrieved successfully!',
        data: notes,
      };
    } catch (error) {
      // Other errors
      throw error; // Re-throw other errors for global exception handling
    }
  }
  // Filter by tag
  @Get('tag/:tag')
  findOneByTag(@Param('tag') tag: string) {
    return this.notesService.findOneByTag(tag);
  }
  // Archive or unarchive a note
  @Put(':id/archive/:archive')
  async archiveNote(
    @Param('id') noteId: number,
    @Param('archive') archive: boolean,
  ) {
    return this.notesService.archiveNote(noteId, archive);
  }
  // Make a note
  @Post()
  async create(@Body() note: Note): Promise<PromiseTypes> {
    try {
      const noteEdited = await this.notesService.createNote(note);
      return {
        status: 200,
        message: 'Note created successfully!',
        data: noteEdited,
      };
    } catch (error) {
      // Error message
      throw new InternalServerErrorException('Internal server error');
    }
  }

  // edit a note
  @Put(':id')
  async editNote(
    @Body() note: Note,
    @Param('id') id: number,
  ): Promise<PromiseTypes> {
    try {
      const noteEdited = await this.notesService.editNote(id, note);
      return {
        status: 200,
        message: 'Note updated successfully!',
        data: noteEdited,
      };
    } catch (error) {
      // If the error is because the note was not found, then threw this error
      if (error.status === 404) {
        throw new NotFoundException('Note not found! Try another id');
      } else {
        // Error message if there's other error
        throw new InternalServerErrorException('Internal server error');
      }
    }
  }
  // Delete note
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: string) {
    try {
      await this.notesService.findOneById(id);
      // If the note is found, delete it
      await this.notesService.remove(id);
      // Send a success response
      return { status: 200, message: 'Note deleted successfully!' };
    } catch (error) {
      // If the error is because the note was not found, then threw this error
      if (error.status === 404) {
        throw new NotFoundException('Note not found! Try another id');
      } else {
        // Error message if there's other error
        throw new InternalServerErrorException('Internal server error');
      }
    }
  }
}
