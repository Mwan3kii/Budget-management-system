import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './Auth/RegisterUser';

const store = configureStore({
    reducer: {
        registereduser: registerReducer
    }
});

export default store;