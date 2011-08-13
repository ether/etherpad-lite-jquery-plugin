(function( $ ){

  $.fn.pad = function( options ) {
    var settings = {
      'host'		 : 'http://10.0.0.55:9001',
      'baseUrl'		 : '/p/',
      'showControls'     : false,
      'showChat'	 : false,
      'showLineNumbers'  : false,
      'userName'	 : 'unnamed',
      'useMonospaceFont' : false
    };

    if ( options != 'getContents' )
    {
      if ( options ) 
      { 
        $.extend( settings, options );
      }
      var iFrameLink = '<iframe src="'+settings.host+settings.baseUrl+settings.padId+'?showControls='+settings.showControls+'&showChat='+settings.showChat+'&showLineNumbers='+settings.showLineNumbers+'&useMonospaceFont='settings.useMonospaceFont+'"></iframe>';
      console.log(iFrameLink);
      this.html(iFrameLink);
    }

    if (options == 'getContents')
    {
      var url = $(this).get(0).location.href

      // get the contents of this.
      // get the link of the iframe using host + pathanme

    }
  };
})( jQuery );
