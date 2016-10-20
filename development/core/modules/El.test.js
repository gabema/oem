(function(Components, Core) {

    // Css component
    var ElTest = Object.create(Core.Modules.Test); // call super constructor
    ElTest.name = "ElTest";
    ElTest.testComponent = 'oem-core-el-test';

    ElTest.canCreateDomElements = function(){
        var el = Core.Modules.El("div", { "class": "parent" }, [
            "testing",
            Core.Modules.El("div", { "class": "child1"}, "testing"),
            Core.Modules.El("div", { "class": "child2"}, "testing")
        ]);
        var elExists = el.classList.contains("parent");
        var elHasTextContent = el.textContent === "testingtestingtesting";
        var firstChildExists = el.children[0].classList.contains("child1");
        var firstChildHasTextContent = el.children[0].textContent === "testing";
        var secondChildExists = el.children[1].classList.contains("child2");
        var secondChildHasTextContent = el.children[1].textContent === "testing";
        var test = elExists && 
            elHasTextContent && 
            firstChildExists && 
            firstChildHasTextContent && 
            secondChildExists &&
            secondChildHasTextContent;
        ElTest.assert("Can create dom elements", test, true);
    };

    /**
     * Run tests
     */
    Core.Modules.Events.addEventListener(Core.Modules.EVENTS.DOCUMENT_READY, function(){
        ElTest.runTestSuite('El', [
            ElTest.canCreateDomElements
        ]);
    });

    // exports
    Core.Modules.ElTest = ElTest;
    return Core;

})(oem.Components, oem.Core);