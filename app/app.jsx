//http://samples.openweathermap.org/data/2.5/find?q=London&units=metric&appid=c146cba860498dfc97944b1190b5f6f2
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

//load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//custom css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
		</Route>
	</Router>,
	document.getElementById('app')
);