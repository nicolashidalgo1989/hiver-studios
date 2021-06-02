import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.min.css';
import appComponent from './app.component';
import ComponentsModule from './components/components';

const app = angular.module( 'app', [ ComponentsModule.name]);
app.controller('studioCtrl', ['$scope', $scope => {

    $scope.studioName  = 'Hiver Studios';

    $scope.services = [

        { name : 'Grabación', price : '20000' },
        { name : 'Mezcla', price : '30000' },
        { name : 'Masterización', price : '15000' },
        { name : 'Edición', price : '30000' },
        { name : 'Diseño Sonoro', price : '50000' },
        { name : 'Calibración', price : '25000' },
        { name : 'Producción musical', price : '100000' },
        { name : 'Composición', price : '80000' },
        { name : 'Sitio web', price : '100000' },
        { name : 'Logo', price : '80000' },
        { name : 'Artwork', price : '100000' }              
    ];

    $scope.cart = [];

    $scope.add = index => {

        index.preventDefault();
        $scope.cart.push( $scope.services[$index] );
        console.log($event);

    }

}])
app.component( 'app', appComponent );

