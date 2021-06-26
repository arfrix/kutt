import React, { FunctionComponent } from "react"; // importing FunctionComponent

type RTLManagerProps = {};

const RTLManager: FunctionComponent<RTLManagerProps> = ({ children }) => (
  <div style={{ direction: "rtl" }}>{children}</div>
);

export default RTLManager;
