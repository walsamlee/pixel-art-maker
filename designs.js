$(function() {
    var $height,
        $width,
        tRow = '',
        $color;

    // TODO: Select color input
    $('#pixelCanvas').on('click', 'td', function () {
        $color = $('#colorPicker').val();

        // TODO: Check if cell has style, if yes remove and if no add
        $(this).attr('style') ?  $(this).removeAttr('style') : $(this).attr('style', 'background:' + $color);

    })


    // TODO: Select size input
    $('#sizePicker').submit(function(event) {

        $height = $('#inputHeight').val();
        $width = $('#inputWeight').val();

        // TODO: When size is submitted by the user, call makeGrid()
        makeGrid($height, $width);
    });

    /**
    *  @description Creates art canvas based on the dimension submitted by the user
    *  @param { string } height - The canvas height
    *  @param { string } width - The canvas width
    */
    function makeGrid(height, width) {
        // TODO: Clear existing canvas grid before making a new one
        $('tr').remove();

        var $table,
            tData = '';

        $table = $('#pixelCanvas');

        for(var i = 0; i < height; i++) {
            tRow = '<tr>';

            for(var j = 0; j < width; j++) {
                tData += '<td></td>';
            } // Create number of columns based on width submitted by user

            tRow = tRow + tData + '</tr>';

            $table.append(tRow);

            tData = '';
        } // Create number of rows based on height submitted by user

    }
});

