(function(COMPONENTS, COMPONENT, PROTOTYPE) {


    // PROTOTYPE

    var Prototype = PROTOTYPE(COMPONENT, {
        type: "SubmitButton"
    });

    // INIT

    Prototype.init = function(){
         this.form = this.getEl().dataset.oemForm;
         this.getEl().addEventListener('click', this.handleClick.bind(this));
    };

    // GETTERS
 
    Prototype.getForm = function(){
         return this.form;
    };

    // SETTERS

    Prototype.setForm = function(form){
        return this.form;
    };

    // METHODS
    
    Prototype.handleClick = function(e){
        e.preventDefault();
        if(oem.read(this.form)) oem.read(this.form).submit();
    };
    
    // EXPORTS
    // 
    COMPONENTS.SubmitButton.Prototype = Prototype;
    return COMPONENTS;

})(
    oem.Components, 
    oem.Core.Component, 
    oem.Core.Prototype);