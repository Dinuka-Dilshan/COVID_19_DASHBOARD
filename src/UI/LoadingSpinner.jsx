import ReactDOM from "react-dom";

import "./spinner.css";

const LoadingSpinner = () => {
  const backdrop = (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        top: "0",
        padding: "0",
        left: 0,
        background:
          "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
          display:'flex',
          justifyContent:'center',
          alignItems:"center"
      }}
    >
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
  const portal = ReactDOM.createPortal(
    backdrop,
    document.getElementById("loader")
  );

  return portal;
};

export default LoadingSpinner;
