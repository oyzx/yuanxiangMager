import React from 'react';
import { Form, Icon, Input, Button, message, Card } from 'antd';
import Header from '../../component/Header';
import './style.css';
const { TextArea } = Input;
const FormItem = Form.Item;

class BasicInfo extends React.Component {
  	constructor(props, context) {
		super(props);
	  	this.state = {
		    infoState: true,
		    iconLoading: false,
		    storeName: '',
		    storePhone: '',
		    storePrincipal: '',
		    storeYears: '',
		    storeInfo: '',
		};
	}
	handleChange = () => {
		let infoState = !this.state.infoState;
	    this.setState({ infoState:  infoState});
	}
	handleComplete = () => {
		if(!this.state.infoState) {
			message.info('正在编辑中，请关闭编辑状态！');
			return ;
		}
		this.setState({ iconLoading: true });
		setTimeout(() => {
			message.info('已保存！');
			this.setState({ iconLoading: false });
		},1000)	
	}
	setStore = (storeType,e) => {
		const storeValue = e.target.value;
		switch(storeType) {
			case 'storeName' :
				this.setState({storeName:storeValue})
				break;
			case 'storePhone' :
				this.setState({storePhone:storeValue})
				break;
			case 'storePrincipal' :
				this.setState({storePrincipal:storeValue})
				break;
			case 'storeInfo' :
				this.setState({storeInfo:storeValue})
				break;
			default: 
				console.log('系统错误');
				return
		}
	}
	componentDidMount() {
		this.setState({
			storeName: '优月之家',
			storePhone: '18473017990',
			storePrincipal: 'oyzx',
			storeYears: '3',
			storeInfo: '为您提供更好的平台',
		})
	}
	render () {
	  	const infoState = this.state.infoState;
	  	const stateAll = this.state;
	    return (
	    	<div className="basicinfo-main min-main">
	    		<Header title="基本信息" />
		        <Form className="form">
		        	<FormItem className="from-edit">
			        	<Button 
			        		onClick={this.handleChange.bind(this)}>
			        		<Icon type={ this.state.infoState ? 'pushpin' : 'edit'} />
			        		{ this.state.infoState ? '编辑' : '编辑中'}
			        	</Button>
			        </FormItem>
			        <FormItem className="from-list">
			            <label>商家名</label>
			            <Input 
			            	prefix={<Icon type="idcard" style={{ fontSize: 13 }} />} 
			            	placeholder="商家名"
			            	value={stateAll.storeName} 
			            	onChange={this.setStore.bind(this,'storeName')} 
			            	disabled={infoState}
			            />
			        </FormItem>
			        <FormItem className="from-list">
			        	<label>商家联系电话</label>
			            <Input 
			            	prefix={<Icon type="phone" style={{ fontSize: 13 }} />} 
			            	type="number" 
			            	placeholder="联系电话"
			            	value={stateAll.storePhone} 
			            	onChange={this.setStore.bind(this,'storePhone')} 
			            	disabled={infoState} 
			            />
			        </FormItem>
			        <FormItem className="from-list">
			        	<label>商家负责人</label>
			            <Input 
			            	prefix={<Icon type="user" style={{ fontSize: 13 }} />} 
			            	placeholder="商家负责人" 
			            	value={stateAll.storePrincipal} 
			            	onChange={this.setStore.bind(this,'storePrincipal')} 
			            	disabled={infoState} 
			            />
			        </FormItem>
			        <FormItem className="from-list">
			        	<label>商家营业年限</label>
			            <Input 
			            	addonAfter="年" 
			            	prefix={<Icon type="hourglass" style={{ fontSize: 13 }} />} 
			            	placeholder="营业年限" 
			            	value={stateAll.storeYears} 
			            	onChange={this.setStore.bind(this,'storeYears')} 
			            	disabled={infoState} 
			            />
			        </FormItem>
			        <FormItem className="from-list">
			        	<label>商家描述</label>
			        	<TextArea 
			        		placeholder="商家描述"  
			        		value={stateAll.storeInfo} 
			        		onChange={this.setStore.bind(this,'storeInfo')} 
			        		rows={4} 
			        		disabled={infoState} 
			        	/>
			        </FormItem>
			        <FormItem className="from-button">
			        	<Button 
			        		type="primary" 
			        		icon="poweroff" 
			        		loading={this.state.iconLoading} 
			        		onClick={this.handleComplete.bind(this)}>
				          提交
				        </Button>
			        </FormItem>
			    </Form>
			    <div className="card">
				    <Card title="商家基本信息说明" bordered={false}>
				      <p>商家可编辑信息，编辑完成后将信息送到平台进行审核。</p>
				      <p>平台审核完后会将信息更新一遍</p>
				    </Card>
				</div>
	    	</div>
	    )
	}
}

export default BasicInfo;