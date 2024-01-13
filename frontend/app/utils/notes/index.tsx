import { Conditional, NoteHelperDisplay, NoteHelperLoad } from "@/app/types/notes";

//  helper function to help display notes based on each case
export function getDisplayedNotes({selectedOption, notes , tagNotes, allNotes}: NoteHelperDisplay ) {
    switch (selectedOption.value) {
    case 'Content':
      return notes;
    case 'Tag':
      return tagNotes;
    default:
      return allNotes;
    }
  }  
//  helper function to help whevener a certain case of notes is loading
 export function getDisplayedLoading({selectedOption, isLoading, tagNotesLoad, allNotesLoad}: NoteHelperLoad) {
    switch (selectedOption.value) {
    case 'Content':
      return isLoading;
    case 'Tag':
      return tagNotesLoad;
    default:
      return allNotesLoad;
    }
  }  

  // conditionals 
  export function AllCondition({selectedOption, inputContent}: Conditional) {
    return (
      selectedOption.value === 'Select' || selectedOption.value === 'Tag' && inputContent === ''
    )
  }

  export function TagCondition({selectedOption, inputContent}: Conditional){
    return(
      selectedOption.value === 'Tag' && inputContent !== ''
    )
  }

  export function ContentCondition({selectedOption, inputContent}: Conditional){
    return (
      selectedOption.value === 'Content' && inputContent !== ''
    )
  }