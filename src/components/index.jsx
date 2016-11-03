import React, { Component } from 'react';
import FroalaEditor from 'react-froala-wysiwyg';

import styling from '../styling/main.scss';

// Require Editor JS files.
import '../../lib/froala-editor/js/froala_editor.pkgd.min.js';
import '../../lib/froala-editor/css/froala_editor.pkgd.min.css';

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
    // docs at https://www.froala.com/wysiwyg-editor/examples/custom-toolbar
    const editorOptions = ['bold', 'italic', 'underline', 'fontSize', 'color'];
    const config = {
      placeholderText: 'Add your answer here.',
      toolbarButtons: editorOptions,
      toolbarButtonsMD: editorOptions,
      toolbarButtonsSM: editorOptions,
      toolbarButtonsXS: [],
      toolbarInline: true,
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
