$(document).ready(function() {

	$( "#selectable" ).selectable({
  		selected: function( event, ui ) {
  			var color = $('.color').val();
  			color = "#"+color;
  			var selected = ui.selected;
  			
  			$(selected).removeClass('ui-selected');
  			$(selected).css("background-color" , color);

  		}
	});

});