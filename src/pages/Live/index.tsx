import useModal from "@/hooks/useModal";
import React from "react";

type Props = {};

const Live = (props: Props) => {
<<<<<<< HEAD
  const {onPresent, onDismiss} = useModal(
=======
  const [onPresent, onDismiss] = useModal(
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
    <div>
      hello <button onClick={() => onDismiss()}>close</button>
    </div>
  );
  return (
    <div>
      Live<button onClick={onPresent}>open</button>
    </div>
  );
};

export default Live;
