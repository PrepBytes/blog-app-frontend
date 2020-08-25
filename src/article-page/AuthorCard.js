import React from 'react';

import './styles/author-card.css';

const AuthorCard = props => {
	return (
		<div className="author-card">
			<div className="author-card__author-image-container">
				<img className="author-card__author-image" src={props.article.author_img} alt={props.article.author} srcset="" />
			</div>
			<div className="author-card__author-name-and-posted-on">
				{props.withWrittenBy && <span className="author-card__writted-by-text">WRITTEN BY</span>}
				<span className="author-card__author-name">{props.article.author}</span>
				<span className="author-card__posted-on">{props.article.date}</span>
			</div>
		</div>
	)
}

export default AuthorCard;