import { Note } from './notes.entity';

export type PromiseTypes = {
  status: number;
  message: string;
  data: Note | any;
};
