class ResolverPlugin {
    constructor({ message }) {
        this.message = message;
    }
    apply(compiler) {
        compiler.plugin('after-resolvers', (compiler) => {
            const resolver = compiler.resolvers.normal;

            resolver.plugin('described-relative', (request, cb) => {
                const directory = request.path;
                return cb(null, result);
            });
        });
    }
}

module.exports = ResolverPlugin;
