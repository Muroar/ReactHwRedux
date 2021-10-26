import React from 'react';
import {connect} from 'react-redux';
import appActions from "../redux/app/appActions";
import appSelectors from "../redux/app/appSelectors"
import '../themes/Filter.css';

const Filter = ({ value, onChange }) => (
    <>
    <div className="filterContact">
        <p>Find contacts by name</p>
        <label>
            <input type="text"
                   value={value}
                   onChange={onChange}/>
        </label>
        </div>
    </>
);

const mapStateToProps = state => ({
    value: appSelectors.getFilter(state),
});

const mapDispatchFromProps = dispatch => ({
    onChange: (event) => dispatch(appActions.changeFilter(event.target.value))
});

export default connect(mapStateToProps, mapDispatchFromProps)(Filter);
