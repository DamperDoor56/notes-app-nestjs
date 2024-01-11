import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './notes.entity';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  findAll() {
    return this.notesService.getNotes();
  }
  // Filter by Id
  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id) {
    return this.notesService.findOne(id);
  }
  // Filter by tag
  @Get('tag/:tag')
  findOneByTag(@Param('tag', ParseIntPipe) tag) {
    return this.notesService.findOne(tag);
  }
  // Make a note
  @Post() create(@Body() note: Note) {
    return this.notesService.createNote(note);
  }
  // edit a note
  @Patch(':id')
  async editNote(@Body() note: Note, @Param('id') id: number): Promise<Note> {
    const noteEdited = await this.notesService.editNote(id, note);
    return noteEdited;
  }
  // Delete note
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.notesService.remove(id);
  }
}
