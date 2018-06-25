$(function() {
    var $height,
        $width,
        trow = '',
        $color;

    // Select color input
    $('#pixelCanvas').on('click', 'td', function () {
        $color = $('#colorPicker').val();

        $(this).attr('style') ?  $(this).removeAttr('style') : $(this).attr('style', 'background:' + $color);

        //$(this).css('background', $color);

        //console.log($('#colorPicker').val());
    })


    // Select size input

    $('#sizePicker').submit(function(event) {

        $height = $('#inputHeight').val();
        $width = $('#inputWeight').val();

        //console.log(`Height ${$height} Width ${$width}`);

        makeGrid($height, $width);
    });



    // When size is submitted by the user, call makeGrid()

    function makeGrid(height, width) {
    // Your code goes here!
        clearGrid();

        var $table, tdata = '';

       $table = $('#pixelCanvas');

        for(var i = 0; i < height; i++) {

            trow = '<tr>';

            for(var j = 0; j < width; j++) {
                tdata += '<td></td>';
            }

            trow = trow + tdata + '</tr>';

            $table.append(trow);

            //console.log(`${trow}`);

            tdata = '';
        }

    }

    function clearGrid() {
        //var $table = $('#pixelCanvas');
        $('tr').remove();
    }

});

