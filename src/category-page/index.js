import React, { Component } from 'react';
import axios from 'axios';
import appConfig from '../appConfig';

import Header from '../layout/Header';
import CategoryStories from './CategoryStories';
import TopPosts from '../homepage/TopPosts';

import './styles/category-page.css';

class CategoryPage extends Component {
	constructor(props, context) {
		super (props, context);
		this.state = {
			category: undefined,
			categoryArticles: [],
			categoryArticlesFetched: false,
			topPosts: [],
			topPostsFetched: false
		};

		this.fetchCategoryArticles = this.fetchCategoryArticles.bind(this);
		this.fetchTopPosts = this.fetchTopPosts.bind(this);
	}

	componentDidMount() {
		let category = this.props.match.params.category;
		this.setState({
			category: category
		}, () => {
			this.fetchCategoryArticles();
			this.fetchTopPosts();
		});
	}

	fetchTopPosts() {
		axios.get(`${appConfig.serverUrl}/get-top-posts`)
			.then(response => {
				this.setState({
					topPostsFetched: true,
					topPosts: response.data
				});
			})
			.catch(err => console.error(err));
	}

	fetchCategoryArticles() {
		axios.post(`${appConfig.serverUrl}/get-articles-by-category`, { category: this.state.category })
			.then(response => {
				this.setState({
					categoryArticlesFetched: true,
					categoryArticles: response.data
				});
			})
			.catch(err => console.error(err));
	}

	render() {
		return (
			<div className="category-page">
				<Header />
				<div className="category-page__category-list-and-top-post-container">
					<CategoryStories articles={this.state.categoryArticles} category={this.state.category} />
					<TopPosts articles={this.state.topPosts} />
				</div>
			</div>
		)
	}
}

export default CategoryPage;