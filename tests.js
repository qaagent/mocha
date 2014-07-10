var expect = chai.expect;

describe('TestMath', function() {
    'use strict';
	
    var textContent = document.getElementById("text-content");

    var settings = new Object();
    settings.elementSearchTimeOut = 50000;
    settings.annotate = true;
    settings.delayBeforeCommandExecution = 10;
    settings.delayBeforeExecution = 50;
    settings.closeOnComplete = true;

    //Init ExtAPI object and provide a message processing callback
    var executor = new ExtAPI(1234, settings);

    before(function() {
        executor.open("http://qaagent.com/ide/test.html", settings);
    });

    after(function() {
        executor.end();
    });

    it('should sum correctly', function() {        
        executor.execute("*", "$('#test1input').val('test')", "Enter text");
        executor.execute("*", "$('body > div > button').click()", "Click the button");
        executor.execute("*", "$('#test1label').hasValue('test')", "Verify label value");
    });

});

