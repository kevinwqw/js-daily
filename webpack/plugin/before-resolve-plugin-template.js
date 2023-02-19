class BeforeResolveNormalMoudleFactroyPlugin {
    constructor(options) {
        this.resourceRegExp = options.resourceRegExp;
        this.newRequestString = options.newRequestString;
    }

    didMatchRequestWith(request) {
        return (reqExp) => reqExp.test(request);
    }

    apply(normalModuleFactory) {
        /**
         * "before-resolve" - module factories are the glue that ties the parsed request
         * to the resolver and the NormalModule creation.
         * This before hook allows a developer to modify a parsed and "about-to-be-request" resource path
         * to a module before it is resolved and turned into an actual module.
         */
        normalModuleFactory.plugin('before-resolve', (result, callback) => {
            if (this.didMatchRequestWith(result.request)(this.resourceRegExp)) {
                result.request = result.request.replace(this.resourceRegExp, this.newRequestString);
            }
        });
    }
}

module.exports = BeforeResolveNormalMoudleFactroyPlugin;
