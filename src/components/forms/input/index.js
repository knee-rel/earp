import React from "react";
import { useController } from "react-hook-form";
import Error from "../../error";

const Input = (props) => {
//   const { field } = useController(props);

  const display = (
    <div className="absolute top-0 right-0 flex items-center justify-center h-full px-5">
      <i
        className={`${
          props.passwordView === "password" ? "text-gainsboro" : "text-seagreen"
        } fas fa-eye fa-lg cursor-pointer hover:text-seagreen transition duration-500`}
        onClick={props.togglePasswordView}
      />
    </div>
  );

  return (
    <div className={`${props.className} flex flex-col w-full p-2`}>
      {props.label && (
        <p
          className={`${props.labelClassName} mb-1 lg:text-lg text-base font-extrabold`}
        >
          {props.label}
        </p>
      )}

      {props.textarea ? (
        <textarea
        //   {...field}
          placeholder={props.placeholder}
          className={`${props.inputClassName} w-full h-full p-3 mb-2 border rounded-lg border-gainsboro`}
          style={{ pointerEvents: props.disabled }}
        />
      ) : props.onChange ? (
        <input
        //   {...field}
          onChange={props.onChange}
          type={props.type}
          maxLength={props.maxLength}
          minLength={props.minLength}
          placeholder={props.placeholder}
          data-id={props.dataId}
          className={`${props.inputClassName} w-full p-3 mb-2 border rounded-lg display-none border-gainsboro`}
          style={{ pointerEvents: props.disabled }}
        />
      ) : props.passwordView ? (
        <div className="relative">
          <input
            // {...field}
            type={props.type}
            maxLength={props.maxLength}
            minLength={props.minLength}
            placeholder={props.placeholder}
            data-id={props.dataId}
            className={`${props.inputClassName} w-full p-3 mb-2 border rounded-lg display-none border-gainsboro`}
            style={{ pointerEvents: props.disabled }}
          />

          {display}
        </div>
      ) : (
        <input
        //   {...field}
          type={props.type}
          maxLength={props.maxLength}
          minLength={props.minLength}
          placeholder={props.placeholder}
          data-id={props.dataId}
          className={`${props.inputClassName} w-full p-3 mb-2 border rounded-lg display-none border-gainsboro`}
          style={{ pointerEvents: props.disabled }}
        />
      )}

      {props.disabled === "none" && (
        <Error message={`${props.itemRequired} is required`} />
      )}
      {props.error && <Error message={props.errorMessage} />}
    </div>
  );
};

export default Input;
