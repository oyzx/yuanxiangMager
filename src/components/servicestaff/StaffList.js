import React from 'react';
import Header from '../component/Header';
import { Table } from 'antd';

class StaffList extends React.Component {
  render () {
  	const columns = [
  		{
  			
  		}
  	]
    return (
    	<div className="min-main">
    		<Header title="服务人员列表" />
    		<div>
    			<Table columns={columns} />
    		</div>
    	</div>
    );
  }
}

export default StaffList;