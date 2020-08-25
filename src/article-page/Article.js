import React from 'react';
import MarkdownRender from "@nteract/markdown";

import AuthorCard from './AuthorCard';
import SocialShare from './SocialShare';

import './styles/article.css';

import ClapsSvg from '../assets/clap.svg';

const ClapsAndSocialShare = props => {
	const { article } = props;

	return <div className="claps-and-social-share-container">
		<div className="claps-and-social-share">
			<div className="claps-container">
				<img src={ClapsSvg} className="claps-container__image" alt="Claps" srcset="" />
				<span className="claps-container__claps">{article.claps}</span>
			</div>
			<SocialShare article={article} />
		</div>
	</div>;
};

const Article = props => {
	return (
		<div className="article-container">
			<ClapsAndSocialShare article={props.article} />
			<div className="article">
				<h1 className="article__article-heading">{props.article.heading}</h1>
				<div className="article__author-and-social-share">
					<AuthorCard article={props.article} />
				</div>
				<MarkdownRender source={props.article.content} />
				<div className="article__horizontal-ruler"></div>
				<AuthorCard article={props.article} withWrittenBy />
				<div className="article__horizontal-ruler"></div>
			</div>
		</div>
	)
}

export default Article;