$(function () {
    'use strict';

    $('[type=checkbox], [type=radio]').iCheck({
        checkboxClass: 'icheckbox_flat-blue',
        radioClass: 'iradio_flat-blue'
    });

    dataTablesFactory()
        // .selector('#special')
        // .setup({
        //     "sPaginationType": "full_numbers"
        // })
        .instantiate();
});
