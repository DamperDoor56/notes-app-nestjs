export interface Option {
    value: string;
    label: string;
  }

  export type NavbarProps = {
    setSelectedOption: Function,
    setInputContent: Function,
    selectedOption: Option;
  }