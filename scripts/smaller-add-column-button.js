(function(d) {
    'use strict';
    d.querySelectorAll('.new-project-column').forEach(function(element) {
        element.innerHTML = '<svg class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg>';
        element.setAttribute('style', 'min-width: 10px !important; max-width: 10px !important; min-height: 10px !important; max-height: 10px !important; text-decoration: none !important; outline: 0 !important; border: 0 !important; border-style: none !important; padding-top: 0px !important; padding-bottom: 0px !important; margin-top: 10px !important;');
    });
})(document);
