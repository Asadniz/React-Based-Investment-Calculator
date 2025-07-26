import logo from "../assets/investment-calc-logo.png";
export default function Header() {
  return (
    <div id="header">
      <img src={logo} alt="Logo" />
      <h1> Investment Calculator</h1>
    </div>
  );
}
