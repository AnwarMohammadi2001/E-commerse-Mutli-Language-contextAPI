import React, { useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useTranslation } from "react-i18next";
import "./PageTransitionWrapper.css";

const PageTransitionWrapper = ({ children }) => {
  const { i18n } = useTranslation();
  const nodeRef = useRef(null); // 👈 ref for CSSTransition

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={i18n.language}
        timeout={300}
        classNames="fade"
        nodeRef={nodeRef} // 👈 pass ref here
      >
        <div ref={nodeRef}>{children}</div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default PageTransitionWrapper;
