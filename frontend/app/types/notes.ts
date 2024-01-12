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