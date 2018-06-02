export const appLogger = () => next => action => {
    console.log(` `);
    console.log(`[LOG][${new Date().toUTCString()}] [ACTION] ${action.type}`);
    console.log(`[DATA] ${ JSON.stringify(action.data, null, 1)}`);
    console.log(`[META] ${ JSON.stringify(action.meta, null, 1)}`);
    console.log(` `);
    return next(action)
};

export const loggerMiddleware = [appLogger];