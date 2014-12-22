var dataTablesFactory = function() {

    var _selector = 'table.datatables';
    var _config = {
        'bInfo': false,
        'bFilter': false,
        'bLengthChange': false
    };

    var _api = {
        selector: selector,
        setup: setup,
        instantiate: instantiate
    };

    return _api;

    ///////////

    function instantiate () {
        var table = $(_selector);

        configureDataSortTypes(table);

        return table.dataTable(_config);
    }

    function setup(config) {
        _config = $.extend({}, _config, config);

        return _api;
    }

    function selector(jQuerySelector) {
        _selector = jQuerySelector;

        return _api;
    }

    function configureDataSortTypes(table) {
        var headers = table.find('thead th');

        var sortingConfig = {
            aoColumns: []
        };

        headers.each(function (index, element) {
            var sortingType = $(element).data().sortingType;
            sortingConfig.aoColumns.push({ "sSortDataType": sortingType });
        });

        _config = $.extend({}, _config, sortingConfig);
    }
}();