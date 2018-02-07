import fetch from '../utils/fetch.js'


//get请求 params
export function taskList(params){
	return fetch({
		url: 'task/index',
		method: 'get',
		params: params || {}
	});
}