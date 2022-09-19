import { configureStore } from '@reduxjs/toolkit';

import { saveOnLogin } from './middleware/otherMiddleWare';
import { ServiceMiddleware } from './middleware/serviceMiddleWare.js';
import rootReducers from './reducer';

const customMiddleware = [ServiceMiddleware, saveOnLogin];

const store = configureStore({
    reducer: rootReducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(...customMiddleware),
});

export { store };
