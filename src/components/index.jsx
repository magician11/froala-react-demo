import React, { Component } from 'react';
import FroalaEditor from 'react-froala-wysiwyg';

import styling from '../styling/main.scss';

// Require Editor JS files.
import '../../node_modules/froala-editor/js/froala_editor.pkgd.min.js';
import '../../node_modules/froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
require('../../node_modules/font-awesome/css/font-awesome.css');

class RichTextEditor extends Component {
  render() {
    const content = <h1>Froala Demo</h1>;

    return (
      <div className={styling['your-component']}>
        {content}
        <FroalaEditor />
      </div>
    );
  }
}

export default RichTextEditor;
