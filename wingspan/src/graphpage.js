import { Component } from "react";
import { Route } from 'react-router-dom';

import SearchBar from './searchbar.js';
import Logo from './logo.js';
import Header from './header.js';
import Graph from './graph.js';
import TopTweets from './toptweets.js';

import './graphpage.css';
import './background.css';

const result = {top_tweets: [{id:"20", engagement:10}, {id:"1460657276142895123", engagement:20}],
                scores: [{timestamp: '2021-11-11', score: 50}, 
                         {timestamp: '2021-11-12', score: 11},
                         {timestamp: '2021-11-13', score: 20},
                         {timestamp: '2021-11-14', score: 40},
                         {timestamp: '2021-11-15', score: 100},
                         {timestamp: '2021-11-16', score: 7},
                         {timestamp: '2021-11-17', score: 30},
                         {timestamp: '2021-11-18', score: 70},
                         {timestamp: '2021-11-19', score: 0},
                         {timestamp: '2021-11-20', score: 90}]};

class GraphPage extends Component 
{
	/* Render the graph page, add page url with query once data is retrieved form Express server */
	render() 
	{
		return (
				<div>
					<nav className = "querysearchbarcontainer">
						<SearchBar/>
					</nav>
					<div className = "logocontainer">
                            <Logo/>
					</div>
					<div className = "headercontainer">
						<Header/> 
					</div>
					<div className = "graphcontainer">
						<Graph data={result.scores}/>
					</div>
                    <div className = "tweetcontainer">
                        <TopTweets ids={result.top_tweets}/>
                    </div>
					<Route exact path='/query'/>
				</div>
		);
	}
}

export default GraphPage;
