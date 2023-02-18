import pino from 'pino';
const logger = pino();

class BasicPlugin {
    constructor({ message }) {
        this.message = message;
    }

    /**
     * @name apply
     * @description apply is invoked by the Compiler on "Registration"
     * @param {Compiler} compiler - The Compiler instance
     *
     * Calling `compiler.plugin('some-event', (someState) => {})` allows one to "plug into" the compiler
     * 1. Listen to events and update state/add side effects
     * 2. Perform additional functionality through the compiler/compilation life cycle
     */
    apply(compiler) {
        compiler.plugin('run', (compiler, cb) => {
            logger(this.message);
            cb();
        });
    }
}

module.exports = BasicPlugin;
