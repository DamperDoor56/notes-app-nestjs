import { useForm } from 'react-hook-form';
import { useCreateNote } from '@/app/api/notes/post';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const CreateNoteForm = ({isOpen, handleClose}: {isOpen: boolean, handleClose: Function}) => {
  const { createNote } = useCreateNote();
  // added react-hook form 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await createNote({...data, archived: false});
      toast.success('Note created successfully!', { position: toast.POSITION.TOP_RIGHT });
      // Reset the form after everything is OK
      reset();
      handleClose(false)
    } catch (error) {
      toast.error('Failed to create note. Please try again.', { position: toast.POSITION.TOP_RIGHT });
      console.error('Error creating note:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}  className={`${
      isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    } fixed font-sans text-dark-green top-20 inset-0  bg-light-yellow rounded-xl h-fit 
    p-3 z-50 transition-opacity ease-in-out duration-300 max-w-md mx-auto mt-8 shadow `} >
      <div className="mb-4 w-full flex flex-col gap-5">
        <div className='flex flex-row justify-between w-full'>
        <h1 className='font-semibold'>New note</h1>
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
        Create Note
      </button>
      </div>
      </div>
    </form>
    
  );
};
