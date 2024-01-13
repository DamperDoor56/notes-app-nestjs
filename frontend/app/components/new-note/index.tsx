import { useState } from "react"
import { CreateNoteForm } from "../new-note-form"
import { ConfirmationModal } from "../modal"

export function AddNewNote(){
    const [showForm, setShowForm] = useState<boolean>(false)
    const [showModal, setShowModal] = useState<boolean>(false)
    return(
        <section className="flex pt-10 justify-center w-full ">
            <CreateNoteForm isOpen={showForm} handleClose={setShowForm} />
            <button onClick={() => setShowModal(true)} className="text-sans font-bold text-brick-gray border shadow p-3 rounded-2xl">
                 + Add a new note
            </button>
              <ConfirmationModal isOpen={showModal} setIsClosing={setShowModal} onConfirm={() => setShowForm(true)}
              title="New note" description="Are you sure you want to make a new note?" />
                
        </section>
    )
}
