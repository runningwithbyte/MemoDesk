import { connect } from 'react-redux'
import { requestLoadCatalogData } from '../actions';
import * as types from '../actions'
import Settings from '../components/Settings'

const mapStateToProps = state => {
    return { ...state }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchRequestLoadCatalogData: () => dispatch(requestLoadCatalogData())
    }
}

const containerSettings = connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings)

export default containerSettings