import { Option } from "./navbar";

export type NotesGridProps = {
    notes: Notes[];
    isLoading: boolean;
  }

  export interface Notes {
    id: number,
    title: string,
    tag: string,
    description: string,
    archived:boolean
  }

  export interface NotesResponse {
    data: Notes[];
    length: number;
  }

  export type NoteHelper = {
    selectedOption: Option;
  };
  export type NoteHelperDisplay = NoteHelper & {
    notes: NotesResponse;
    tagNotes: NotesResponse;
    allNotes: NotesResponse;
  }
  export type NoteHelperLoad = NoteHelper & {
    isLoading: boolean;
    tagNotesLoad: boolean;
    allNotesLoad: boolean;
  };

  export type Conditional = NoteHelper & {
    inputContent: string
    };