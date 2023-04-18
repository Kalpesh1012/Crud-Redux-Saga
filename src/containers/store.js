import { configureStore } from '@reduxjs/toolkit'
import crudSlice from './crudSlice'
import rsslice from './rsslice';
import usersSlice from './usersSlice';
import createSagaMiddleware from "@redux-saga/core"
import { rootSaga } from '../components/sagas';

const sagaMiddleware = createSagaMiddleware()

const store=configureStore({
    reducer:{
        crud:crudSlice,
        user:rsslice,
        users:usersSlice
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({thunk:false}).concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)
export default store;