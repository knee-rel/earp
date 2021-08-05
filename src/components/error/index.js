import React from "react";
import PropTypes from "prop-types";

const Error = ({ message }) => {
  return <p className="text-red-700">⚠ {message}</p>;
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
