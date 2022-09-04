import { useContextModal } from "@/contexts/modal/ModalContext";
import React, { useCallback } from "react";

function useModal(children: React.ReactElement) {
  const { onDismiss, onPresent } = useContextModal();
  const handlePresent = useCallback(() => {
    return onPresent(children);
  }, [children, onPresent]);
  return [handlePresent, onDismiss];
}

export default useModal;
