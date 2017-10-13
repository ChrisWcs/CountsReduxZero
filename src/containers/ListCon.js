import { connect } from 'redux-zero';
import List from '../components/List';

const mapToProps = (state) => ({
    arr: state.counts
})

const ListCon = connect(mapToProps)(List);

export default ListCon;