import { useForm } from 'react-hook-form';
import { useCreateNote } from '@/app/api/notes/post';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CreateForm } from '@/app/types/modal';
import { useEffect } from 'react';
import { useUpdateNote } from '@/app/api/notes/put';
import { useGetNotesById } from '@/app/api/notes/get';


export const CreateNoteForm = ({isOpen, handleClose, update = false, id = null}: CreateForm) => {
  const { createNote } = useCreateNote();
  const { updateNote } = useUpdateNote();
  const { data: note } = useGetNotesById({
    id: id as number,
    shouldFetch: !!update && id !== null,
  });
  const defaultValues = {
    title: note?.title,
    tag: note?.tag,
    description: note?.description,
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues, 
  });

  useEffect(() => {
    reset(defaultValues);
  }, [reset]);
  
 
  const onSubmit = async (data: any) => {
    try {
      if(!update){
      await createNote({...data, archived: false});
      toast.success('Note created successfully!', { position: toast.POSITION.TOP_RIGHT });
      } else if(!!update && id !== null){
        await updateNote(id, {...data, archived: note.archived});
        toast.success('Note updated successfully!', { position: toast.POSITION.TOP_RIGHT });
      }
      // Reset the form after everything is OK
      reset();
      handleClose(false)
    } catch (error) {
      toast.error('Failed to create note. Please try again.', { position: toast.POSITION.TOP_RIGHT });
      console.error('Error creating note:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${
      isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    } fixed font-sans text-dark-green top-20 inset-0  bg-light-yellow rounded-xl h-fit 
    p-3 z-50 transition-opacity ease-in-out duration-300 max-w-md mx-auto mt-8 shadow `} >
      <div className="mb-4 w-full flex flex-col gap-5">
        <div className='flex flex-row justify-between w-full'>
        <h1 className='font-semibold'>{update ? 'Update Note': 'New Note'}</h1>
        <button type='button' className='font-bold ' onClick={() => handleClose(false)}>
          x
        </button>        
        </div>
        <div>
        <div>
        <label htmlFor="title" className="block text-sm font-semibold text-gray-600">
          Title:
        </label>
        <input
          type="text"
          id="title"
          {...register('title', { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        {errors.title && <span className="text-red-500 text-xs">This field is required</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="tag" className="block text-sm font-semibold text-gray-600">
          Tag:
        </label>
        <input
          type="text"
          id="tag"
          {...register('tag', { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        {errors.tag && <span className="text-red-500 text-xs">This field is required</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-semibold text-gray-600">
          Description:
        </label>
        <textarea
          id="description"
          {...register('description', { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        {errors.description && <span className="text-red-500 text-xs">This field is required</span>}
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-light-green text-dark-green hover:text-white hover:bg-green-700 rounded-md  focus:outline-none"
      >
        {update ? 'Update': 'Create Note'}
      </button>
      </div>
      </div>
    </form>
    
  );
};
