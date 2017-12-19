import React from 'react';
import { Select, Button, Input, Switch, Form } from 'antd';
import Header from '../../component/Header';
import './style.css';
const FormItem = Form.Item;
const Option = Select.Option;

// 选择select触发的事件，每选择一次获取选中的值
function handleChange(value) {    
  console.log(`selected ${value}`);
}

class Service extends React.Component {
	constructor(props, context) {
		super(props);
		this.state = {
			openState: true,
			shopState: true,
			shopstart: '',
			shopstop: '',
			children: [],
		}
	}
	componentDidMount() {
		const children = ["南山区","福田区","罗湖","宝安区","龙岗区","龙华区","盐田区"];
		this.setState({
			children: children
		})
	}
	shopstart = (e) => {
		// 获取开始时间
		// console.log(e.target.value)
		this.setState({
			shopstart: e.target.value
		})
	}
	shopstop = (e) => {
		// 获取结束时间
		// console.log(e.target.value)
		this.setState({
			shopstop: e.target.value
		})
	}
	handleDisabledChange = () => {
		// 获取当前开店相反状态
		// console.log(this.state.shopState)
	    this.setState({ 
	    	shopState: !this.state.shopState
	    });
	}
	handleComplete = () => {
		console.log("提交成功")
	}
  	render () {
	    return (
	    	<div className="service-main min-main">
	    		<Header title="商家服务条件" />
	    		<Form className="form">
		        	<FormItem className="from-list">
		        		<label>服务地区</label>
			            <Select
			            	placeholder="服务地区" 
						    mode="multiple"
						    style={{ width: '100%' }}
						    defaultValue={[]}
						    onChange={handleChange}
						  >
						  {
						  	this.state.children.map((value,key) => {
						  		return <Option key={key}>{value}</Option>
						  	})
						  }
						</Select>
		        	</FormItem>
		        	<FormItem className="from-list">
		        		<label>服务时间</label>
		        		<Input type="time"
			            	addonBefore="开始时间" 
			            	value={this.state.shopstart}
			            	onChange={this.shopstart.bind(this)}
			            />
			            <Input type="time"
			            	addonBefore="结束时间" 
			            	value={this.state.shopstop}
			            	onChange={this.shopstop.bind(this)}
			            />
		        	</FormItem>
		        	<FormItem className="from-list">
		        		<label>营业状态</label><br/>
			            <Switch checkedChildren="开" unCheckedChildren="关" onChange={this.handleDisabledChange.bind(this)} checked={this.state.shopState}/>
		        	</FormItem>
		        	<FormItem className="from-button">
		        		<Button 
			        		type="primary" 
			        		onClick={this.handleComplete.bind(this)}>
				          提交
				        </Button>
		        	</FormItem>
		        </Form>
	    	</div>
	    )
  	}
}

export default Service;