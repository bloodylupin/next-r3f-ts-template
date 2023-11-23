import { useEffect } from "react";
import { useIsMobile } from "../data/atoms";

export default function IsMobileManager() {
  const [_, setIsMobile] = useIsMobile();
  useEffect(() => {
    function setMobile() {
      setIsMobile(window.innerWidth < 768);
    }
    setMobile();
    window.onresize = setMobile;
    return () => {
      window.onresize = () => {};
    };
  }, []);
  return <></>;
}
