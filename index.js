function receivesAFunction(callBack) {
    return callBack();
}

function returnsANamedFunction() {
    return function x () {
        return x;
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        return function(){};
    };
}