import useOnlineStatus from "../../hook/useOnlineStatus";
import useWindowSize from "../../hook/useWindowSize";

const Header = () => {
  const size = useWindowSize();
  const isOnline = useOnlineStatus();
  return <h2> Header {size.w}, {size.h} I am: {isOnline ? "Online" : "Offline"}</h2>;
};

export default Header;
