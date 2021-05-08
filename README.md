# megahack5
Projeto para o Mega Hack 5

# Passos da instalacao
na pasta server rodar

npm install admin-bro @admin-bro/express

npm install express express-formidable

# rodar o projeto
yarn start

# Usuario e senha administrador

Usuario:admin@admin.com
Senha:admin


    router.use(express_session_1.default(Object.assign(Object.assign({}, sessionOptions), 
    { resave: true, saveUninitialized: true, secret: auth.cookiePassword, name: auth.cookieName || "adminbro" })));
    