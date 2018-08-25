# correios-rest-api

📦  API REST para rastreamento de pacotes/objetos enviados via Correios 📦

- git clone https://github.com/edilsonborges/correios-rest-api.git
- cd correios-rest-api
- npm i ou yarn
- npm start ou yarn start
- o serviço irá inicar na porta 5150
- requisição get: http://localhost:5150/AA123456789BR
- resultado: {"versao":"3.0","quantidade":"1","pesquisa":"Lista de Objetos","resultado":"Todos os eventos","objeto":[{"numero":"AA123456789BR","evento":[{"tipo":"BDI","status":"26","data":"31/07/2018","hora":"08:14","criacao":"31072018081409","descricao":"Destinatário não retirou objeto na Unidade dos Correios","detalhe":"Objeto será devolvido ao remetente","recebedor":{},"unidade":{"local":"AC MARACAJU","codigo":"79150970","cidade":"MARACAJU","uf":"MS","sto":"00011595","tipounidade":"Agência dos Correios","endereco":{"codigo":"27818","cep":"79150970","logradouro":"AV JOAO PEDRO FERNANDES, 2500","localidade":"MARACAJU","uf":"MS","bairro":"CENTRO","latitude":"-21.625949","longitude":"-55.1598839"}},"cepDestino":"0000000","prazoGuarda":"0","diasUteis":"0","dataPostagem":"20/04/2010"},{"tipo":"LDI","status":"02","data":"10/07/2018","hora":"15:59","criacao":"10072018155929","descricao":"Objeto disponível para retirada em Caixa Postal","unidade":{"local":"AC MARACAJU","codigo":"79150970","cidade":"MARACAJU","uf":"MS","sto":"00011595","tipounidade":"Agência dos Correios","endereco":{"codigo":"27818","cep":"79150970","logradouro":"AV JOAO PEDRO FERNANDES, 2500","localidade":"MARACAJU","uf":"MS","bairro":"CENTRO","latitude":"-21.625949","longitude":"-55.1598839"}},"cepDestino":"0000000","prazoGuarda":"20","diasUteis":"0","dataPostagem":"20/04/2010"}]}]}

Obs: para enviar requisições sem a necessidade de escrever a porta na URL, configure um proxy reverso no seu servidor com um ServerName (exemplo: correiosrestapi.seudominio.com.br/AA123456789BR)
