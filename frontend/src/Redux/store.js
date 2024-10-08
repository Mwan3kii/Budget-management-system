import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './Auth/RegisterUser';
import loginReducer from './Auth/LoginUser';

const store = configureStore({
    reducer: {
        registereduser: registerReducer,
        loginuser: loginReducer,
    }
});

export default store;