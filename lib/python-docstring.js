'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'python-docstring:add': () => this.add()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  add() {
    const editor = atom.workspace.getActiveTextEditor()
    if (editor) {
      var pos = editor.getCursorBufferPosition();
      var column = pos.column;

      editor.insertText('"""\n');
      editor.insertText(' '.repeat(column) + 'A short description.\n');
      editor.insertText('\n');
      editor.insertText(' '.repeat(column) + 'A bit longer description.\n');
      editor.insertText('\n');
      editor.insertText(' '.repeat(column) + 'Parameters\n----------\n');
      editor.insertText(' '.repeat(column) + 'variable : type\n    description\n');
      editor.insertText('\n');
      editor.insertText(' '.repeat(column) + 'Returns\n-------\n');
      editor.insertText(' '.repeat(column) + 'variable : type\n    description\n');
      editor.insertText('\n');
      editor.insertText(' '.repeat(column) + 'Raises\n------\n');
      editor.insertText(' '.repeat(column) + 'Exception\n    description\n');
      editor.insertText('\n');
      editor.insertText(' '.repeat(column) + 'Example\n-------\n');
      editor.insertText(' '.repeat(column) + '>>> code\n');
      editor.insertText(' '.repeat(column) + '"""\n');
    }
  }

};
