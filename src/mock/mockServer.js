/*使用mockjs提供mock数据接口*/
import Mock from 'mockjs'
import data from './data.json'  //得到的是js对象

/*mock提供goods数据的接口*/
Mock.mock('/goods', {code: 0, data: data.goods})

/*mock提供ratings数据的接口*/
Mock.mock('/ratings', {code: 0, data: data.ratings})

/*mock提供info数据的接口*/
Mock.mock('/info', {code: 0, data: data.info})

console.log('mockserver  运行了')
