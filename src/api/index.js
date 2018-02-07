import fetch from '../utils/fetch.js'

export function getInfo(token) {
    return fetch({
        url: '/@appapi/user/index/getUserInfo',
        method: 'get',
        params: {token}
    });
}

export function bunner(){
	return fetch({
		url:'News/banner',
		method: 'get'
	});
}

// 最新课程
export function getNewCourse(){
	return fetch({
		url:'home/newCourse',
		method: 'get',
		params: {
			callback: 'JSON_CALLBACK',
			apiName: 'ELE_NEW_COURSE_LIST',
			apiType: 'course',
            pageSize:3
		}
	});
}