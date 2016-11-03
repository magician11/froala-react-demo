import React from 'react';
import ReactDOM from 'react-dom';
import RichTextEditor from './components/index';

// remove margins
document.body.style.margin = 0;

ReactDOM.render(<RichTextEditor />, document.getElementById('app'));
