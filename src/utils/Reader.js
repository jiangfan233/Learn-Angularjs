import angular from "angular";

const Reader = "Reader";
angular.module(Reader, []).factory(Reader, function($resource) {
    return $resource('https://jsonplaceholder.typicode.com/todos/:id', {id: '@id'});
})

export default Reader;