/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import * as path from 'path';

import { workspace, ExtensionContext, languages, TextDocument, CodeActionContext, Range, CodeActionProvider } from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient';

function changeToLet(text:string): string {
	return text.replace('var', 'let');
}

function changeToConst(text:string): string {
	return text.replace('var', 'const');
}

// function provideCodeActions (document: TextDocument, range: Range, codeActionContext: CodeActionContext) {
// 	const codeActions:CodeActionProvider[] = [];	// Try map maybe???
// 	const diagnostics = codeActionContext.diagnostics || [];
// 	diagnostics.filter(function filterDiagnostic (diagnostic) {
// 		return diagnostic.source === 'noVar';
// 	}).forEach(function forDiagnostic (diagnostic) {
// 		const ruleNameAlias = diagnostic.message.split(":")[0];
// 		const ruleName = ruleNameAlias.split("/")[0];
// 		codeActions.push({
// 			title: 'Click to change to let',
// 			command: changeToLet,
// 			arguments: [
// 				diagnostic.range,
// 				ruleName
// 			]
// 		});
// 		codeActions.push({
// 			title: 'Click to change to const',
// 			command: changeToConst,
// 			arguments: [
// 				diagnostic.range,
// 				ruleName
// 			]
// 		});
// 	});
// 	return codeActions;
// }


export function activate(context: ExtensionContext) {

	// The server is implemented in node
	let serverModule = context.asAbsolutePath(path.join('server', 'server.js'));
	// The debug options for the server
	let debugOptions = { execArgv: ["--nolazy", "--inspect=6009"] };
	
	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	let serverOptions: ServerOptions = {
		run : { module: serverModule, transport: TransportKind.ipc },
		debug: { module: serverModule, transport: TransportKind.ipc, options: debugOptions }
	}
	
	// Options to control the language client
	let clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents
		documentSelector: [{scheme: 'file', language: 'javascript'}, {scheme: 'file', language: 'typescript'}, {scheme: 'file', language: 'coffeescript'}],
		synchronize: {
			// Synchronize the setting section 'languageServerExample' to the server
			configurationSection: 'novar',
			// Notify the server about file changes to '.clientrc files contain in the workspace
			fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
		}
	}
	// Register CodeActionsProvider
	// context.subscriptions.push(
	// 	languages.registerCodeActionsProvider('javascript', {
	// 		"provideCodeActions": provideCodeActions
	// 	})
	// );
	
	// Create the language client and start the client.
	let disposable = new LanguageClient('novar', 'Language Server Example', serverOptions, clientOptions).start();
	
	// Push the disposable to the context's subscriptions so that the 
	// client can be deactivated on extension deactivation
	context.subscriptions.push(disposable);
}
