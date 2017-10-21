
function isPromise(obj) {
    return obj && typeof obj.then === 'function';
}

export default function promiseMiddleware({dispatch}) {
    return (next) => (action) => {
        const {types, promise,...reset} = action;
        // 判断传入的action 是否为promise对象
        if(!isPromise(promise) || !(action.types.length === 3)){
            return next(action)
        }
        const [PENDING, DONE, FALL] = types;
        dispatch({...reset, type: PENDING});
        return action.promise.then(
            (result) => dispatch({...reset, result, type:DONE}),
            (error) => dispatch({...reset, error, type:FALL})
        );
    };
}