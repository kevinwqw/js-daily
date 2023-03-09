class LifeCyclePrinterPlugin {
    constructor(options) {
        this.excludedCycles = options.excludedCycles;
        this.orderdHooks = [
            'environment',
            'afterEnvironment',
            'entryOption',
            'afterPlugins',
            'afterResolvers',
            'initialize',
            'beforeRun',
            'run',
            'watchRun',
            'normalModuleFactory',
            'contextModuleFactory',
            'beforeCompile',
            'compile',
            'thisCompilation',
            'compilation',
            'make',
            'afterCompile',
            'shouldEmit',
            'emit',
            'afterEmit',
            'assetEmitted',
            'done',
            'additionalPass',
            'failed',
            'invalid',
            'watchClose',
            'shutdown',
            'infrastructureLog'
        ];
    }

    apply(compiler) {
        this.orderdHooks.forEach((hook, index) => {
            compiler.hooks[hook].tap('LifeCyclePrinterPlugin', () => console.log(`${index} - ${hook}`));
        });
    }
}

module.exports = LifeCyclePrinterPlugin;
