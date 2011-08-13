(function( $ ){

  $.fn.pad = function( options ) {

    var settings = {
      'host'		 : 'http://beta.etherpad.org',
      'baseUrl'		 : '/p/',
      'showControls'     : false,
      'showChat'	 : false,
      'showLineNumbers'  : false,
      'userName'	 : 'unnamed',
      'useMonospaceFont' : false
    };

    if ( options ) { 
      $.extend( settings, options );
    }
    var iFrameLink = '<iframe src="'+settings.host+settings.baseUrl+settings.padId+'?showControls='+settings.showControls+'&showChat='+settings.showChat+'&showLineNumbers='+settings.showLineNumbers+'&useMonospaceFont='settings.useMonospaceFont+'"></iframe>';
    console.log(iFrameLink);
    this.html(iFrameLink);
  };
})( jQuery );
