import React from "react";

type Props = {
  message: String;
};

const ErrorToast = (props: Props) => {
  return (
    <div className="bg-green-600 text-center px-4 py-2">
      <span className="font-bold ">{props.message}</span>
    </div>
  );
};

export default ErrorToast;
