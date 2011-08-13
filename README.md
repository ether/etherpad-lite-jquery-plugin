# Description

The Etherpad jQuery Plugin Example plugin easily allows you to add a pad from Etherpad in a web page.  It injects the pad contents into a div using iframes.

# Usage
<p>Include jQuery.js, include etherpad.js, assign a pad to a div.  If you get confused look at the examples in index.html</p>

<h2>Example #1: Sets the pad id and puts the pad in the div</h2>
<pre>$('#examplePadBasic').pad({'padId':'test'});</pre>
<div id="examplePadBasic"></div>

<h2>Example #2: Sets the pad id, some more parameters and puts the pad in the div</h2>
<pre>$('#examplePadBasic').pad({'padId':'test','showChat':'true'});</pre>
<div id="examplePadIntense"></div>

# Available options and parameters
<pre>
'host'     : 'http://beta.etherpad.org', // the host and port of the Etherpad instance, by default the foundation will host your pads for you
'baseUrl'  : '/p/', // The base URL of the pads
'showControls'     : false, // If you want to show controls IE bold, italic etc.
'showChat' : false, // If you want to show the chat button or not
'showLineNumbers'  : false, // If you want to show the line numbers or not
'userName' : 'unnamed' // The username you want to pass to the pad.
</pre>

# Copyright
jQuery Etherpad plugin written by John McLear (c) Primary Technology 2011<br/>
Feel free to re-use, distribute, butcher, edit and whatever else you want.
It's under the Apache licence.
