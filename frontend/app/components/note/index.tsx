import { Notes } from "@/app/types/notes-grid"

export const Note = ({note}: {note: Notes}) => {
    return (
        <article className="p-3 gap-5 bg-light-yellow grid min-h-52 max-w-96 rounded-2xl">
            <div className="flex flex-row justify-between">
            <h1 className="font-mono text-gray-700">{note?.title}</h1>
            <h2 className="bg-light-green py-0 h-7 px-3 text-dark-green rounded-2xl">{note?.tag}</h2>            
            </div>
            <div>
                <p className="font-mono text-gray-700 text-sm">
                    {note?.description}
                </p>
            </div>
            
        </article>
    )
}