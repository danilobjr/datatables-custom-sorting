Datatables - Custom Sorting
===========================

> This is an example of how to implement custom sorting for HTML input elements with [DataTables 1.9.4](http://legacy.datatables.net/ref) and [jQuery 1.9.1](http://jquery.com/).

Usage
-----

<ol>
<li>Put jQuery and DataTables scripts in your page</li>
<p>
<pre><code>&lt;script src="path/to/jquery.min.js"&gt;&lt;/script&gt;
&lt;script src="path/to/jquery.dataTables.js"&gt;&lt;/script&gt;</code></pre>
</p>
<p>How to use and style? Check the [DataTables](http://datatables.net) website. But remember that we are using the 1.9.4 version. So, check the [docs of legacy API](http://legacy.datatables.net/ref).</p>
<li>Put the custom sorting javascript file after dataTables.js file</li>
<p>
<pre><code>&lt;script src="path/to/dataTables.customSorting.js"&gt;&lt;/script></code></pre>
</p>
<li>In the <code>&lt;th&gt;</code> element, set a <code>data-sorting-type=""</code> attribute.</li>
<p>
<pre><code>&lt;table&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;Product Name&lt;/th&gt;
            &lt;th data-sorting-type="checkbox"&gt;Warranty Lost?&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;Remote Controlled Car&lt;/td&gt;
            &lt;td&gt;&lt;input type="checkbox" value="true"&gt;&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
</p>
<li>The valid types for the <code>data-sorting-type=""</code> attribute is one of the following</li>
<p>
<pre><code>data-sorting-type="radio"
data-sorting-type="checkbox"
data-sorting-type="select"</code></pre>
</p>
<li>Now setup the dataTables plugin with these options</li>
<pre><code>$('table').dataTable({
    "aoColumns": {
        null,
        "sSortDataType": "checkbox"
    }
});</code></pre>
<li>That's it! Now you can sort that column with checkboxes</li>
</ol>


Usando o Bower
--------------

O  [Bower](http://bower.io/) é um gerenciador de pacotes web. Com ele a gente pode obter rapidamente bibliotecas e frameworks
(como o AngularJS, jQuery, Bootstrap) sem nem sequer abrir o browser. Consequentemente você não precisaria,
após baixar a biblioteca desejada, descompactar, copiar e colar pra pasta desejada.

Com o Bower, as coisas ficam muito mais fáceis. Basta você digitar um único comando e ele se encarrega de buscar
o pacote que você quer, baixa, descompacta e instala direto no seu projeto dentro de uma pasta definida por você.
Não acredita? Veja abaixo alguns dos comandos.

Pra procurar por um pacote (biblioteca), basta digitar o comando abaixo no prompt de comando
```
bower search NOME_DO_PACOTE
```

Ao achar o pacote que você procurou, é possível instalá-lo direto no seu projeto com o comando
```
bower intall NOME_DO_PACOTE
```

Pra atualizar um pacote já instalado, basta executar o comando
```
bower update NOME_DO_PACOTE_INSTALADO
```

Fácil, hein?! E caso você queira excluir algum pacote instalado no seu projeto, é só executar
```
bower uninstall NOME_DO_PACOTE_INSTALADO
```

Esses são os comandos básicos. A gente vai usar pra baixar nossas bibliotecas durante o curso.

Pra saber mais sobre o Bower, entre no site [bower.io](http://bower.io/).