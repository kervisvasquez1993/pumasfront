import React from "react";

const BasicSection = ({
  title = {},
  children,
  classNameWrapper = {},
  classNameTitle = {},
  classNameContent = {},
}) => {
  return (
    <section className={classNameWrapper}>
      {title && <h2 className={classNameTitle}>{title}</h2>}

      {children && <section className={classNameContent}>{children}</section>}
    </section>
  );
};

export default BasicSection;
