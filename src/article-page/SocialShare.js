import React, { useState } from 'react';

import ShareIcon from '../assets/share.svg';
import facebookIcon from '../assets/share/facebook.svg';
import twitterIcon from '../assets/share/twitter.svg';
import whatsappIcon from '../assets/share/whatsapp.svg';
import linkedinIcon from '../assets/share/linkedin.svg';
import telegramIcon from '../assets/share/telegram.svg';

import './styles/social-share.css';

const getSocialPlatforms = (url, description) => [
	{
		name: "Facebook",
		icon: facebookIcon,
		url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(description)}`
	},
	{
		name: "Twitter",
		icon: twitterIcon,
		url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${description} ${url}`)}`
	},
	{
		name: "WhatsApp",
		icon: whatsappIcon,
		url: `whatsapp://send?text=${encodeURIComponent(`${description} ${url}`)}`
	},
	{
		name: "LinkedIn",
		icon: linkedinIcon,
		url: `http://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&summary=quote=${encodeURIComponent(description)}`
	},
	{
		name: "Telegram",
		icon: telegramIcon,
		url: `https://telegram.me/share/url?text=${encodeURIComponent(description)}&url=${encodeURIComponent(url)}`
	}
];

const SocialShare = props => {
	const { article } = props;

	const socialShareComponents = getSocialPlatforms(window.location.href, article.desc);

	const [socialShare, setSocialShare] = useState(false);

	let divSocialShare;
	let divSocialShareImage;

	if (socialShare) {
		divSocialShare = {
			display: "block",
			width: "min-content"
		}
		divSocialShareImage = {
			display: "none",
		}
	} else {
		divSocialShare = {
			display: "none",
			width: "0%"
		}
		divSocialShareImage = {
			display: "block",
		}
	}

	return (
		<div className="social-share"
			onClick={() => setSocialShare(true)}>
			<img className="social-share__link-icons" alt="Share" src={ShareIcon} style={divSocialShareImage} />
			<div className="social-share__share-links-container" style={divSocialShare}>
				{socialShareComponents.map(({ name, icon, url }) => <a href="/#" rel="noopener noreferrer" onClick={(e) => {
						e.preventDefault();
						e.stopPropagation();

						setSocialShare(false);
						window.open(url, '_blank');
					}}>
						<img className="social-share__link-icons" src={icon} alt={name} />
					</a>
				)}
			</div>
		</div>
	)
}

export default SocialShare;