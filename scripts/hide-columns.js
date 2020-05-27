(function(d) {
    'use strict';
    const COLUMN_INDEXES = [0, 1, 7]; // modify to control which columns to hide
    d.querySelectorAll('.project-column').forEach(function(element, index) {
        if(!COLUMN_INDEXES.includes(index)) return;
        element.setAttribute('style', 'display: none !important;');
    });
})(document);
