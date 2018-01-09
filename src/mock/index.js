import Mock from 'mockjs';
import articleAPI from './article'


// 文章相关
// Mock.mock('News/new_detail', 'get', articleAPI.getList); //匹配字符串
Mock.mock(/\/News\/new_detail/, 'get', articleAPI.getArticle);  //匹配正则


export default Mock