[code lang="html"]
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laboratório Riviera</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        #login, #content1, #content2 {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            display: none;
        }
        #login {
            display: block;
        }
        input[type="password"] {
            padding: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
            width: 80%;
            font-size: 16px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #007BFF;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>
    <script>
        function checkPassword() {
            var password = document.getElementById("password").value;
            if (password === "senha1") {
                document.getElementById("login").style.display = "none";
                document.getElementById("content1").style.display = "block";
            } else if (password === "senha2") {
                document.getElementById("login").style.display = "none";
                document.getElementById("content2").style.display = "block";
            } else {
                alert("Senha incorreta, tente novamente.");
            }
        }
    </script>
</head>
<body>
    <div id="login">
        <h1>Laboratório Riviera</h1>
        <p>Por favor, insira a senha para acessar o conteúdo:</p>
        <input type="password" id="password" placeholder="Digite a senha">
        <button onclick="checkPassword()">Entrar</button>
    </div>
    <div id="content1">
        <h1>Bem-vindo ao Laboratório Riviera</h1>
        <p>Parabéns, você encontrou o segredo!</p>
        <p>Aqui está o diário digital do Dr. Victor Gomes:</p>
        <a href="link_para_o_diario">Clique aqui para acessar</a>
    </div>
    <div id="content2">
        <h1>Segredo Adicional</h1>
        <p>Você encontrou um segredo especial!</p>
        <p>Aqui estão documentos secretos do Laboratório Riviera:</p>
        <a href="link_para_os_documentos">Clique aqui para acessar</a>
    </div>
</body>
</html>
[/code]
