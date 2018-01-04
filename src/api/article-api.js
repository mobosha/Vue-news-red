import fetch from '../utils/fetch.js'

export function articleDetail(id){
	return fetch({
		url:'News/new_detail',
		method: 'get',
		params: { id }
	});
}