import Check from '@/public/note-icon/check';
import { Notes } from '@/app/types/notes';
import { useArchiveNote, useDelete } from '@/app/api/notes/put';
import { toast } from 'react-toastify';
import Delete from '@/public/note-icon/delete';
import { useEffect, useState } from 'react';
import { ConfirmationModal } from '../modal';
import { CreateNoteForm } from '../new-note-form';
import Pencil from '@/public/note-icon/pencil';
import { useGetNotesById } from '@/app/api/notes/get';

export const Note = ({ note }: { note: Notes }) => {
  const { archiveNote } = useArchiveNote();
  const { deleteNote } = useDelete();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showFormModal, setShowFormModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
 

  const condition = !!note?.archived;

  const handleArchive =  (isArchiving: boolean) => {
      try {
         archiveNote(note.id, isArchiving);
        toast.success('Note updated successfully!', { position: toast.POSITION.TOP_RIGHT });
      } catch(error) {
        console.error(error)
        toast.error('Failed to create note. Please try again.', { position: toast.POSITION.TOP_RIGHT });
      }
  };

  const handleDelete = async () => {
    try {
         deleteNote(note?.id);
        toast.success('Note deleted successfully!', { position: toast.POSITION.TOP_RIGHT });
      } catch(error) {
        console.error(error)
        toast.error('Failed to delete the note. Please try again.', { position: toast.POSITION.TOP_RIGHT });
      }
  };


  return (
    <article
      className={`${condition && '!bg-gray-400'}
         p-3 gap-5 bg-light-yellow grid min-h-52 max-w-96 rounded-2xl`}
    >
      <div className="flex flex-row justify-between items-start">
        <h1 className={`${condition && '!line-through'} font-mono text-gray-700 font-bold`}>
          {note?.title}
        </h1>
        <h2
          className={`${condition && '!line-through !bg-slate-700 !text-white'} bg-brick-orange py-0 h-7 px-3 text-dark-green rounded-2xl`}
        >
          {note?.tag}
        </h2>
   
      </div>
      <div>
        <p className={`${condition && '!line-through'} font-mono text-gray-700 text-sm`}>
          {note?.description}
        </p>
        
      </div>
      <div className='flex flex-row items-center gap-3'>
        <button
          onClick={() => handleArchive(condition ? false : true)}
          className={`${condition && '!stroke-gray-500'} stroke-orange-400 fill-none`}
        >
          <Check width={20} height={20} />
        </button>
        <button
          onClick={() => setShowModal(true)}
        >
          <Delete width={20} height={20} className='!fill-gray-700'
        />
          </button>
          <button
          onClick={() => setShowEditModal(true)}>
          <Pencil width={20} height={20} className='!fill-gray-700'
        />
        </button>
        </div>
        <ConfirmationModal isOpen={showModal} setIsClosing={setShowModal} onConfirm={() => handleDelete()}
        title="Delete note" description="Are you sure you want to delete the note?" />
        <ConfirmationModal isOpen={showEditModal} setIsClosing={setShowEditModal} onConfirm={() => setShowFormModal(true)}
        title="Update note" description="Are you sure you want to update the note?" />

        <CreateNoteForm update id={note?.id} isOpen={showFormModal} handleClose={setShowFormModal} />
    </article>
  );
};
