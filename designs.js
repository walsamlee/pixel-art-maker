$(function() {
    var $height,
        $width,
        tRow = '',
        $color;

    // TODO: Select color input
    $('#pixelCanvas').on('click', 'td', function () {
        $color = $('#colorPicker').val();

        // TODO: Check if cell has style
        $(this).attr('style') ?  $(this).removeAttr('style') : $(this).attr('style', 'background:' + $color);

    })


    // TODO: Select size input
    $('#sizePicker').submit(function(event) {

        $height = $('#inputHeight').val();
        $width = $('#inputWeight').val();

        // TODO: Call function makeGrid to create desired number of row and column
        makeGrid($height, $width);
    });



    // TODO: When size is submitted by the user, call makeGrid()

    /**
    *  @description Creates art canvas based on the dimension submitted by the user
    *  @param { string } height - The canvas height
    *  @param { string } width - The canvas width
    */
    function makeGrid(height, width) {

        // TODO: Clear existing canvas grid before making a new one
        clearGrid();

        var $table,
            tData = '';

       $table = $('#pixelCanvas');

        for(var i = 0; i < height; i++) {

            tRow = '<tr>';

            for(var j = 0; j < width; j++) {
                tData += '<td></td>';
            }

            tRow = tRow + tData + '</tr>';

            $table.append(tRow);

            tData = '';
        }

    }

    /**
     * @description Deletes table rows from table
     */
    function clearGrid() {
        $('tr').remove();
    }

});

