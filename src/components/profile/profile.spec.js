describe('Profile component', function () {

    var $componentController, ctrl, bindings;

    beforeEach(angular.mock.module('hello-world'));

    beforeEach(inject(function (_$componentController_) {
        bindings = {
            firstname: 'Pawan',
            lastname: 'Korotane'
        }
        $componentController = _$componentController_;
        ctrl = $componentController('profile', null, bindings);
    }));

    describe('model', function () {
        it('should have firstname and lastname bindings', function () {
            expect(ctrl.firstname).toBe('Pawan');
            expect(ctrl.lastname).toBe('Korotane');
        });
    });
});