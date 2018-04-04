# noVar

My first vscode extension inspired by the DANGER! DANGER WILL ROBINSON! slides from my Web programming class. The slides consist of a bunch of quirks with JavaScript so I decided to make a little vscode extension to warn me about them. At the moment the extension is just a reminder to use let and const instead of var since ES6 was released.

## Features

The extension will warn you of using var instead of let or const which is reccomended as of ES6.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: enable/disable this extension
* `myExtension.thing`: set to `blah` to do something

## Roadmap

* [ ] Allow quick-fix suggestions that fix the warnings
* [ ] Add warnings for using var vs let in for loops will a little info on its behaviour
* [ ] Warnings for using this.x on the global object
* [ ] Reminder to end lines with semi colons even if they are 'optional'
* [ ] Warning for using for in loop over characters of a string

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...


**Enjoy!**
