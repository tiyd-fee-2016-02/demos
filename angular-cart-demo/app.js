//based on code from http://jsfiddle.net/slav123/75m7e/3/
(function(){
var cartDemo = angular.module('cartDemo', []);

cartDemo.controller('CartForm', function($scope) {
    $scope.invoice = {
        items: [{
            qty: 1,
            description: 'Balls of Yarn',
            cost: 9.95}]
    };

    $scope.addItem = function() {
        $scope.invoice.items.push({
            qty: 1,
            description: '',
            cost: 0
        });
    },

    $scope.removeItem = function(index) {
        $scope.invoice.items.splice(index, 1);
    },

    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.invoice.items, function(item) {
            total += item.qty * item.cost;
        })

        return total;
    }
});
})();
