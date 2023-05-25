import { useState } from 'react';

export function useModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentModal, setCurrentModal] = useState<number>(0);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const setModalNumber = (id: number) => setCurrentModal(id);

  return {
    isOpen,
    currentModal,
    openModal,
    closeModal,
    setModalNumber,
  };
}
