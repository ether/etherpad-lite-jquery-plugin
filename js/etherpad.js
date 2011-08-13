(function( $ ){

  $.fn.pad = function( options ) {

    var settings = {
      'host'		 : 'http://10.0.0.55:9001',
      'baseUrl'		 : '/p/',
      'showControls'     : false,
      'showChat'	 : false,
      'showLineNumbers'  : false,
      'userName'	 : 'unnamed'
    };

    if ( options ) { 
      $.extend( settings, options );
    }
    var iFrameLink = '<iframe src="'+settings.host+settings.baseUrl+settings.padId+'?showControls='+settings.showControls+'&showChat='+settings.showChat+'&showLineNumbers='+settings.showLineNumbers+'"></iframe>';
    console.log(iFrameLink);
    this.html(iFrameLink);
  };
})( jQuery );
