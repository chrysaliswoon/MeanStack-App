//? Acts as a gateway between you and the internet

const BACKEND = 'http://localhost:8080'

const proxy_config = [
    {
        context: ['/api/**'],
        target: BACKEND,
        secure: false
    }
]

module.export = proxy_config