import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class Highlighter extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  }

  static defaultProps = {
    language: null
  };

  render() {
    const { language, value } = this.props;
    console.log('pr', this.props)
    return (
      <SyntaxHighlighter language={language} style={docco}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default Highlighter;