# Systemjs-react
通过 webpack 将 react 应用打包为 systemjs 模块，再通过 systemjs 在浏览器中加载模块

在微前端架构中，微应用被打包为模块，但浏览器不支持模块化，需要使用 systemjs 实现浏览器中的模块化。

systemjs 是一个用于实现模块化的 JavaScript 库，有属于自己的模块化规范。

在开发阶段我们可以使用 ES 模块规范，然后使用 webpack 将其转换为 systemjs 支持的模块。
