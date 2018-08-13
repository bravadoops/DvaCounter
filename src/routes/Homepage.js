import CountApp from '../components/CountApp';
import { connect } from 'dva';
import React from 'react';

class HomePage extends React.Component {
    render() {
        return (
            <CountApp />
        );
    }
};
function mapStateToProps(state) {
    return { count: state.count };
  }

// connect model and component
export default connect(mapStateToProps)(CountApp);