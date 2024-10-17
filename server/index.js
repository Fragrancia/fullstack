import { createServer } from 'node:http'


const servidor = createServer((req, res) => {
    console.log('qualquer coiss')
    res.write('ta funcionando 2.0')

    return res.end()
})

servidor.listen(8000)