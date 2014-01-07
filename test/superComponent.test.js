describe('Directive: superComponent', function(){

    var $rootScope, $compile, element;

    beforeEach(function(){
        module('kennethmodule');

        inject(function(_$rootScope_, _$compile_){
            $rootScope = _$rootScope_;
            $compile = _$compile_;
        });

        element = angular.element('<superComponent/>');
        element = $compile(element)($rootScope);
    });

    it('Should render the directive', function(){
       expect(element.text()).toBe('This is an example');
    });

});