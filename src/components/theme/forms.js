(function(THEME) {

    THEME.FORM_FIELD_INPUT = {
        selector: " > input",
        declaration: {
            "width":"100%",
            "font-size": THEME.Config.FONT_SIZE_MEDIUM + "px",
            "padding":"10px 0",
            "text-indent":"10px",
            "border":"1px solid " + THEME.Config.FORM_FIELD_BORDER_COLOR,
            "border-radius": "2px"
        }
    };
    
    THEME.FORM_FIELD_HELP = {
        selector: " .help",
        declaration: {
            "font-size": THEME.Config.FONT_SIZE_SMALL + "px",
            "opacity": 0.6,
            "margin": "0 0 5px"
        }
    };

    THEME.FORM_FIELD_LABEL = {
        selector: " label",
        declaration: {
            "font-size": THEME.Config.FONT_SIZE_MEDIUM + "px",
            "margin": "10px 0"
        }
    };

    return THEME;

})(oem.Components.Theme);