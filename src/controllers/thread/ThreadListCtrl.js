import App from "@/app/app.module";
import { GetPostById } from "@/factories/index";


export const ThreadListCtrl = "threadListCtrl";

App.controller(ThreadListCtrl, [GetPostById, function ThreadListCtrl(GetPostById) {
    const vm = this;

    vm.pageNumber = 1;
    vm.pageSize = 5;

    vm.items = [
        {
            title: "这是一个主贴",
            poster: "雪狼",
            dateCreated: "2015-02-19T15:00:00",
            items: [
                {
                    id: 11,
                    title: "这是第一个回复",
                    poster: "雪狼",
                    dateCreated: "2015-02-19T15:01:00",
                    items: [
                        {
                            id: 111,
                            title: "回复1.1",
                            poster: "破狼",
                            dateCreated: "2015-02-19T15:11:00",
                        },
                        {
                            id: 112,
                            title: "回复1.2",
                            poster: "破狼",
                            dateCreated: "2015-02-19T15:21:00",
                        },
                    ]
                },
                {
                    id: 12,
                    title: "这是第二个回复",
                    poster: "雪狼",
                    dateCreated: "2015-02-20T15:01:00",
                }
            ]
        },
        {
            title: "这是第二个主贴",
            poster: "破狼",
            dateCreated: "2015-02-19T16:00:00",
        },
    ]
    
    // function search() {
    //     GetPostById.get({ id: vm.filter.$id }).$promise.then(function(data) {
    //         vm.post = data;
    //     })
    // }
    // 加上防抖
    // vm.search = debounce(search, 500);

}])