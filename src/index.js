import React,{Component,Fragment,PureComponent} from 'react';
import {connect} from 'dva';
import styles from './index.css';
import {Button,Card,Table} from 'antd';
import BannerOperator from './components/operator';
@connect(({ BLOCK_NAME_CAMEL_CASE,loading })=>({
	data: BLOCK_NAME_CAMEL_CASE.data,
	loading: loading.effects['BLOCK_NAME_CAMEL_CASE/fetch'],
  status:BLOCK_NAME_CAMEL_CASE.statusData,
  type:BLOCK_NAME_CAMEL_CASE.typeData,
  pagination:BLOCK_NAME_CAMEL_CASE.pagination,
}))
class PAGE_NAME_UPPER_CAMEL_CASE extends PureComponent{
	state={
		search:{}
	}
	componentDidMount(){
    // const {dispatch} = this.props;
    // dispatch({
    //   type:'BLOCK_NAME_CAMEL_CASE/fetch'
    // })
  }
	handlePageChange = (page,pageSize) => {
    const {dispatch} = this.props;
    const {search} = this.state;
    dispatch({
      type:'BLOCK_NAME_CAMEL_CASE/fetch',
      payload:{...search,page,pageSize}
    })
  }
	handleSearch = values => {
    const {dispatch} = this.props;
    this.setState({
      search:values
    },()=>{
      const {search} = this.state;
      dispatch({
        type:'BLOCK_NAME_CAMEL_CASE/fetch',
        payload:{page:1,...search}
      })
    })
  }
	render(){
		const {
			pagination,
			loading,
      status,
      type,
      data
    } = this.props;
    const columns =[{
      title: 'ID',
      dataIndex:'id',
      key:'id'
    },{
      title: '标题',
      dataIndex:'title',
      key:'title',
    },{
      title: '缩略图',
      dataIndex:'pic',
      key:'pic',
      render:(v,r) => (<span className={styles.logo}><img src={v}  /></span>)
    },{
      title: '排序',
      dataIndex:'sort',
      key:'sort',
    },{
      title: '平台',
      dataIndex:'platform',
      key:'platform',
      render:(r,v) => (<span>{v.class_name}</span>)
    },{
      title: '时间',
      dataIndex:'created_at',
      key:'created_at'
    },{
      title: '状态',
      dataIndex:'status',
      key:'status',
      // render:this.renderStatus
    },{
      title: '操作',
      dataIndex:'handle',
      key:'handle',
      // render:this.renderHandle
    }];
		return (
	    <div className={styles.normal}>
	      <Fragment>
	        <BannerOperator {...this.props} statusData={status} typeData={type} onSubmit={this.handleSearch} />
	        <Card>
	        	<Table 
	            dataSource={data} 
	            rowKey="id"
	            scroll={{x:20}}
	            columns={columns}
	            loading={loading}
	            pagination={{
	              ...pagination,
	              onChange:this.handlePageChange
	            }} 
	          />
	        </Card>
	      </Fragment>
	    </div>
	  )
	}
}
export default PAGE_NAME_UPPER_CAMEL_CASE;