import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Editor, EditorState } from 'draft-js';

const styles = {
    editor: {
        border: '1px solid #ccc',
        cursor: 'text',
        minHeight: 80,
        padding: 10,
    }
};
export class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            editorState: EditorState.createEmpty()
        };
        this.onChange = (editorState) => this.setState({ editorState });
    }
    render() {
        const {editorState} = this.state;
        return <div style={styles.editor}>
                    <Editor editorState={editorState} onChange={this.onChange} />
                </div>
    }
}