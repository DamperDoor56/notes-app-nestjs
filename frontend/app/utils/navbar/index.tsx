import { Option } from "@/app/types/navbar";

// Select options
export const options: Option[] = [
    { value: 'Select', label: 'Select' },
    { value: 'Tag', label: 'Tag' },
    { value: 'Content', label: 'Content' },
    { value: 'ID', label: 'ID' },
  ];

// Select styles 
export const selectStyles = {
  control: (baseStyles: any) => ({
    ...baseStyles,
    borderColor: 'transparent',
    outline: 'none',
    padding: 0,
  }),
};
