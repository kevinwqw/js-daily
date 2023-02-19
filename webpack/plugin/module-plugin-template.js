const path = require('path');
const BeforeResolveNormalModuleFactoryPlugin = require('./before-resolve-plugin-template');
const AfterResolveNormalModuleFactory = require('./after-resolve-plugin-template');

class NormalModuleFactoryPlugin {
    applay(compiler) {
        compiler.plugin('normal-module-factory', (normalModuleFactory, params) => {
            const nmfPluginParams = {
                resourceRegexp: /lazy-a/,
                newRequestString: 'lazy-hijacked-request'
            };

            normalModuleFactory.apply(
                new BeforeResolveNormalModuleFactoryPlugin(nmfPluginParams),
                new AfterResolveNormalModuleFactory(nmfPluginParams)
            );
        });

        compiler.plugin('context-module-factory', (contextModuleFactory, params) => {
            const DEFAULT_CONTEXT_REGEXP = /\/plugin/;

            contextModuleFactory.plugin('before-resolve', (result, cb) => {
                if (DEFAULT_CONTEXT_REGEXP.test(result.context) && result.request === '.') {
                    result.request = './context';
                    result.regExp = /lazy-(.*)\.js/;
                    result.dependencies.forEach((d) => {
                        if (d.critical) d.critical = false;
                    });
                }

                return cb(null, result);
            });
        });
    }
}

module.exports = NormalModuleFactoryPlugin;
