import {routes} from './config/route';
import {AppService} from './services/app';

export default angular.module('init', [])
    .service('AppService', AppService)
    .config(routes);