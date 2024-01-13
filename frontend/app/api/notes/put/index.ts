import { mutate } from 'swr';
import { host } from '../post';

export const useArchiveNote = () => {

  const archiveNote = async (noteId: number, isArchived: boolean) => {
    try {
      const response = await fetch(`${host}/notes/${noteId}/archive/${isArchived}`, {
        method: 'PUT', // Assuming you use a PUT request for updating the archive status
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // If everything it's ok, invalidate the cache for the notes
        mutate(`${host}/notes`);
      } else {
        console.error('Error in archive request:', response.statusText);
      }
    } catch (error) {
      console.error('Error in archive request:', error);
    }
  };

  return { archiveNote };
};


export const useDelete = () => {

  const deleteNote = async (noteId: number) => {
    try {
      const response = await fetch(`${host}/notes/${noteId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await mutate(`${host}/notes`);
      } else {
        console.error('Error in DELETE request:', response.statusText);
      }
    } catch (error) {
      console.error('Error in DELETE request:', error);
    }
  };

  return {
    deleteNote,
  };
};

export const useUpdateNote = () => {

  const updateNote = async (noteId: number, updatedNote: any) => {
    try {
      const response = await fetch(`${host}/notes/${noteId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedNote),
      });

      if (response.ok) {
        await mutate(`${host}/notes`);
      } else {
        console.error('Error in PUT request:', response.statusText);
      }
    } catch (error) {
      console.error('Error in PUT request:', error);
    }
  };

  return {
    updateNote,
  };
};

