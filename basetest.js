function loadSettings() {
    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // Great success! All the File APIs are supported.
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }

    $(document).ready(function() {
        // Handler for .ready() called.    
        var jqxhr = $.getJSON("settings.json", function() {
                console.log("success");
            })
            .done(function() {
                console.log("second success");
            })
            .fail(function(err) {
                console.log(err);
            })
            .always(function() {
                console.log("complete");
            });
    });

};