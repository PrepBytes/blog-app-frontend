import React, { Component } from 'react';
import axios from 'axios';
import appConfig from '../appConfig';

import Header from '../layout/Header';
import Masthead from './Masthead';
import TheLatest from './TheLatest';
import LatestArticles from './LatestArticles';
import TopPosts from './TopPosts';
import LatestStories from './LatestStories';

import './styles/homepage.css';

class Homepage extends Component {
	constructor(props, context) {
		super (props, context);
		this.state = {
			mastheadInfo: [],
			mastheadInfoFetched: false,
			theLatestArticles: [],
			theLatestArticlesFetched: false,
			latestArticles: [],
			latestArticlesFetched: false,
			topPosts: [],
			topPostsFetched: false,
			latestStories: [],
			latestStoriesFetched: false
		};

		this.fetchMastheadInfo = this.fetchMastheadInfo.bind(this);
		this.fetchTheLatestArticles = this.fetchTheLatestArticles.bind(this);
		this.fetchLatestArticles = this.fetchLatestArticles.bind(this);
		this.fetchTopPosts = this.fetchTopPosts.bind(this);
		this.fetchLatestStories = this.fetchLatestStories.bind(this);
	}

	componentDidMount() {
		this.fetchMastheadInfo();
		this.fetchTheLatestArticles();
		this.fetchLatestArticles();
		this.fetchTopPosts();
		this.fetchLatestStories();
	}

	fetchMastheadInfo() {
		axios.get(`${appConfig.serverUrl}/get-masthead-info`)
			.then(response => {
				this.setState({
					mastheadInfoFetched: true,
					mastheadInfo: response.data
				});
			})
			.catch(err => console.error(err));
	}

	fetchTheLatestArticles() {
		axios.get(`${appConfig.serverUrl}/get-the-latest-articles`)
			.then(response => {
				this.setState({
					theLatestArticlesFetched: true,
					theLatestArticles: response.data
				});
			})
			.catch(err => console.error(err));
	}

	fetchLatestArticles() {
		axios.get(`${appConfig.serverUrl}/get-latest-articles`)
			.then(response => {
				this.setState({
					latestArticlesFetched: true,
					latestArticles: response.data
				});
			})
			.catch(err => console.error(err));
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

	fetchLatestStories() {
		axios.get(`${appConfig.serverUrl}/get-latest-stories`)
			.then(response => {
				this.setState({
					latestArticlesFetched: true,
					latestArticles: response.data
				});
			})
			.catch(err => console.error(err));
	}

	render() {
		return (
			<div className="homepage">
				<Header />
				<Masthead articles={this.state.mastheadInfo} />
				<TheLatest articles={this.state.theLatestArticles} />
				<div className="homepage__latest-and-top-articles">
					<h1 className="homepage__latest-and-top-articles-heading">Latest Articles</h1>
					<div className="homepage__latest-and-top-articles-container">
						<LatestArticles articles={this.state.latestArticles} />
						<TopPosts articles={this.state.topPosts} />
					</div>
				</div>
				<LatestStories articles={this.state.latestArticles}/>
			</div>
		)
	}
}

export default Homepage;