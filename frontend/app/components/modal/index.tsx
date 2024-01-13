import { ModalProp } from "@/app/types/modal";

export const ConfirmationModal = (
  {isOpen, setIsClosing, onConfirm,
  description="Are you sure you want to proceed",
  title="Confirmation"}: ModalProp) => {
 
   const handleClose = () => {
     setIsClosing(true);
     setTimeout(() => {
       setIsClosing(false);
     }, 300); // You can adjust the transition duration here
   };
 
   const handleConfirm = () => {
     onConfirm()
     handleClose();
   };
 
   return (
     <div
       className={`${
         isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
       } fixed inset-0 z-50 transition-opacity ease-in-out duration-300`}
     >
       <div className="flex items-center justify-center h-screen">
         <div
           className={`${
             !isOpen ? 'scale-95' : 'scale-100'
           } transform bg-white w-80 p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300`}
         >
           <h2 className="text-xl font-semibold mb-4">{title}</h2>
           <p className="text-gray-600 mb-4">{description}</p>
           <div className="flex justify-end">
             <button
               className="mr-2 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none"
               onClick={handleClose}
             >
               Cancel
             </button>
             <button
               className="px-4 py-2 bg-light-green hover:bg-green-700 text-white rounded  focus:outline-none"
               onClick={handleConfirm}
             >
               Confirm
             </button>
           </div>
         </div>
       </div>
     </div>
   );
 };