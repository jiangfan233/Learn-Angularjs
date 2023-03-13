const UtilsModule = "utils"

export const Reader = "Reader";
export const GetPostById = "GetPostById";


const URL = "https://jsonplaceholder.typicode.com";

angular.module(UtilsModule, [])
    .factory(Reader, function ($resource) {
        return $resource(URL + '/todos/:id', { id: '@id' });
    })
    .factory(GetPostById, function ($resource) {
        return $resource(URL + "/posts/:id", { id: "@id" });
    })


export default UtilsModule;