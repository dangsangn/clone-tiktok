import { useContextModal } from "@/contexts/modal/ModalContext";
import React, { useCallback } from "react";

function useModal(children: React.ReactElement) {
<<<<<<< HEAD
  const { onDismiss, onPresent, handlePreventClickOut } = useContextModal();
  const handlePresent = useCallback(() => {
    return onPresent(children);
  }, [children, onPresent]);
  return { onPresent: handlePresent, onDismiss, handlePreventClickOut };
=======
  const { onDismiss, onPresent } = useContextModal();
  const handlePresent = useCallback(() => {
    return onPresent(children);
  }, [children, onPresent]);
  return [handlePresent, onDismiss];
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
}

export default useModal;
