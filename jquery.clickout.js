/*
 * jQuery On Click Out / Off
 *
 * Simplified BSD License (@see License)
 * @author        Quinton Pike
 * @copyright     (c) 2013 Quinton Pike
 * Usage: $(elem).clickOut( callback ) (@see Readme.md)
 * @version 0.0.1
 * @requires jQuery
 */
 
 
(function( $ ) {
	$.fn.clickOut = function( callback ) { 
		var $t 		= this,
		doc 		= $(document),
		hide 		= function(event) { 
		if (!$(event.originalEvent.target).parents('#'+$t.attr('id')).size())
			callback.call($t);
		else
			doc.one("click",hide);
		};
		doc.one("click", hide); 
	};
})( jQuery );
