(function(COMPONENTS, TEST) {

    var Test = Object.create(TEST); // call super constructor
    Test.name = "Tests";
    Test.testComponent = 'SelectTest';

    /**
     * Test example
     *
     * @method     
     */
    Test.exampleIsWorking = function(){
        Test.assert('Tests covered by Field component', true, true);
    };    

    /**
     * Run tests
     */
    oem.events.addEventListener(oem.EVENTS.DOCUMENT_READY, function(){
        Test.runTestSuite('Select', [
            Test.exampleIsWorking
        ]);
    });

    // exports
    COMPONENTS.Select.Test = Test;
    return COMPONENTS;

})(oem.Components, oem.Core.Test);