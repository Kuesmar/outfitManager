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
        <div className="flex p-5 justify-between items-center bg-neutral-50/70 dark:bg-default-100/90">
            <div>
                <b>{t("Footer.label-company")}</b>
            </div>
            <div>
                <b>{t("Footer.label-copyright")}</b>
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
