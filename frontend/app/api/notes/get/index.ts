// useGetNotes
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const host = process.env.NEXT_PUBLIC_API_HOST

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

export const useGetNotesByTitleOrDesc = ({content, shouldFetch}: {content: string, shouldFetch: boolean}) => {
  const { data, error, isValidating } = useSWR(shouldFetch ? `${host}/notes/title-or-description/${content}` : null, fetcher);
  return {
    data: data,
    isLoading: !data && !error,
    isError: error,
    isValidating,
  };
};
