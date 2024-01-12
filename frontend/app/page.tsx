"use client"

import { useState } from "react";
import { Navbar } from "./components/navbar";
import { useGetAllNotes, useGetNotesByTag, useGetNotesByTitleOrDesc } from "./api/notes/get";
import { Option } from "./types/navbar";
import { NotesGrid } from "./components/notes";
import { AllCondition, ContentCondition, TagCondition, getDisplayedLoading, getDisplayedNotes } from "./utils/notes";

export default function Home() {
  // States
  const [selectedOption, setSelectedOption] = useState<Option>({ value: 'Select', label: 'Select' });
  const [inputContent, setInputContent] = useState<string>('');

  // Request
  const { data: notes, isLoading } = useGetNotesByTitleOrDesc({
    content: inputContent,
    shouldFetch: ContentCondition({selectedOption, inputContent}),
  });
  const { data: allNotes, isLoading: allNotesLoad } = useGetAllNotes(AllCondition({selectedOption, inputContent}));
  const { data: tagNotes, isLoading: tagNotesLoad } = useGetNotesByTag({
    tag: inputContent,
    shouldFetch: TagCondition({selectedOption, inputContent}),
  });
  
// Determine displayed notes or loadings based on selected option
  const displayedNotes = getDisplayedNotes({selectedOption, notes, tagNotes, allNotes});
  const displayedLoading = getDisplayedLoading({selectedOption, isLoading, tagNotesLoad, allNotesLoad})

  return (
    <main>
      <Navbar selectedOption={selectedOption} setInputContent={setInputContent} setSelectedOption={setSelectedOption} />
      <NotesGrid notes={displayedNotes?.data} isLoading={displayedLoading}  />
    </main>
  )
}
