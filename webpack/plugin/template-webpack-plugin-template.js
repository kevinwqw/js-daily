class TemplatePlugin {
    constructor({ message }) {
        this.message = message;
    }

    apply(compiler) {
        compiler.plugin(compilation, (compilation, cb) => {
            compilation.moduleTemplate.plugin('render', (moduleSource, module) => {
                return moduleSource;
            });

            compiler.plugin(compilation, (compilation, cb) => {
                compilation.moduleTemplate.plugin('package', (moduleSource, module) => {
                    return moduleSource;
                });
            });
        });
    }
}

module.exports = TemplatePlugin;
