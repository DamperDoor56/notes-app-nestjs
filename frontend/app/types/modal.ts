export type ModalProp = {
    isOpen: boolean,
    setIsClosing: Function,
    title?: string;
    description?: string;
    onConfirm: Function
}