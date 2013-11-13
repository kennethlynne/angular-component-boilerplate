describe('Directive: directive-example', function(){

    var $rootScope, $compile, element;

    beforeEach(function(){
        module('example-module');

        inject(function(_$rootScope_, _$compile_){
            $rootScope = _$rootScope_;
            $compile = _$compile_;
        });

        element = angular.element('<directive-example/>');
        element = $compile(element)($rootscope);
    });

    it('Should render the directive', function(){
       expect(element.text()).toBe('This is an example'));
    });

});