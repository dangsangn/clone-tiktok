import React from "react";

type Props = {
  color?: string;
  height?: string;
  width?: string;
};

const Line = ({ color = "#f0f0f1", height = "1px", width = "100%" }: Props) => {
  return (
    <div style={{ width: width, height: height, backgroundColor: color }}></div>
  );
};

export default Line;
