import React from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';
import './style.css';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class HomeLayout extends React.Component {
  render () {
    const {children} = this.props;
    return (
      <div>
        <header className="header">
          <Link to="/">商家平台管理</Link>
        </header>

        <main className="main">
          <div className="menu">
            <Menu mode="inline" theme="dark" style={{width: '240px'}}>
            
              <SubMenu key="store" title={<span><Icon type="home"/><span>商家信息</span></span>}>
                <MenuItem key="store-basicinfo">
                  <Link to="/store/basicinfo">基本信息</Link>
                </MenuItem>
                <MenuItem key="store-service">
                  <Link to="/store/service">服务条件</Link>
                </MenuItem>
                <MenuItem key="store-classification">
                  <Link to="/store/classification/1">商家分类管理</Link>
                </MenuItem>
              </SubMenu>

              <SubMenu key="servicestaff" title={<span><Icon type="team"/><span>服务人员管理</span></span>}>
                <MenuItem key="servicestaff-stafflist">
                  <Link to="/servicestaff/stafflist">服务人员列表</Link>
                </MenuItem>
                <MenuItem key="servicestaff-staffadd">
                  <Link to="/servicestaff/staffadd">服务人员添加</Link>
                </MenuItem>
                <MenuItem key="servicestaff-staffedit">
                  <Link to="/servicestaff/staffedit/2">服务人员编辑</Link>
                </MenuItem>
                <MenuItem key="servicestaff-staffaudit">
                  <Link to="/servicestaff/staffaudit">审核服务人员</Link>
                </MenuItem>
              </SubMenu>

              <SubMenu key="order" title={<span><Icon type="contacts"/><span>订单管理</span></span>}>
                <MenuItem key="order-orderlist">
                  <Link to="/order/orderlist">订单列表</Link>
                </MenuItem>
              </SubMenu>

              <SubMenu key="recommend" title={<span><Icon type="like-o"/><span>推荐</span></span>}>
                <MenuItem key="recommend-recommendservice">
                  <Link to="/recommend/recommendservice">服务推荐</Link>
                </MenuItem>
                <MenuItem key="recommend-recommendorder">
                  <Link to="/recommend/recommendorder">服务人员推荐</Link>
                </MenuItem>
              </SubMenu>

              <SubMenu key="activity" title={<span><Icon type="notification"/><span>活动</span></span>}>
                <MenuItem key="activity-activityadd">
                  <Link to="/activity/activityadd">活动添加</Link>
                </MenuItem>
                <MenuItem key="activity-activitymanage">
                  <Link to="/activity/activitymanage">活动管理</Link>
                </MenuItem>
              </SubMenu>

              <SubMenu key="statistics" title={<span><Icon type="notification"/><span>统计</span></span>}>
                <MenuItem key="statistics-statisticstransaction">
                  <Link to="/statistics/statisticstransaction">交易统计</Link>
                </MenuItem>
                <MenuItem key="statistics-statisticsamount">
                  <Link to="/statistics/statisticsamount">金额统计</Link>
                </MenuItem>
                <MenuItem key="statistics-statisticsuser">
                  <Link to="/statistics/statisticsuser">用户注册统计</Link>
                </MenuItem>
                <MenuItem key="statistics-statisticsstore">
                  <Link to="/statistics/statisticsstore">商家入驻统计</Link>
                </MenuItem>
              </SubMenu>
            </Menu>
          </div>

          <div className="content">
            {children}
          </div>
        </main>
      </div>
    );
  }
}

export default HomeLayout;