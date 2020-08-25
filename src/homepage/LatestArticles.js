import React from 'react';
import { Link } from 'react-router-dom';
import Utils from '../utils';

import './styles/latest-articles.css';

const LatestArticle = props => {
	const { item } = props;

	return <>
		<div className="latest-article__horizontal-ruler"></div>
		<Link to={`/${item.category.toLowerCase()}/${item.id.toLowerCase()}`}>
			<div className="latest-article">
				<div className="latest-article__info">
					<div className="latest-article__image" style={{ background: `url(${item.img})` }}></div>
					<div className="latest-article__details">
						<h1 className="latest-article__heading">{item.heading}</h1>
						<p className="latest-article__desc">{item.desc}</p>
						<div className="latest-article__category-and-time">
							<span className="latest-article__category">{item.category}</span> / <span className="latest-article__time">{item.date}</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	</>;
}

const LatestArticles = props => {
	let { articles } = props;
	articles = !Utils.isEmpty(articles) && Array.isArray(articles) ? articles : [];

	return (
		<div className="latest-articles">
			{articles.map(article => <LatestArticle item={article} />)}
		</div>
	)
}

export default LatestArticles;