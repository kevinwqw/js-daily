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
         * 该plugin提供获取NormalModuleFactory实例的方法.
         * 这是一个tapable的实例，所以他可以作为插件
         */
        compiler.plugin('normal-module-factory', (normalModuleFactory) => {});

        /**
         * 该plugin提供获取ContextModuleFactory实例的方法
         * 这是一个tapable的实例，所以他可以作为插件
         */
        compiler.plugin('context-module.factory', (contextModuleFactory) => {});

        /**
         * "make" - this plugin hook exposes the compilation before the dependency graph has started to trace.
         * There are convienence methods [on the compilation] that you can use to add dependencies and modules to the compilation.
         * Technically this is the hook that webpack uses internally to start the dep graph trace by invoking the EntryOptionPlugin.js during WebpackOptionsApply.js.
         * This invokes SingleEntryPlugin or MultiEntryPlugin or DynamicEntryPlugin which all use this "make" hook to add dependencies.
         */

        /**
         * 'make'这个hook在依赖树开始追踪前暴露出compilation
         * 在Compilation中包含许多方便操作compilation的方法，如像compilation中添加'依赖'或'模块'
         * 'make'是webpack在内部使用的钩子，通过在 WebpackOptionsApply.js 期间调用 EntryOptionPlugin.js 来启动依赖图跟踪
         * 这会调用 SingleEntryPlugin 或 MultiEntryPlugin 或 DynamicEntryPlugin，它们都使用此’make'hook来添加依赖项
         */
        compiler.plugin('make', () => {});

        /**
         * 在seal之前最后操作modules的步骤，在此步骤仍可以操作整个compilation
         */
        compiler.plugin('after-compile', (compilation, cb) => {
            cb();
        });
    }
}

module.exports = CompilerPlugin;
