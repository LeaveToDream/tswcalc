
module('export-integration-tests', {
    setup: function() {
        renderSlots();
        renderButtonbar();
        initiateSelectHandlers();
        initiateButtonHandlers();
        initiateSummary();
        tswcalc.export.init();
    }
});

test('should create slot url for head', 1, function() {
    createTankBuild();

    var slotUrl = tswcalc.export.createSlotUrl(tswcalc.slots.head, tswcalc.slots.head.mappedState());

    equal(slotUrl, 'h=4,1,5,5,0,4,0,3,18');
});

test('should create slot url for NY raid wrist', 1, function() {
    createTankBuild();

    var slotUrl = tswcalc.export.createSlotUrl(tswcalc.slots.wrist, tswcalc.slots.wrist.mappedState());

    equal(slotUrl, 'w=4,85,4,6,0,4,0');
});

test('should create slot url for weapon with type', 1, function() {
    createTankBuild();

    var slotUrl = tswcalc.export.createSlotUrl(tswcalc.slots.weapon, tswcalc.slots.weapon.mappedState());

    equal(slotUrl, 'w=5,1,4,4,0,4,0,2,5');
});

test('should create export url', 1, function() {
    createTankBuild();

    tswcalc.export.collectAllSlotStates();
    var url = tswcalc.export.createExportUrl();

    deepEqual(url, 'w=5,1,4,4,0,4,0,2,5&w2=5,2,4,4,0,4,0,2,6&h=4,1,5,5,0,4,0,3,18&r=4,3,4,6,0,4,0,2,22&n=4,1,5,5,0,4,0,1,21&w=4,85,4,6,0,4,0&l=4,3,4,8,0,4,0,3,39&b=4,87,4,8,0,4,0&o=4,3,4,4,0,4,0,3,41');
});

test('should start export url and set in textfield', 1, function() {
    createTankBuild();

    tswcalc.export.startExportUrl();
    equal($('#export-textarea').html(), location.origin + location.pathname + '#w=5,1,4,4,0,4,0,2,5&amp;w2=5,2,4,4,0,4,0,2,6&amp;h=4,1,5,5,0,4,0,3,18&amp;r=4,3,4,6,0,4,0,2,22&amp;n=4,1,5,5,0,4,0,1,21&amp;w=4,85,4,6,0,4,0&amp;l=4,3,4,8,0,4,0,3,39&amp;b=4,87,4,8,0,4,0&amp;o=4,3,4,4,0,4,0,3,41');
});
