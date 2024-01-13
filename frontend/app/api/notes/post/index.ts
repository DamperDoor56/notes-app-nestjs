import { Notes } from '@/app/types/notes';
import { mutate } from 'swr';

export const host = process.env.NEXT_PUBLIC_API_HOST;

export const useCreateNote = () => {
  const createNote = async (newNote: Notes) => {
    try {
      const response = await fetch(`${host}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNote),
      });

      if (response.ok) {
        // If everything it's ok, invalidate the cache
        mutate(`${host}/notes`);
      } else {
        console.error('Error in POST request:', response.statusText);
      }
    } catch (error) {
      console.error('Error in POST request:', error);
    }
  };

  return { createNote };
};

