import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer-line">
        <h5>Copyright THEVOID - 2023. Todos los derechos reservados. Defensa de las y los consumidores. Para reclamos <a href="">ingrese aquí</a></h5>
        <h6>Creado por <a target='black_' href="https://github.com/ronpanic">Martin Aguirre Dieguez</a></h6>
        <div className='footer-img'>
            <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" alt="" />
            <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" alt="" />
            <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png" alt="" />
            <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png" alt="" />
            <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png" alt="" />
            <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png" alt="" />
            <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png" alt="" />
            <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-shopping@2x.png" alt="" />
        </div>
    </div>
  );
}

export default Footer;
