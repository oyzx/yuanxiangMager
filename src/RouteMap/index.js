import React from 'react';
import HomeLayoutPage from '../components/HomeLayout';
import HomePage from '../components/Home';
import BasicInfoPage from '../components/store/BasicInfo';
import ServicePage from '../components/store/Service';
import ClassificationPage from '../components/store/Classification';
import StaffListPage from '../components/servicestaff/StaffList';
import StaffAddPage from '../components/servicestaff/StaffAdd';
import StaffEditPage from '../components/servicestaff/StaffEdit';
import OrderListPage from '../components/order/OrderList';
import StaffAuditPage from '../components/servicestaff/StaffAudit';
import RecommendServicePage from '../components/recommend/RecommendService';
import RecommendOrderPage from '../components/recommend/RecommendOrder';
import ActivityAddPage from '../components/activity/ActivityAdd';
import ActivityManagePage from '../components/activity/ActivityManage';
import TransactionPage from '../components/statistics/Transaction';
import AmountPage from '../components/statistics/Amount';
import UserPage from '../components/statistics/User';
import StorePage from '../components/statistics/Store';
import NotFoundPage from '../components/NotFound';
import { Router,Route,hashHistory } from 'react-router';

class RouteMap extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
			    <Route component={HomeLayoutPage}>
			      <Route path="/" component={HomePage}/>
			      <Route path="/store/basicinfo" component={BasicInfoPage}/>
			      <Route path="/store/service" component={ServicePage}/>
			      <Route path="/store/classification/:id" component={ClassificationPage}/>
			      <Route path="/servicestaff/stafflist" component={StaffListPage}/>
			      <Route path="/servicestaff/staffadd" component={StaffAddPage}/>
			      <Route path="/servicestaff/staffedit/:id" component={StaffEditPage}/>
			      <Route path="/servicestaff/staffaudit" component={StaffAuditPage}/>
			      <Route path="/order/orderlist" component={OrderListPage}/>
			      <Route path="/recommend/recommendservice" component={RecommendServicePage}/>
			      <Route path="/recommend/recommendorder" component={RecommendOrderPage}/>
			      <Route path="/activity/activityadd" component={ActivityAddPage}/>
			      <Route path="/activity/activitymanage" component={ActivityManagePage}/>
			      <Route path="/statistics/statisticstransaction" component={TransactionPage}/>
			      <Route path="/statistics/statisticsamount" component={AmountPage}/>
			      <Route path="/statistics/statisticsuser" component={UserPage}/>
			      <Route path="/statistics/statisticsstore" component={StorePage}/>
			      <Route path="/*" component={NotFoundPage}/>
			    </Route>
			</Router>
		)
	}
}

export default RouteMap;