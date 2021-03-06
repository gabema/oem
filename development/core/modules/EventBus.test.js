(function(CORE) {

    // EventBus component
    var EventBusTest = Object.create(CORE.Test); // call super constructor
    EventBusTest.testComponent = 'EventBusTest';
    var component = Object.create(CORE.EventBus);
    component.name = "EventBusTest";

    var testEventBus = new CORE.EventBus();
    function testCallback(){}

    EventBusTest.canAddDetectAndGetListeners = function(){
        try{
            testEventBus.addEventListener('testEvent', testCallback);
            EventBusTest.assert('Can add listener', true, true);
        } catch (err) {
            EventBusTest.assert('Can add listener', false, true);
        }

        try{
            var listeners = testEventBus.getListeners();
            EventBusTest.assert('Can get listener', true, true);
        } catch (err) {
            EventBusTest.assert('Can get listener', false, true);
        }
 
        var test = testEventBus.hasEventListener('testEvent');
        EventBusTest.assert('Can detect listener', test, true);
    };

    EventBusTest.canRemoveListener = function(){
        testEventBus.removeEventListener('testEvent', testCallback);
        var listeners = testEventBus.getListeners();
        var test = testEventBus.hasEventListener('testEvent') === false;
        EventBusTest.assert('Can remove listener', test, true);
    };

    EventBusTest.canDispatchEvent = function(){
        var wasCalled = false;
        var testDispatchFunc = function(){
            wasCalled = true;
        };
        testEventBus.addEventListener('testEvent', testDispatchFunc);
        testEventBus.dispatch('testEvent');
        EventBusTest.assert('Can dispatch event', wasCalled, true);
    };

    /**
     * Run tests
     */
    CORE.Events.addEventListener(CORE.EVENTS.DOCUMENT_READY, function(){
        EventBusTest.runTestSuite('EventBus', [
            EventBusTest.canAddDetectAndGetListeners,
            EventBusTest.canRemoveListener,
            EventBusTest.canDispatchEvent
        ]);
    });

    // exports
    CORE.EventBusTest = EventBusTest;
    return CORE;

})(oem.Core);