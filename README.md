     <h1>Etherpad jQuery Plugin Example</h1>

        # Description

	This plugin easily allows you to add a pad from Etherpad in a web page.  It injects the pad contents into a div using iframes.

        # Usage
        <p>Include jQuery.js, include etherpad.js</p>

        <h2>Example #1: Sets the pad id and puts the pad in the div</h2>
        <pre>$('#examplePadBasic').pad({'padId':'test'});</pre>
        <div id="examplePadBasic"></div>

        <h2>Example #2: Sets the pad id, some more parameters and puts the pad in the div</h2>
        <pre>$('#examplePadBasic').pad({'padId':'test','showChat':'true'});</pre>
        <div id="examplePadIntense"></div>

        # Available options and parameters
        <ul>
               'host'             : 'http://beta.etherpad.org', // the host and port of the Etherpad instance, by default the foundation will host your pads for you
               'baseUrl'          : '/p/', // The base URL of the pads
               'showControls'     : false, // If you want to show controls IE bold, italic etc.
               'showChat'         : false, // If you want to show the chat button or not
               'showLineNumbers'  : false, // If you want to show the line numbers or not
               'userName'         : 'unnamed' // The username you want to pass to the pad.
        </ul>

        <script type="text/javascript">
        // The most basic example
        $('#examplePadBasic').pad({'padId':'test'}); // sets the pad id and puts the pad in the div

        // A slightly more intense example
        $('#examplePadIntense').pad({'padId':'test2','showChat':'true'}); // sets the pad id and puts the pad in the div
        </script>



# Copyright
jQuery Etherpad plugin written by John McLear (c) Primary Technology 2011
Feel free to re-use, distribute, butcher, edit and whatever else you want.
It's under the Apache licence.
