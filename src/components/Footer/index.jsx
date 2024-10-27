import React from "react";
import { useTranslation } from "react-i18next";
import {
    SlSocialGithub,
    SlSocialInstagram,
    SlSocialLinkedin,
    SlSocialTwitter,
    SlSocialYoutube,
} from "react-icons/sl";

const Footer = () => {
    const { t } = useTranslation("translation");

    return (
        <div className="flex p-5 justify-between items-center dark:bg-default-100/90">
            <div>
                <p>{t("Footer.label-company")}</p>
            </div>
            <div>
                <p>{t("Footer.label-copyright")}</p>
            </div>
            <div className="flex justify-end gap-5">
                <SlSocialGithub data-testid='icon-github'/>
                <SlSocialInstagram data-testid='icon-instagram'/>
                <SlSocialLinkedin data-testid='icon-linkedin'/>
                <SlSocialTwitter data-testid='icon-twitter'/>
                <SlSocialYoutube data-testid='icon-youtube'/>
            </div>
        </div>
    );
};

export default Footer;
