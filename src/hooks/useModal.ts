import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalRootState, openModal, closeModal, setOpenModalName, setPrevScrollPosition } from '@/redux/modalSlice';

export const useModal = () => {
  const dispatch = useDispatch();
  const { openModalName, prevScrollPosition } = useSelector((state: ModalRootState) => state.modal);

  const modalRef = useRef<HTMLDialogElement | null>(null);

  const setModalRef = useCallback((ref: HTMLDialogElement | null) => {
    modalRef.current = ref;
  }, []);

  const openModalRef = useCallback(
    (modalName: string) => {
      dispatch(openModal(modalName));
      if (modalRef.current) {
        modalRef.current.showModal();
      }
    },
    [dispatch],
  );

  const closeModalRef = useCallback(() => {
    dispatch(closeModal());
    if (modalRef.current) {
      modalRef.current.close();
    }
  }, [dispatch]);

  const setModalName = useCallback(
    (modalName: string) => {
      dispatch(setOpenModalName(modalName));
    },
    [dispatch],
  );

  const setScrollPosition = useCallback(
    (scrollPosition: number) => {
      dispatch(setPrevScrollPosition(scrollPosition));
    },
    [dispatch],
  );

  return {
    openModal: openModalRef,
    closeModal: closeModalRef,
    setModalName,
    setModalRef,
    setScrollPosition,
    openModalName,
    prevScrollPosition,
  };
};
