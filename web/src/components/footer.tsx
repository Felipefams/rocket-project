import { useTranslation } from "react-i18next";

export function Footer() {
    const { t } = useTranslation();
    return (
        <>
            <footer className="footer">
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <ul className="menu">
                    <li className="menu__item"><a className="menu__link" href="#">{t("home")}</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">{t("about")}</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">{t("services")}</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">{t("team")}</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">{t("contact")}</a></li>

                </ul>
                <p>&copy;2023 Felipe Morais | {t("all-rights-reserved")}</p>
            </footer>
        </>
    )
}