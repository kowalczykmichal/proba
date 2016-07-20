/**
 * Created by Bartłomiej on 2014-08-25.
 */
angular.module('AngularExample').controller('exampleController', function ($scope){
    $scope.message = 'Hello world!';
    $scope.list = [
        {
            firstName: 'John2',
            lastName: 'Doe'
        },
        {
            firstName: 'Mark',
            lastName: 'Smith'
        },
        {
            firstName: 'James',
            lastName: 'Mole'
        }
    ];
});
