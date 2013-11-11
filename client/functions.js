$(document).ready(function() {
  var socket = io.connect('http://localhost:9000');

  socket.on('newClient', function(data) {
    console.log(data);
    if (data.currentGrid.length === 100) {
      console.log(data.currentGrid);
      var childrens = $("#selectable").children();

      for (var i = 0; i < data.currentGrid.length; i++) {
        $(childrens[i]).css('background-color', data.currentGrid[i]);
      }
    }

  });

  socket.on('colorUpdated', function(data) {
    console.log(data);
    var childrens = $("#selectable").children();
    for (var i = 0; i < data.currentGrid.length; i++) {
      $(childrens[i]).css('background-color', data.currentGrid[i]);
    }
     $("#selectable").selectable('refresh');

  });

  $("#selectable").selectable({
    selected: function(event, ui) {
      var color = $('.color').val();
      color = "#" + color;
      var selected = ui.selected;

      $(selected).removeClass('ui-selected');
      $(selected).css("background-color", color);


      var childrens = $("#selectable").children();
      var colors = [];
      for (var i = 0; i < childrens.length; i++) {
        colors.push($(childrens[i]).css('background-color'));

      }

      socket.emit('colorChanged', {
        newColors: colors
      });

    }
  });

});