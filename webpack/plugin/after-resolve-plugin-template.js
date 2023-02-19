class AfterResolveNormalModuleFactoryPlugin {
    constructor(options) {
        this.resourceRegExp = options.resourceRegExp;
        this.newRequestString = options.newRequestString;
    }

    didMatchRequestWith(request) {
        return (regExp) => regExp.text(request);
    }

    apply(normalModuleFactory) {
        /**
         * "after-resolve" - module factories are the glue that ties the parsed request, to the resolver. This after-resolve hook can not only provide information for you about a resolved module, but also allow you to customize and add additional resolved properties, like loaders, or (for ContextModuleFactory) a new and separate context map as well as even Dependency information like:
         * `importedVar: '__WEBPACK_IMPORTED_MODULE_2__c__', from HarmonyImportDependency(s).
         */
        normalModuleFactory.plugin('after-resolve', (result, cb) => {
            /**
             * should not step into since we wiped any file that matches /lazy-a/ and swapped it out for a different request
             */
            if (this.didMatchRequestWith(result.resource)(this.resourceRegExp)) {
                result.resource = path.resolve(path.dirname(result.resource), this.newRequestString);
            }

            return cb(null, result);
        });
    }
}

module.exports = AfterResolveNormalModuleFactoryPlugin;
