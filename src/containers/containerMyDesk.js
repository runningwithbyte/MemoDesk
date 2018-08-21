import { connect } from 'react-redux'
import { requestLoadCatalogData } from '../actions';
import * as types from '../actions'
import MyDesk from '../components/MyDesk'

const mapStateToProps = state => {
    return { ...state }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchConnectSocket: () => dispatch(requestLoadCatalogData())
    }
}

const containerMyDesk = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyDesk)

export default containerMyDesk