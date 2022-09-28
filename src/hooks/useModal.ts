import { useContextModal } from "@/contexts/modal/ModalContext";
import React, { useCallback } from "react";

function useModal(children: React.ReactElement) {
  const { onDismiss, onPresent, handlePreventClickOut } = useContextModal();
  const handlePresent = useCallback(() => {
    return onPresent(children);
  }, [children, onPresent]);
  return { onPresent: handlePresent, onDismiss, handlePreventClickOut };
}

export default useModal;
