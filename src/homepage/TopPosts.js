import React from 'react';
import { Link } from 'react-router-dom';
import Utils from '../utils';

import './styles/top-posts.css';

const TopPost = props => {
	const { item, index } = props;

	return <>
		{!(index === 0) && <div className="top-post__horizontal-ruler"></div>}
		<Link to={`/${item.category.toLowerCase()}/${item.id.toLowerCase()}`}>
			<div className="top-post">
				<div className="top-post__info">
					<div className="top-post__image" style={{background: `url(${item.img})`}}></div>
					<div className="top-post__details">
						<h1 className="top-post__heading">{item.heading}</h1>
						<p className="top-post__number">{index + 1}</p>
						<div className="top-post__category-and-time">
							<span className="top-post__category">{item.category}</span> / <span className="top-post__time">{item.date}</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	</>;
};

const TopPosts = props => {
	let { articles } = props;
	articles = !Utils.isEmpty(articles) && Array.isArray(articles) ? articles : [];

	return (
		<div className="top-posts">
			<div className="top-posts__heading">Top Post</div>
			{articles.map((article, index) => <TopPost item={article} index={index} />)}
		</div>
	)
}

export default TopPosts;