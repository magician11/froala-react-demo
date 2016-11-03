import React, { Component } from 'react';
import FroalaEditor from 'react-froala-wysiwyg';

import styling from '../styling/main.scss';

// Require Editor JS files.
import '../../node_modules/froala-editor/js/froala_editor.pkgd.min.js';
import '../../node_modules/froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
require('../../node_modules/font-awesome/css/font-awesome.css');

class RichTextEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      model: '',
    };

    this.handleModelChange = this.handleModelChange.bind(this);
  }

  handleModelChange(model) {
    this.setState({ model });
  }

  render() {
    const config = {
      placeholderText: 'Edit Your Content Here!',
    };

    return (
      <div className={styling['your-component']}>
        <h1>Froala Demo</h1>
        <hr />
        <h2>The Editor</h2>
        <FroalaEditor
          config={config}
          model={this.state.model}
          onModelChange={this.handleModelChange}
        />
        <h2>The Model State</h2>
        <code>{this.state.model}</code>
      </div>
    );
  }
}

export default RichTextEditor;
