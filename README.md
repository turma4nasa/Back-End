# 🚀 API Projeto Imobiliária  

## 👨‍💻 Entidades utilizadas no projeto até o momento
```bash
- # Auth
- $ cuida da autenticação da api.
- # Photos
- $ Registra as fotos no Sistema.
- # Properties
- $ É a entidade responsavel por criar os imóveis.
- #  User
- $ E por último a entidade de user que é responsavel pelo usuário.
```

## 🛣️ Rotas da API até o momento

### 🔵 GET /properties
- **Descrição**: Retorna todas os imóveis cadastrados no sistema.

### 🟢 POST /auth
- **Descrição**: Faz o login e retornar um token.
- **Corpo da Requisição**:
```javascript
{
email: "fulano@ciclano.com.br",
password: "senha1234"
}
```
### 🟢 POST /user/register
- **Descrição**: Cria uma tecnologia no bando de dados.
- **Descrição**: Deve ser passado o ID.
- **Corpo da Requisição**:
```javascript
{
name: "React Native"
}

```
### 🟢 POST /properties
- **Descrição**: Cria uma vaga no bando de dados.
- **Corpo da Requisição**:
```javascript
{
		titulo": "Casa gigante de ricooooooo",
		tipo": "locação",
		codigo": 99353005,
		cidade": "São Paulo",
		UF": "SP",
		descricao": "Apartamento- 3 dormitórios sendo 1 suíte, sala, cozinha, banheiro, área de serviço, churrasqueira, sacada e garagem",
		suite": 1,(por padrão começa como 0 mas pode ser adicionado ao criar o imobel, o tipo é number)
		quartos": 30,(por padrão começa como 1 mas pode ser adicionado ao criar o imobel, o tipo é number)
		vagagaragem": 10,(por padrão começa como 0 mas pode ser adicionado ao criar o imobel, o tipo é number)
		banheiros": 55,(por padrão começa como 1 mas pode ser adicionado ao criar o imobel, o tipo é number)
		valorCondominio": null,(por padrão começa como null mas pode ser adicionado ao criar o imobel, o tipo é number)
		IPTU": null,(por padrão começa como null mas pode ser adicionado ao criar o imobel, o tipo é number)
		precoAluguel": 20000,(por padrão começa como null mas pode ser adicionado ao criar o imobel, o tipo é number)
		precoVenda": null, (por padrão começa como null mas pode ser adicionado ao criar o imobel, o tipo é number)
		fotos: [](as fotos enviadas seram armazenadas aqui, somenteo id delas)
}
```



### Detalhes Adicionais
- **Autores da Api:** [Gabriel Anacleto](https://www.linkedin.com/in/gabriel-anacletoo/) [Guilherme](https://github.com/syus13)
- **Contatos:** gabrielanacleto159@live.com
