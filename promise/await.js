const _await = (args) => (onResolved, onRejected) => {
    return onRejected
        ? Promise.resolve(args).catch(onRejected).then(onResolved, onRejected)
        : Promise.resolve(args).then(onResolved, onRejected);
};
