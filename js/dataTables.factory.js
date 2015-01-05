function dataTablesFactory() {

    var _selector = 'table.datatables';
    var _config = {
        'bInfo': false,
        'bFilter': false,
        'bLengthChange': false
    };

    var _api = {
        selector: selector,
        setup: setup,
        init: instantiate
    };

    return _api;

    ///////////

    function selector(jQuerySelector) {
        _selector = jQuerySelector;

        return _api;
    }

    function setup(config) {
        _config = $.extend({}, _config, config);

        return _api;
    }

    function instantiate () {
        var tableElement = $(_selector);

        configureDataSortTypes(tableElement);

        return tableElement.dataTable(_config);
    }

    function configureDataSortTypes(table) {
        var headers = table.find('thead th');

        if (existsSomeDataSortingTypeAttribute(headers)) {
            var sortingConfig = {
                aoColumns: []
            };

            headers.each(function (index, element) {
                var sortingType = $(element).data().sortingType;
                var sSortDataType = (sortingType) ? { sSortDataType: sortingType } : null;

                sortingConfig.aoColumns.push(sSortDataType);
            });

            _config = mergeDefaultAoColumnsOptionsWithUserDefinedAoColumnsOptions(_config, sortingConfig);
        }
    }

    function existsSomeDataSortingTypeAttribute(headers) {
        return !!$(headers)
            .filter(function (index, element) {
                return !!$(element).data().sortingType;
            })
            .length;
    }

    // aoColumns is an option of DataTables plugin
    function mergeDefaultAoColumnsOptionsWithUserDefinedAoColumnsOptions(config, sortingConfig) {
        if (config.aoColumns && (config.aoColumns.length !== sortingConfig.aoColumns.length)) {
            console.error('DataTable Setup Error: "aoColumns" option do not match with number of columns');
            return;
        }

        if (!!config.aoColumns) {
            for (var i = 0; i < sortingConfig.aoColumns.length; i++) {
                config.aoColumns[i] = $.extend({}, config.aoColumns[i], sortingConfig.aoColumns[i]);
            };
        } else {
            config = $.extend({}, config, sortingConfig);
        }

        return config;
    }
}
