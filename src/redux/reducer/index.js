import { combineReducers } from 'redux';
import commonReducers from 'src/redux/common/reducers';
import attendanceReducers from 'src/screens/attendanceHistory/reducers';
import feedReducers from 'src/screens/feed/reducers';
import feesHistoryReducers from 'src/screens/feesHistory/reducers';
import loginReducers from 'src/screens/login/reducers';
import messagesReducer from 'src/screens/messages/reducers';

const rootReducer = (state, action) => {
    if (action.type === 'RESET_ACTION') {
        return appReducer(undefined, action); // Reseting Redux Store ( LogOut )
    }

    return appReducer(state, action);
};

const appReducer = combineReducers({
    ...loginReducers,
    ...commonReducers,
    ...feedReducers,
    ...feesHistoryReducers,
    ...attendanceReducers,
    ...messagesReducer,
});

export default rootReducer;
