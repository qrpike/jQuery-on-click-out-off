

n

  (function( $ ) {
    $.fn.clickOut = function( callback ) { 
			var $t 		= this,
				doc 	= $(document),
				hide 	= function(event) { 
				if (!$(event.originalEvent.target).parents('#'+$t.attr('id')).size())
					callback.call($t);
				else
					doc.one("click",hide);
			};
			doc.one("click", hide); 
		};
	})( jQuery );
