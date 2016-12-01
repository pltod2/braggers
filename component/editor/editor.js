import React from 'react';
import ReactDOM from 'react-dom';
import {EditorState, convertToRaw} from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import { fromJS } from 'immutable';
import { mdToDraftjs, draftjsToMd } from 'draftjs-md-converter';
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import createStickerPlugin from 'draft-js-sticker-plugin';
import createEmojiPlugin from 'draft-js-emoji-plugin';

const mentionPlugin = createMentionPlugin();
const sideToolbarPlugin = createSideToolbarPlugin();
const { MentionSuggestions } = mentionPlugin;
const { SideToolbar } = sideToolbarPlugin;
const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions } = emojiPlugin;

const stickers = fromJS({
  data: {
    'b3aa388f-b9f4-45b0-bba5-d92cf2caa48b': {
      id: 'b3aa388f-b9f4-45b0-bba5-d92cf2caa48b',
      url: 'https://www.draft-js-plugins.com/images/unicorn-1.png',
    },
    'adec3f13-823c-47c3-b4d1-be4f68dd9d6d': {
      id: 'adec3f13-823c-47c3-b4d1-be4f68dd9d6d',
      url: 'https://www.draft-js-plugins.com/images/unicorn-6.png',
    },
  },
});

const stickerPlugin = createStickerPlugin({ stickers });
const plugins = [mentionPlugin, sideToolbarPlugin, stickerPlugin, emojiPlugin];
const StickerSelect = stickerPlugin.StickerSelect;

const mentions = fromJS([
  {
    name: 'Milan Zarkov',
    avatar: 'https://secure.gravatar.com/avatar/fa2eaf8896d6a96d3b47c61b75e361ca.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0016-32.png',
  },
  {
    name: 'Viktor Chobanov',
    avatar: 'https://avatars.slack-edge.com/2016-11-08/101016750193_7a187c57304e78e475c4_32.jpg',
  },
  {
    name: 'Emil Ruzhenov',
    avatar: 'https://secure.gravatar.com/avatar/5cdddaa9e029582b1400252510129786.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0017-32.png',
  },
  {
    name: 'Marin Vasilev',
    avatar: 'https://secure.gravatar.com/avatar/87f415341932d6f1f29099737239aeff.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0025-32.png',
  },
  {
    name: 'Alexandrina Karakehayova',
    avatar: 'https://secure.gravatar.com/avatar/b45566c68a01f81e850931106d4827f2.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0011-32.png',
  },
  {
    name: 'Meglena Lukanova',
    avatar: 'https://secure.gravatar.com/avatar/5a7895f3dc000b72d98e0065634b952e.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0021-32.png',
  },
  {
    name: 'Nataliya Georgieva',
    avatar: 'https://secure.gravatar.com/avatar/436ffdadb2d502dd38f7d6a0fb023b30.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0024-32.png',
  },
  {
    name: 'Guldjan Kupen',
    avatar: 'https://avatars.slack-edge.com/2016-10-28/97542896037_0c5b7ec9c48a7c1d6e16_32.jpg',
  },
  {
    name: 'Plamen Todorov',
    avatar: 'https://secure.gravatar.com/avatar/bd494533790f49d8b21ef4e93d3bd470.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0017-32.png',
  },
  {
    name: 'Vladimir Trifonov',
    avatar: 'https://avatars.slack-edge.com/2016-11-04/99884227040_b7406b24a539ad32fb4f_32.png',
  },
  {
    name: 'Toshko Popov',
    avatar: 'https://secure.gravatar.com/avatar/bce68aed35986cf14e648a58de4229db.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0012-32.png',
  }
  
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
    return <div> 
          <div style={styles.editor} onClick={this.focus}>
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
            <SideToolbar />
            <EmojiSuggestions />
          </div>
          <div>
            <StickerSelect editor={this} />
          </div>
          <button className="button float-right" type="submit">Post your statement</button>            
        </div>
  }
}