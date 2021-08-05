import React, { useState, useEffect } from "react";
import Web from "./web";
// import Mobile from "./mobile";

const MainHeader = ({ transparent }) => {
  const [nav, setNav] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setNav(false);
    } else if (window.scrollY > 73) {
      return setNav(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      return window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div className={`${transparent ? "" : "h-24"} ${nav && "h-24"} `}>
      <Web transparent={transparent} nav={nav} />
      {/* <Mobile transparent={transparent} nav={nav} /> */}
    </div>
  );
};

// MainHeader.propTypes = {
//   transparent: PropTypes.bool,
// }

export default MainHeader;
