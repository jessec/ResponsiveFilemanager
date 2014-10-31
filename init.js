





function loadCss(url){
	var link = document.createElement("link");
	link.setAttribute("rel","stylesheet");
	link.setAttribute("type","text/css");
	link.setAttribute("href",url);
	document.getElementsByTagName("head")[0].appendChild(link);
}
loadCss("assets/bootstrap.min.css");
loadCss("assets/bootstrap-responsive.min.css");
loadCss("assets/animate.min.css");
loadCss("assets/style.css");
loadCss("assets/style.css");
loadCss("assets/jquery.fancybox-1.3.4.css");
loadCss("assets/font-awesome.min.css");
loadCss("assets/prettyPhoto.css");


function  initMyPage(){

jQuery(document).ready(function($) {
			$('.iframe-btn').fancybox({
				'width' : 880,
				'height' : 570,
				'type' : 'iframe',
				'autoScale' : false
			});

			// Handles message from ResponsiveFilemanager
			//
			function OnMessage(e) {
				var event = e.originalEvent;
				// Make sure the sender of the event is trusted
				if (event.data.sender === 'responsivefilemanager') {
					if (event.data.field_id) {
						var fieldID = event.data.field_id;
						var url = event.data.url;
						$('#' + fieldID).val(url).trigger('change');
						$.fancybox.close();

						// Delete handler of the message from ResponsiveFilemanager
						$(window).off('message', OnMessage);
					}
				}
			}

			// Handler for a message from ResponsiveFilemanager
			$('.iframe-btn').on('click', function() {
				$(window).on('message', OnMessage);
			});

		});

}

initMyPage();