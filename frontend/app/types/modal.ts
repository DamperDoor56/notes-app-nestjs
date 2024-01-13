export type ModalProp = {
    isOpen: boolean,
    setIsClosing: Function,
    title?: string;
    description?: string;
    onConfirm: Function
}

export type CreateForm = {
    isOpen: boolean,
    handleClose: Function,
    update?: boolean
    id?:  number | null; 
}