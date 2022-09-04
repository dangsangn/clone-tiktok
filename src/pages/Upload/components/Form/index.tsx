import classNames from "classnames/bind";
import React from "react";

import Button from "@/components/Button";
import Input from "@/components/FormFiled/Input";
import Select, { OptionProp } from "@/components/FormFiled/Select";
import styles from "./Form.module.scss";
const cx = classNames.bind(styles);

type Props = {
  topic: string;
  setTopic: (value: string) => void;
  caption: string;
  setCaption: (value: string) => void;
  handlePost: () => void;
  handleDiscard: () => void;
  postSaving: boolean;
  optionsTopic: OptionProp[];
};

const Form = ({
  topic,
  setTopic,
  caption,
  setCaption,
  handlePost,
  handleDiscard,
  postSaving,
  optionsTopic,
}: Props) => {
  return (
    <div>
      <div className={cx("wrap-input")}>
        <Input
          name="caption"
          label="Caption"
          value={caption}
          onChange={setCaption}
        />
      </div>
      <div className={cx("wrap-select")}>
        <Select
          options={optionsTopic}
          name="topic"
          label="Topic"
          value={topic}
          onChange={setTopic}
        />
      </div>
      <div className={cx("wrap-button")}>
        <Button onClick={handleDiscard} style={{ minWidth: "164px" }} text>
          Discard
        </Button>
        <Button onClick={handlePost} primary style={{ minWidth: "164px" }}>
          {postSaving ? "Posting..." : "Post"}
        </Button>
      </div>
    </div>
  );
};

export default Form;
