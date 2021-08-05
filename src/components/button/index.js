import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const Button = ({
  buttonType,
  btStyle,
  caption,
  className,
  disabled,
  func,
  handler,
  id,
  padding,
  style,
  type,
  url,
  value,
  target,
}) => {
  const paddingStyle =
    padding === "xl"
      ? "px-20"
      : padding === "lg"
      ? "px-16"
      : padding === "regular"
      ? "px-10"
      : padding === "small"
      ? "px-5"
      : padding === "xs"
      ? "px-2"
      : padding === "none" && "px-0";

  const buttonStyle =
    style === "primary"
      ? `${btStyle} ${paddingStyle} bg-seagreen py-2 rounded-lg text-white font-bold animate--button`
      : style === "secondary"
      ? `${btStyle} ${paddingStyle} bg-white py-2 rounded-lg text-seagreen font-bold border-2 border-seagreen animate--button`
      : style === "white"
      ? `${btStyle} ${paddingStyle} bg-white py-2 rounded-lg text-seagreen font-bold animate--button`
      : style === "cancel"
      ? `${btStyle} ${paddingStyle} bg-white py-2 rounded-lg text-red-700 font-bold border-2 border-red-700 animate--button`
      : style === "festival" &&
        `${btStyle} ${paddingStyle} bg-festival py-2 rounded-lg text-nero font-bold animate--button`;

  const targetWindow = target && "_blank";

  return (
    <div className={className}>
      {type === "link" ? (
        <Link href={url}>
          <button
            className={buttonStyle}
            disabled={disabled}
            onClick={func}
            onChange={handler}
            type={buttonType}
            value={value}
            id={id}
          >
            {caption}
          </button>
        </Link>
      ) : type === "a" ? (
        <a href={url} target={targetWindow} rel="noopener noreferrer">
          <button
            className={buttonStyle}
            disabled={disabled}
            onClick={func}
            onChange={handler}
            type={buttonType}
            value={value}
            id={id}
          >
            {caption}
          </button>
        </a>
      ) : type === "link-a" ? (
        <Link href={url}>
          <a target={targetWindow} rel="noopener noreferrer">
            <button
              className={buttonStyle}
              disabled={disabled}
              onClick={func}
              onChange={handler}
              type={buttonType}
              value={value}
              id={id}
            >
              {caption}
            </button>
          </a>
        </Link>
      ) : type === "close" ? (
        <i
          onClick={func}
          className="flex items-center justify-center w-12 h-12 transition duration-500 bg-white rounded-full shadow cursor-pointer fill-current animate--button text-nero fa-lg fas fa-times hover:text-gainsboro"
        />
      ) : (
        type === "undef" && (
          <button
            className={buttonStyle}
            disabled={disabled}
            onClick={func}
            onChange={handler}
            type={buttonType}
            value={value}
            id={id}
          >
            {caption}
          </button>
        )
      )}
    </div>
  );
};

Button.defaultProps = {
  buttonType: "button",
  padding: "regular",
  type: "undef",
};

Button.propTypes = {
  buttonType: PropTypes.oneOf(["submit", "reset", "button"]),
  caption: PropTypes.string,
  className: PropTypes.string,
  btStyle: PropTypes.string,
  disabled: PropTypes.bool,
  func: PropTypes.func,
  handler: PropTypes.func,
  id: PropTypes.string,
  padding: PropTypes.oneOf(["xl", "lg", "regular", "small", "xs", "none"]),
  style: PropTypes.oneOf([
    "primary",
    "secondary",
    "white",
    "cancel",
    "festival",
  ]),
  type: PropTypes.oneOf(["link", "a", "link-a", "close", "undef"]),
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  value: PropTypes.string,
  target: PropTypes.bool,
};

export default Button;
