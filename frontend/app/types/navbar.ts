export interface Option {
    value: string;
    label: string;
  }

  export type NavbarProps = {
    setInputContent: Function,
    selectedOption: Option;
  }