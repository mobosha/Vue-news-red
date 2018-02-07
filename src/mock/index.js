import Mock from 'mockjs';
import articleAPI from './article'
import jockApi from './jock'
import homeMock from './home.js'
import taskMock from './task.js'



// 首页
Mock.mock(/\/home\/newCourse/, 'get', homeMock.getNewCourse);



// 任务
Mock.mock(/\/task\/index/, 'get', taskMock.getList);  //匹配正则


// 商城


// 个人中心

// 文章相关
// Mock.mock('News/new_detail', 'get', articleAPI.getList); //匹配字符串
// Mock.mock(/\/News\/new_detail/, 'get', articleAPI.getArticle);  //匹配正则


//搞笑段子
Mock.mock(/\/joke\/index/, 'post', jockApi.getList);  //匹配正则


export default Mock