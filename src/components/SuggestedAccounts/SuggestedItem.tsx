import React from "react";
import Tippy from "@tippyjs/react/headless";
import AccountItem, {
  ISubscribeAccount,
  SubscribeAccount,
} from "../AccountItem";

const SuggestedItem = (props: ISubscribeAccount) => {
  return (
    <div>
      <Tippy
        interactive
        placement="bottom-start"
        delay={[500, 0]}
        offset={[0, 0]}
        render={(attrs) => (
          <div className="box" tabIndex={-1} {...attrs}>
            <SubscribeAccount
              id={props.id}
              avatar={props.avatar}
              fullName={props.fullName}
              nickname={props.nickname}
              tick={props.tick}
              likes={props.likes}
              followers={props.followers}
            />
          </div>
        )}
      >
        <div>
          <AccountItem
            id={props.id}
            avatar={props.avatar}
            fullName={props.fullName}
            nickname={props.nickname}
            tick={props.tick}
            small={true}
          />
        </div>
      </Tippy>
    </div>
  );
};

export default SuggestedItem;
