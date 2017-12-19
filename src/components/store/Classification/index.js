import React from 'react';
import { Table, Button } from 'antd';
import Header from '../../component/Header';
import { serviceInfo } from './data.json';
import ModelPop from './ModelPop';
import './style.css';

// 定义列名以及规则
const columns = [
	{
	  	title: '服务',
	  	dataIndex: 'name',
	  	key: 'name',
	}, {
	  	title: '排序',
	  	dataIndex: 'sort',
	  	key: 'sort',
	}, {
	  	title: '介绍',
	  	dataIndex: 'intro',
	  	key: 'intro',
	}, {
	  	title: 'Action',
	  	key: 'action',
	  	render: (text, record) => {
	  		return (
	    	<span>
	    		<Button type="primary">修改</Button>
	    		<Button type="info">禁用</Button>
		        <Button type="danger">删除</Button>
	    	</span>
	  	)},
	}
];

class Classification extends React.Component {
	constructor(props, context) {
		super(props);
		this.state = {
			serviceInfo: [],
			serviceMount: 3,
			visible: false,
		}
	}
	componentDidMount() {
		this.setState({
			serviceInfo: serviceInfo
		})
	}
	// 显示弹出框
	showModal = () => {
	    this.setState({
	      visible: true,
	    });
	}
	// 关闭弹出框
	handleCancel = (e) => {
	    this.setState({
	      visible: false,
	    });
	}
	// 确认按钮，同时关闭弹出框
	handleOk = (info,name,e) => {
		let serviceInfoNew = this.state.serviceInfo.concat();
		serviceInfoNew.push({
			key: this.state.serviceMount + 1,
			name: name,
			sort: this.state.serviceMount + 1,
			intro: info
		})
	    this.setState({
	      visible: false,
	      serviceInfo: serviceInfoNew
	    });
	}
  	render () {
	    return (
	    	<div className="classification-main min-main">
	    		<Header title="商家分类管理" />
	    		<ModelPop visible={this.state.visible} onleOk={this.handleOk.bind(this)} onleCancel={this.handleCancel.bind(this)}/>
	    		<div className="table">
		    		<Button
			             type="primary" 
			             onClick={this.showModal}
			        >
			            新增
			        </Button>
	    			<Table columns={columns} dataSource={this.state.serviceInfo} />
	    		</div>
	    	</div>	
	    )
  	}
}

export default Classification;