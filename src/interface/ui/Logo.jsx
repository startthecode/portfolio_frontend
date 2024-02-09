import logo from "../../images/logo-white.png";

export const Logo = ({ className }) => {
  return <img className={`rounded-full ${className}`} src={logo} alt="logo" />;
};
