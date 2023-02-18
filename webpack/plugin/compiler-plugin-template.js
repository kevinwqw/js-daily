import pino from 'pino';
const logger = new pino();

class CompilerPlugin {
    constructor({ message }) {
        this.message = message;
    }

    apply(compiler) {
        /**
         * 在compile前添加action.
         */
        compiler.plugin('before-compile', (params, cb) => {
            const { normalModuleFactory, contextModuleFactory } = params;
            const someAction = () => {};
            params.someAction = someAction;
            logger('Added someAction into params before compile');
        });

        /**
         * 在compile执行后立即触发，并且能够访问到params
         */
        compiler.plugin('compile', (params) => {
            const { someAction } = params;
            logger(`Exract new added someAction:${someAction} param during compile`);
        });

        /**
         * 'this-compilation' 和 'compilation' 略有不同， 'this-compilation' 可以使childCompiler的compilation，类似于'eacb-compilation'
         * 'this-compilation' 类似于 'each-compilation'，根据别的依赖插件，该plugin可能会执行多次
         */
        compiler.plugin('this-compilation', (compilation, params) => {});

        /**
         * 'compilation表示整个深度遍历结果，工厂模块创建、请求解析、chunk创建
         */
        compiler.plugin('compilation', (compilation, params) => {});

        /**
         * "normal-module-factory" Provides general access the NormalModuleFactory instance.
         * 这是一个tapable的实例，所以他可以作为插件
         */
        compiler.plugin('normal-module-factory', (normalModuleFactory) => {});

        /**
         * 该plugin提供获取ContextModuleFactory实例的方法，由于是tapable的实例，所以可以被plugined into
         * 这是一个tapable的实例，所以他可以作为插件
         */
        compiler.plugin('context-module.factory', (contextModuleFactory) => {});

        /**
         * "make" - this plugin hook exposes the compilation before the dependency graph has started to trace.
         * There are convienence methods [on the compilation] that you can use to add dependencies and modules to the compilation.
         * Technically this is the hook that webpack uses internally to start the dep graph trace by invoking the EntryOptionPlugin.js during WebpackOptionsApply.js.
         * This invokes SingleEntryPlugin or MultiEntryPlugin or DynamicEntryPlugin which all use this "make" hook to add dependencies.
         */
        compiler.plugin('make', () => {});

        /**
         * The last step to "decorate", modify or move around modules before they are sent to the "seal" phase. You have access to the entire compilation still at that time
         */
        compiler.plugin('after-compile', (compilation, cb) => {
            cb();
        });
    }
}

module.exports = CompilerPlugin;
