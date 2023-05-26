import { useState } from 'react';

export function useModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentModal, setCurrentModal] = useState<number>(0);
  const [isEditModal, setIsEditModal] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const setModalNumber = (id: number) => setCurrentModal(id);
  const setEditModal = (isEdit: boolean) => setIsEditModal(isEdit);

  return {
    isOpen,
    isEditModal,
    currentModal,
    openModal,
    closeModal,
    setModalNumber,
    setEditModal,
  };
}
