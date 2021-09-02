import baseConfig from './rollup.config.base.js'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
    ...baseConfig,
    plugins: [
        ...baseConfig.plugins,
        serve({
            port: 9090,
            contentBase: ['dist', 'examples/brower'],
            openPage: 'index.html',
        }),
        livereload({
            watch: 'examples/brower',
        })
    ]
}
