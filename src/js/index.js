//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
import {SimpleCounter} from './component/simple-counter.jsx';

//render your react application
ReactDOM.render(
    <SimpleCounter />,
    document.querySelector('#app')
);