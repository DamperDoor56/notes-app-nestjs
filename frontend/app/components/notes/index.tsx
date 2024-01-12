import { Notes, NotesGridProps } from "@/app/types/notes";
import { Note } from "../note"

export const NotesGrid = ({ notes, isLoading }: NotesGridProps) => {
    return (
      !isLoading ? 
        <section className="grid grid-cols-4 gap-10">
          {notes?.map((note: Notes) => (
            <div key={note?.id}>
              <Note note={note} />
            </div>
          ))}
        </section> : <h1>Loading...</h1>
    );
  };
  