with(document.getElementById('input_message')) {
    onblur = function(e) {
        var elm = e.target;
        setTimeout(function() {
            elm.focus()
        });
    }
    onkeydown = function(e) {
        var key = e.which || e.keyCode;
        if (key == 9) e.preventDefault();
        // code for tab is 9
        console.log(e.code)
    }
}
