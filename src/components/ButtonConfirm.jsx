import React from "react";

export default function ButtonConfirm(props) {
  return (
    <>
      <button
        type="submit"
        onClick={props.click}
        className="btn btn-primary"
      >
        Verificar
      </button>
    </>
  );
}
