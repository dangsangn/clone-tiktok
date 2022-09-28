import useModal from "@/hooks/useModal";
import React from "react";

type Props = {};

const Live = (props: Props) => {
  const {onPresent, onDismiss} = useModal(
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
