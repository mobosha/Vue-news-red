import Mock from 'mockjs'
import Qs from 'qs';
// 获取 mock.Random 对象
const Random = Mock.Random;

const getTaskList = function(params){

    const list = {counts: 35, pageSize: params.firstIndex, pageCount: 1, data: []};
    const firstIndex = parseInt(params.firstIndex) || 10;
    // const list = [];
    // const count = 20;
    for (let i = 0; i < 10; i++) {
        list.data.push(Mock.mock({
            tid: '@id',
            title: '@word(5, 15)',
            cover: Random.image('200x100', '#4A7BF7', 'Hello'),
            tname: '@ctitle(2, 5)',
            use_count: '@integer(0, 50)',
            question_count: '@integer(0, 50)',
            catid: '@integer(0, 500)',
            'upload_uid|1': ['', '@uuid'],
            'status|1': ['published', 'draft'],
            author: '@cname',
            display_time: '@datetime',
            pageviews: '@integer(300, 5000)'
        }));
    }
    console.log(list)
    return list;
    
}

export default {
    getList: config => {
        const params = Qs.parse(config.url);
        return getTaskList(params);
    },
}