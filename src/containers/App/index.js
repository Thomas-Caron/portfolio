import { connect } from 'react-redux';

import App from '../../components/App';
import { returnScrollValue, loadingFalse } from '../../actions/app';

const mapStateToProps = (state) => ({
    scrollValue: state.app.scrollValue,
    loading: state.app.loading,
});

const mapDispatchToProps = (dispatch) => ({
    returnScrollValue: (scrollValue) => dispatch(returnScrollValue(scrollValue)),
    loadingFalse: () => dispatch(loadingFalse()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);