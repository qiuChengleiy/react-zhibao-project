/**
 * 按钮组件
 * time: 2018-09-07 by qiuchenglei
 */
import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import { Button } from 'antd';

class Button_ extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        const { account,dispatch } = this.props; // 获取状态
        const title = this.props.title;
        const style = this.props.styles;
         
        return (
            <div>
                {title.map((val,key) => 
                  <Button type="primary" 
                    key={key} 
                    style={key == 2 ? style.bt2:style.bt1} 
                    onClick={(() => {dispatch({type: 'account/toggle',payload:{key}})  })}>{val}
                  </Button>
                )}
            </div>
        )
    }
}

// 数据校验
Button_.propTypes = {
   title: PropTypes.array.isRequired,
};


function mapStateToProps(state) {
    return { account: state.account };
  }

export const Buttons = connect(mapStateToProps)(Button_);

