$.fn.dataTableExt.afnSortData['checkbox'] = function(oSettings, iColumn, iVisColumn) {
    var trs = oSettings.oApi._fnGetTrNodes(oSettings);

    return $.map(trs, function(tr, i) {
        return $('td:eq(' + iVisColumn + ') input', tr).is(':checked') ? "0" : "1";
    });
};

$.fn.dataTableExt.afnSortData['radio'] = function(oSettings, iColumn, iVisColumn) {
    var trs = oSettings.oApi._fnGetTrNodes(oSettings);

    return $.map(trs, function(tr, i) {
        return $('td:eq(' + iVisColumn + ') input:checked', tr).val();
    });
};

$.fn.dataTableExt.afnSortData['select'] = function(oSettings, iColumn, iVisColumn) {
    var trs = oSettings.oApi._fnGetTrNodes(oSettings);

    return $.map(trs, function(tr, i) {
        return $('td:eq(' + iVisColumn + ') select', tr).val();
    });
};