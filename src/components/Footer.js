import Grupo_7610 from "../assenst/Grupo_7610.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__patrocinio">
        <h1 className="footer__patrocinio-text">Con el patrocinio de</h1>
      </div>
      <img className="footer__patrocinio-img" src={Grupo_7610} />
    </footer>
  );
}
export default Footer;
