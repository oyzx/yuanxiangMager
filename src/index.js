import React from 'react';
import {render} from 'react-dom';
import './index.css';
import RouteMap from './RouteMap';
import { hashHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

render(
	<RouteMap history={hashHistory} />, 
	document.getElementById('root'));
registerServiceWorker();
