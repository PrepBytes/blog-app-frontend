import React from 'react';
import { Link } from 'react-router-dom';
import Utils from '../utils';
import AuthorCard from './AuthorCard';

import './styles/similar-articles.css';

const LetestStoriesCard = props => {
	const { item } = props;

	return <Link to={`/${item.category.toLowerCase()}/${item.id.toLowerCase()}`} className="similar-article__card">
		<div>
			<div className="similar-article__card-bottom">
				<div className="latest-article__image" style={{ background: `url(${item.img})` }}></div>
				<h2 className="similar-article__card-heading">{item.heading}</h2>
				<AuthorCard article={item}/>
			</div>
		</div>
	</Link>;
};

const LetestStories = props => {
	let { articles } = props;
	articles = !Utils.isEmpty(articles) && Array.isArray(articles) ? articles : [];

	return (
		<div className="similar-articles">
			<h1 className="similar-articles__heading">Similar Articles</h1>
			<div className="similar-articles__horizontal-ruler"></div>
			<div className="similar-articles__cards-container">
				{articles.map(article => <LetestStoriesCard item={article} />)}
			</div>
			<div className="similar-articles__horizontal-ruler"></div>
		</div>
	)
}

export default LetestStories;