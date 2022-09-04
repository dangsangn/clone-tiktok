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
      handleDismiss();
    }
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, onDismiss: handleDismiss, onPresent: handlePresent }}
    >
      {children}
      {isOpen && (
        <div className={cx("overlay")} onClick={handleDismissModal}>
          <div className={cx("wrap-modal")}>
            {React.isValidElement(contentModal) &&
              React.cloneElement(contentModal, { onDismiss: handleDismiss })}
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
