import Logo from '../../assets/brand/langui-logo.svg';
import './index.css';

const Header = () => {
  return (
    <header className="mainHeader">
      <div className="container-fluid">
        {/* Container for the brand logo and name */}
        <div className="logotipo">Langui</div>
        {/* Logo Symbol */}
        <img src={Logo} className="logo-symbol" alt="Langui Logo" width="36" height="36" />
        {/* Container for the streak counter */}
        <div className="streak-container">
          <i className="bi bi-lightning-charge-fill"></i>&nbsp;7
        </div>
      </div>
    </header>
  );
}

export default Header;