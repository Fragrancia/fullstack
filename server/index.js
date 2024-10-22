import  Espress  from "express";

const app = Express()
app.use(Express.json())

//TIPOS DE ROTAS
//app.get: quando quer pegar infor,ação do servidor

app.post('/registro', (req, res) => {
    const {nome, sobrenome, email, senha, dataNascimento} = req.body
    if(!nome || !sobrenome || !email || !senha || !dataNascimento){
        res.send('nenhum campo pode ficar vazio')
        return
    }
    res.sen('ta funcionando aqui tmb')
}) 
app.post('/Login', (req, res) => {
    const {email, senha} = req.body
    if(!email || !senha){
        res.send('nenhum campo pode ficar vazio')
        return
    }
    res.sen('Login criado')
}) 
app.listen(8000)