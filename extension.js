import { commands, StatusBarItem } from 'vscode';

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "novar" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    // let disposable = vscode.commands.registerCommand('extension.sayHello', function () {
    //     // The code you place here will be executed every time your command is executed

    //     var editor = vscode.window.activeTextEditor;
    //     if (!editor) return;

    //     var selection = editor.selection;
    //     var text = editor.document.getText(selection);

    //     // Display a message box to the user
    //     vscode.window.showInformationMessage('Selected characters: ' + text.length);

    //     // Display a message box to the user
    //     // vscode.window.showInformationMessage('Hello World!');
    // });

    let wordCounter = new wordCounter();
    let disposable = commands.registerCommand('extension.sayHello', () => {
        wordCounter.updateWordCount();
    })
    context.subscriptions.push(wordCounter);
    context.subscriptions.push(disposable);
}

function WordCounter(){
    
}

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;