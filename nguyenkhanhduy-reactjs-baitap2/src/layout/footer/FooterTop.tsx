import Clock from "../../shared/assets/icon/Clock";
import MailSolidIcon from "../../shared/assets/icon/MailSolidIcon";
import Vector from "../../shared/assets/icon/Phone";

function FooterTop() {
    return (
        <article className="footer__top">
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-3">
                    <div className="col b-r py-4">
                        <div className="footer__top-card">
                            <span className="footer__top-card-icon">
                                <MailSolidIcon />
                            </span>
                            <span className="footer__top-card-title mx-2">
                                Email
                            </span>
                            <span className="footer__top-card-des">
                                contact@aegona.com
                            </span>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-lg-center justify-content-start b-r py-4">
                        <div className="footer__top-card">
                            <span className="footer__top-card-icon">
                                <Vector />
                            </span>
                            <span className="footer__top-card-title mx-2">
                                Hotline
                            </span>
                            <span className="footer__top-card-des">
                                1900 2021
                            </span>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-lg-end justify-content-start py-4">
                        <div className="footer__top-card">
                            <span className="footer__top-card-icon">
                                <Clock />
                            </span>
                            <span className="footer__top-card-title mx-2">
                                Gi??? l??m vi???c
                            </span>
                            <span className="footer__top-card-des">
                                Th??? 2 - Th??? 6 : 08:00 - 17:00
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default FooterTop;