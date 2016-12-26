import {AppController} from '../controllers/app';
import * as template from '../templates/index.html';

export const routes = ($stateProvider, $urlRouterProvider) => {
    $stateProvider.state({
        name: 'app',
        url: '/',
        controller: AppController,
        controllerAs: 'app',
        template
    });

    $urlRouterProvider.otherwise('/');
}