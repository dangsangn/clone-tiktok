import classNames from "classnames/bind";
import React, { createContext, useContext, useState } from "react";
import styles from "./ModalContext.module.scss";
const cx = classNames.bind(styles);

type Props = {
  children: React.ReactNode;
};

type PropsValue = {
  isOpen: boolean;
  onDismiss: () => void;
  onPresent: (content: React.ReactElement) => void;
<<<<<<< HEAD
  handlePreventClickOut?: () => void;
=======
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
};

const initialValue: PropsValue = {
  isOpen: false,
  onPresent: () => {},
  onDismiss: () => {},
};

export const ModalContext = createContext(initialValue);

const ModalProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [contentModal, setContentModal] = useState(null);
<<<<<<< HEAD
  const [canClickOut, setCanClickOut] = useState(true);
=======
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7

  const handlePresent = (content: any) => {
    setContentModal(content);
    setIsOpen(true);
  };

  const handleDismiss = () => {
    setContentModal(null);
    setIsOpen(false);
  };

  const handleDismissModal = (e: any) => {
    if (e.target === e.currentTarget) {
<<<<<<< HEAD
      if (canClickOut) {
        handleDismiss();
      }
    }
  };

  const handlePreventClickOut = () => {
    setCanClickOut(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        onDismiss: handleDismiss,
        onPresent: handlePresent,
        handlePreventClickOut,
      }}
=======
      handleDismiss();
    }
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, onDismiss: handleDismiss, onPresent: handlePresent }}
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
    >
      {children}
      {isOpen && (
        <div className={cx("overlay")} onClick={handleDismissModal}>
          <div className={cx("wrap-modal")}>
            {React.isValidElement(contentModal) &&
<<<<<<< HEAD
              React.cloneElement(contentModal, { handleDismiss })}
=======
              React.cloneElement(contentModal, { onDismiss: handleDismiss })}
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

export const useContextModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("modal context is not provided");
  }
  return context;
};
