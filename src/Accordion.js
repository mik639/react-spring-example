import React, { useState, useCallback } from "react";
import { Spring } from "react-spring";

export const Accordion = ({ children, title }) => {
  const [isOpen, toggle] = useState(false);
  const clickHandler = useCallback(() => toggle(!isOpen));
  return (
    <div className="accordion">
      <div className="accordion__title" onClick={clickHandler}>
        {title}
      </div>
      <Spring to={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}>
        {style => (
          <div className="accordion__outer-content" style={style}>
            <div className="accordion__inner-content">{children}</div>
          </div>
        )}
      </Spring>
    </div>
  );
};
