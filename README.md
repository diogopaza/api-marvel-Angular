<h1>API-marvel-Angular</h1>
<h2>Requisitos</h2>
<ul>
    <li>Angular CLI</li>
    <li>NodeJs</li>
    <li>Angular Material</li>
</ul>
<h2>API da Marvel</h2>
<p>É necessário fazer um cadastro para obter uma public key e uma private key no site <a href="https://developer.marvel.com/" target="_blank"></a>.</p>
<p>Segue um exemplo de como obter os dados da api</p>
<p>http://gateway.marvel.com/v1/public/characters?ts=<strong>timestamp-conjunto de strings definidas pelo usuario</strong>&apikey=<strong>SUACHAVEPUBLICA</strong>&hash=<strong>hash md5 gerado da string timestamp+privatekey+publickey</strong></p>

