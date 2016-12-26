/**
 * Created by Asus on 05.11.2016.
 */
import Modules from './modules';
import Filters from './filters';
import Directives from './directives';
console.log('Hello')
angular.module('app', [
    'ui.router',
    Filters.name,
    Directives.name,
    Modules.name
]);

angular.bootstrap(document.body, ['app']);