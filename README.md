Datatables - Custom Sorting
===========================

> This is an example of how to implement custom sorting for HTML input elements with [DataTables 1.9.4](http://legacy.datatables.net/ref) and [jQuery 1.9.1](http://jquery.com/).

Usage
-----

> See <a href="http://danilojrr.github.io/datatables-custom-sorting/">this page</a> for more detail.

<ol>
<li>Put jQuery and DataTables scripts in your page.</li>
<p>
<pre><code>&lt;script src="path/to/jquery.min.js"&gt;&lt;/script&gt;
&lt;script src="path/to/jquery.dataTables.js"&gt;&lt;/script&gt;</code></pre>
</p>
<p>How to use and style? Check the <a href="http://datatables.net">DataTables</a> website. But remember that we are using the 1.9.4 version. So, check the <a href="http://legacy.datatables.net/ref">docs of the legacy API</a>.</p>
<li>Put the custom sorting javascript file after dataTables.js file.</li>
<p>
<pre><code>&lt;script src="path/to/dataTables.customSorting.js"&gt;&lt;/script></code></pre>
</p>
<!-- <li>In the <code>&lt;th&gt;</code> element, set a <code>data-sorting-type=""</code> attribute.</li> -->
<li>Set your table markup.</li>
<p>
<pre><code>&lt;table&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;Product Name&lt;/th&gt;
            &lt;th&gt;Warranty Lost?&lt;/th&gt;
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
<li>Now setup the DataTables plugin with these options.</li>
<pre><code>$('table').dataTable({
    "aoColumns": {
        null,
        "sSortDataType": "checkbox"
    }
});</code></pre>
<p>You must set an option called <code>aoColumns</code> to the DataTables setup. Each property of it represents the <code>th</code> of the table element.</p>
<p>Where you want the default sorting behavior of DataTables, set null for that property. And for a custom sorting, set the <code>sSortDataType</code> property with a valid custom sorting type: <code>checkbox</code>, <code>radiobutton</code> or <code>select</code>.</p>
<li>That's it! Now you can sort the column of the example with checkboxes.</li>
</ol>