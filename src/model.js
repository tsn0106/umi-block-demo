import {
  query,
} from './service';
const statusData = {
  '1':{'label':'全部','color':'blue'},
  '2':{'label':'开启中','color':'green'},
  '3':{'label':'已关闭','color':'red'}
}
const typeData = {
  '1':{'label':'全部','color':'blue'},
  '2':{'label':'web用户端','color':'green'},
  '3':{'label':'app用户端','color':'green'},
  '4':{'label':'app商家端','color':'green'},
  '5':{'label':'pc平台官网','color':'green'},
}
export default {
  namespace: 'BLOCK_NAME_CAMEL_CASE',
  state: {
    data:[{
      id:1,
      title: 'banner图1',
      pic:'',
      sort: 1,
      platform:1,
      created_at: "2019-12-18 21:15:54",
      status: 2
    },{
      id:2,
      title: 'banner图2',
      pic:'',
      sort: 3,
      platform:2,
      created_at: "2019-12-18 21:15:54",
      status: 3
    }],
    statusData:statusData,
    typeData:typeData,
    pagination:{
      total:0,
      pageSize:10,
      current:1
    }
  },
  effects: {
    *fetch({payload},{call,put,select}){
      const res = yield call(query, payload);
      yield put({
        type:'saveFetch',
        payload:res
      })
    },
  },
  reducers: {
    saveFetch(state,{payload}){
      return {...state,data:payload}
    }
  },
  subscriptions:{
    setup({dispatch,history}){
      // history.listen(({pathname,query}) => {
      //   if(pathname === '/store/view'){
      //     dispatch({
      //       type:"fetch",
      //       payload:query.id
      //     })
      //   }
      // })
    }
  }  
};