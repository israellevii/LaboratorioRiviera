<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laboratório Riviera</title>
    <style>
        body { font-family: Arial, sans-serif; }
        #content { display: none; }
    </style>
    <script>
        function checkPassword() {
            var password = document.getElementById("password").value;
            if (password === "suaSenhaSecreta") {
                document.getElementById("login").style.display = "none";
                document.getElementById("content").style.display = "block";
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
        <input type="password" id="password">
        <button onclick="checkPassword()">Entrar</button>
    </div>
    <div id="content">
        <!-- Conteúdo do easter egg aqui -->
        <h1>Bem-vindo ao Laboratório Riviera</h1>
        <p>Parabéns, você encontrou o segredo!</p>
        <p>Aqui está o diário digital do Dr. Victor Gomes:</p>
        <a href="link_para_o_diario">Clique aqui para acessar</a>
    </div>
</body>
</html>

