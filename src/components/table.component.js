/**
 * 表格公用组件
 * time: 2018-09-07 by qiuchenglei
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';


export class Table_ extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      onSelection: this.onSelection,
    };

   // console.log(this.props.dataSource)
   // console.log(this.props.loading)


    return (
      <Table 
         rowSelection={rowSelection} 
         columns={this.props.columns} 
         dataSource={this.props.dataSource} 
         pagination={this.props.pagination}
         size="small"
         scroll={{x:this.props.scrollX,}}
         loading={this.props.loading}
       />
    );
  }
}

Table_.propTypes = {
  columns: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired,
//  scrollX: PropTypes.number.isRequired,
  dataSource: PropTypes.array,
}




