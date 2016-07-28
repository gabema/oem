(function(Core) {

    var Gfx = {};

    /**
     * Renders images from theme to css classes
     *
     * @method     renderThemeImages
     * @param      {<type>}  imageConfigs  { description }
     */
    Gfx.renderThemeImages = function(imageConfigs){

        var selector;
        var imageConfig;
        var cssConfig;
        var css = [];

        // concat all css definitions
        for(var i in imageConfigs){
            for(var x = 0; x < imageConfigs[i].length; x++){
                css.push(imageConfigs[i][x]);
            }
        }

        Core.Modules.Css.render('oem-images-css', css);

    };

    // do this automatically
    Gfx.renderThemeImages(Core.Modules.Theme.IMAGES);

    Core.Modules.Gfx = Gfx;
    return Core;
    

})(oem.Core);