import React from 'react';
import { Modal, Select, Input } from 'antd';

const Option = Select.Option;

class ModelPop extends React.Component {
	constructor(props, context) {
		super(props);
		this.state = {
			name: '',
			info: '',
			defaultValue: ''
		}
	}
	componentDidMount() {
		this.setState({
			name: '水电维修',
			info: '',
			defaultValue: '水电维修'
		})
	}
	// componentWillUpdate(nextProps,nextState) {
	// 	this.setState({
	// 		name: '水电维修',
	// 		info: '',
	// 		defaultValue: '水电维修'
	// 	})
	// }
	// 服务名称
	handleChange = (value) => {
	  this.setState({
	  	name: value
	  })
	}
	// 服务信息
	setInfo = (e) => {
		this.setState({
			info: e.target.value
		})
	}
	// 点击确定触发主页面的方法
	handleOk = (e) => {
		this.props.onleOk(this.state.info,this.state.name,e);
	}
	// 点击取消触发主页面的方法
	handleCancel = (e) => {
		this.props.onleCancel(e);
	}
	render() {
		return (
			<div>
			    <Modal
			    	title="增加服务"
			        visible={this.props.visible}
			        onOk={this.handleOk}
			        onCancel={this.handleCancel}
			    >
			      	<h3>服务</h3>
				    <Select 
					    defaultValue={this.state.defaultValue}
					    value={this.state.name}
					    style={{ width: '100%' }} 
					    onChange={this.handleChange.bind(this)}>
					    <Option value="家教" disabled>家教</Option>
					    <Option value="月嫂" disabled>月嫂</Option>
					    <Option value="清洁清洗" disabled>清洁清洗</Option>
					    <Option value="水电维修">水电维修</Option>
					    <Option value="管道疏通">管道疏通</Option>
					    <Option value="搬家服务">搬家服务</Option>
					    <Option value="育婴早教">育婴早教</Option>
					</Select>
				    <h3>介绍</h3>
				    <Input 
				    	type="text" 
				    	value={this.state.info}
				    	onChange={this.setInfo.bind(this)}
				    />
			    </Modal>
			</div>
		)
	}
}

export default ModelPop;