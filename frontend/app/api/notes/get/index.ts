// useGetNotes
import useSWR from 'swr';
import { host } from '../post';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useGetAllNotes = (shouldFetch: boolean) => {
  const { data, error, isValidating } = useSWR(shouldFetch ? `${host}/notes` : null, fetcher);
  return {
    data: data,
    isLoading: !data && !error,
    isError: error,
    isValidating,
  };
};

export const useGetNotesByTag = ({tag, shouldFetch}: {tag: string, shouldFetch: boolean}) => {
  const { data, error, isValidating } = useSWR(shouldFetch ? `${host}/notes/tag/${tag}`: null, fetcher);
  return {
    data: data,
    isLoading: !data && !error,
    isError: error,
    isValidating,
  };
};

export const useGetNotesById = ({id, shouldFetch}: {id:number, shouldFetch: boolean}) => {
  const { data, error, isValidating } = useSWR(shouldFetch ? `${host}/notes/${id}`: null, fetcher);
  return {
    data: data,
    isLoading: !data && !error,
    isError: error,
    isValidating,
  };
};
export const useGetNotesByTitleOrDesc = ({content, shouldFetch}: {content: string, shouldFetch: boolean}) => {
  const { data, error, isValidating } = useSWR(shouldFetch ? `${host}/notes/title-or-description/${content}` : null, fetcher);
  return {
    data: data,
    isLoading: !data && !error,
    isError: error,
    isValidating,
  };
};
