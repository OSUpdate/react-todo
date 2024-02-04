import { useContext, useState } from 'react';
import ModalContext from "@/contexts/ModalContext"

const useModal = () => useContext(ModalContext);

export { useModal };