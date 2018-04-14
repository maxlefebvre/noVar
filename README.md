# noVar

My first vscode extension inspired by the DANGER! DANGER WILL ROBINSON! slides from my Web programming class. The slides consist of a bunch of quirks with JavaScript so I decided to make a little vscode extension to warn me about them. At the moment the extension is just a reminder to use let and const instead of var since ES6 was released.

## Features

Currently the extension will only warn you of using var instead of let or const which is reccomended as of ES6.

For example if there is an image subfolder under your extension project workspace:


## Roadmap

* [x] Enable for typescript and coffeescript
* [ ] Allow quick-fix suggestions that fix the warnings
* [ ] Add warnings for using var vs let in for loops will a little info on its behaviour
* [ ] Warnings for using this.x on the global object
* [ ] Reminder to end lines with semi colons even if they are 'optional'
* [ ] Warning for using for in loop over characters of a string


**Enjoy!**
