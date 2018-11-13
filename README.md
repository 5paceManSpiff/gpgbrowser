### gpgbrowser

This project is no longer maintained, but I think it's a neat idea, so I'm keeping it up on github.

This project uses the Node.js library `atom-shell` (now known as `electron`) to create a browser window with a custom chrome. The chrome has an interface to encrypt highlighted text using public keys created by the user. I wrote a Node.js wrapper, [`gpgwrap`](https://github.com/alspore/gpgwrap), around the gpg cli to expose this functionality to Node.js.

![demo gif](https://github.com/5paceManSpiff/gpgbrowser/raw/master/demo.gif)

Just select your recipient's email address from the dropdown window, highlight the desired plaintext and hit encrypt!

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

Just select recipient email from the list of recipients, highlight text in a text box and hit encrypt.
If all goes well your selected text should be replaced with it's encrypted counterpart!
