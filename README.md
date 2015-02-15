### gpgbrowser

A fork of my project [`browser`](https://github.com/5paceManSpiff/browser), a reference implementation of the [`jsb`](https://github.com/5paceManSpiff/jsb) framework.  gpgbrowser implements a super hacky wrapper for the gpg command line interface, with the hope of inspiring others to contribute native browser encryption features like this in a less crappy way.

##### dependencies

- atom-shell
- jsb
- gpg command line interface with a couple imported public keys

##### installation

`git clone https://github.com/5paceManSpiff/gpgbrowser`<br>
`cd gpgbrowser`<br>
`npm install`<br>

##### execution

`atom-shell ./`

##### usage

Just input the recipient email into the `email` text field, highlight text in a text box and hit encrypt.
If all goes well your selected text should be replaced with it's encrypted counterpart!
