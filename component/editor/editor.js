import React from 'react';
import ReactDOM from 'react-dom';
import {EditorState, convertToRaw} from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import { mdToDraftjs, draftjsToMd } from 'draftjs-md-converter';
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';

const mentionPlugin = createMentionPlugin();
const { MentionSuggestions } = mentionPlugin;
const plugins = [mentionPlugin];
import { fromJS } from 'immutable';

const mentions = fromJS([
  {
    name: 'Matthew Russell',
    link: 'https://twitter.com/mrussell247',
    avatar: 'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
  },
  {
    name: 'Julian Krispel-Samsel',
    link: 'https://twitter.com/juliandoesstuff',
    avatar: 'https://pbs.twimg.com/profile_images/477132877763579904/m5bFc8LF_400x400.png',
  },
  {
    name: 'Jyoti Puri',
    link: 'https://twitter.com/jyopur',
    avatar: 'https://pbs.twimg.com/profile_images/705714058939359233/IaJoIa78_400x400.jpg',
  },
  {
    name: 'Max Stoiber',
    link: 'https://twitter.com/mxstbr',
    avatar: 'https://pbs.twimg.com/profile_images/763033229993574400/6frGyDyA_400x400.jpg',
  },
  {
    name: 'Nik Graf',
    link: 'https://twitter.com/nikgraf',
    avatar: 'https://pbs.twimg.com/profile_images/535634005769457664/Ppl32NaN_400x400.jpeg',
  },
  {
    name: 'Pascal Brandt',
    link: 'https://twitter.com/psbrandt',
    avatar: 'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png',
  },
]);

const styles = {
  editor: {
    boxSizing: "border-box",
    border: "1px solid #ddd",
    cursor: "text",
    padding: "16px",
    borderRadius: "2px",
    marginBottom: "2em",
    boxShadow: "inset 0px 1px 8px -3px #ABABAB",
    background: "#fefefe",
    minHeight: "140px"
  }
};

export default class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      suggestions: mentions
    };
    this.onChange = (editorState) => {
      
      this.setState({editorState});
      this.props.onChangeHandler(draftjsToMd(convertToRaw(editorState.getCurrentContent())));
    }
  }
  
  onSearchChange = ({ value }) => {
    this.setState({
      suggestions: defaultSuggestionsFilter(value, mentions),
    });
  }

  onAddMention = () => {
    // get the mention object selected
  }

  focus = () => {
    this.editor.focus();
  }

  render() {
    const {editorState} = this.state;
    return <div style={styles.editor} onClick={this.focus}>
            <Editor 
              editorState={editorState} 
              onChange={this.onChange} 
              plugins={plugins} 
              ref={(element) => { this.editor = element; }} />
            <MentionSuggestions
              onSearchChange={this.onSearchChange}
              suggestions={this.state.suggestions}
              onAddMention={this.onAddMention}
            />
          </div>
  }
}