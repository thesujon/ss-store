import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

import './SocialFollow.css';

export default function SocialFollow() {
    return (
        <div className="social-container">
            <a className="youtube social" href="https://www.youtube.com">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a className="facebook social" href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a className="twitter social" href="https://www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a className="instagram social" href="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
    );
}
