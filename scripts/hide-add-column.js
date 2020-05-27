(function(d) {
    'use strict';
    d.querySelectorAll('.new-project-column').forEach(function(element) {
        element.innerText = element.innerHTML = "";
        element.setAttribute('style', 'min-width: 0px !important; max-width: 0px !important; min-height: 0px !important; max-height: 0px !important; text-decoration: none !important; outline: 0 !important; border: 0 !important; border-style: none !important; padding-top: 0px !important; padding-bottom: 0px !important; margin-top: 0px !important; padding-right: 1px !important;');
    });
    d.querySelectorAll('.js-new-column-button').forEach(function(element) {
        element.setAttribute('style', 'padding-right: 0px !important;');
    });
})(document);
