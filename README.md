Datatables - Custom Sorting
===========================

> This is an example of how to implement custom sorting for HTML input elements with [DataTables 1.9.4](http://legacy.datatables.net/ref) and [jQuery 1.9.1](http://jquery.com/).

Usage
-----

> See <a href="http://danilojrr.github.io/datatables-custom-sorting/">this page</a> for more detail.

<!-- <ol>
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
</ol> -->

<ol>
                <li>
                    <p>Put the DataTables css file</p>
                    <pre><code>&lt;link rel="stylesheet" href="path/to/jquery.min.js" /&gt;</code></pre>
                </li>
                <li>
                    <p>Put jQuery and DataTables scripts in your page.</p>
                    <pre><code>&lt;script src="path/to/jquery.js"&gt;&lt;/script&gt;
&lt;script src="path/to/jquery.dataTables.js"&gt;&lt;/script&gt;</code></pre>

                    <p>Check the <a href="http://datatables.net">DataTables</a> website for how to style and use its API. But remember that we are using the 1.9.4 version. So, check the <a href="http://legacy.datatables.net/ref">docs of the legacy API</a>.</p>
                </li>
                <li>
                    <p>Put the <strong>custom sorting</strong> javascript file after dataTables.js file.</p>
                    <p><pre><code>&lt;script src="path/to/dataTables.customSorting.js"&gt;&lt;/script&gt;</code></pre></p>
                </li>
                <li>
                    <p>Set your table markup. You must use <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code> tags in the table.</p>
                    <p><pre><code>&lt;table&gt;
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
&lt;/table&gt;</code></pre></p>
                </li>
                <li>
                    <p>Now setup the DataTables plugin with these options.</p>
                    <pre><code>$('table').dataTable({
    "aoColumns": {
        null,
        "sSortDataType": "checkbox"
    }
});</code></pre>
                    <p>You must set an option called <code>aoColumns</code> to the DataTables setup. Each property of it represents the <code>th</code> of the table element.</p>
                    <p>Where you want the default sorting behavior of DataTables, set null for that property. And for a custom sorting, set the <code>sSortDataType</code> property with a valid custom sorting type: <code>checkbox</code>, <code>radiobutton</code> or <code>select</code>.</p>
                </li>
                <li>That's it! Now you can sort the column of the example with checkboxes.</li>
            </ol>

DataTables Factory - Plus Content
---------------------------------

1. So far, so good. But I also implemented a factory for DataTables plugin. Thus, you can instantiate DataTables and apply the custom sorting very easliy.

    To use it, with jQuery, DataTables and custom sorting js files in place, like we saw before, you need to put the <strong>factory</strong> file after the <strong>custom sorting</strong> file.

    <pre><code>&lt;script src="path/to/dataTables.customSorting.js"&gt;&lt;/script&gt;
&lt;script src="path/to/dataTables.factory.js"&gt;&lt;/script&gt;</code></pre>

2. Set the <code>data-sorting-type=""</code> attribute to the desired <code>&lt;th&gt;</code> element in your table.

    <pre><code>&lt;table&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;Product Name&lt;/th&gt;
            &lt;th <strong>data-sorting-type="checkbox"</strong>&gt;Warranty Lost?&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;Remote Controlled Car&lt;/td&gt;
            &lt;td&gt;&lt;input type="checkbox" value="true"&gt;&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;</code></pre>

    The valid types for custom sorting attribute are <code>checkbox</code>, <code>radiobutton</code> and <code>select</code>.

3. Now, all you need to do is call the <code>instantiate()</code> method from the <code>dataTablesFactory</code> object.

    <pre><code>dataTablesFactory().instantiate();</code></pre>

    Done! =]

    The factory will see that you desire to sort the column with the <code>data-sorting-type=""</code> attribute and it configure DataTables for you.

Factory API
-----------

All methods of the API are chainable. So, doesn't matter the order you call them, except for the <code>instantiate()</code> method. It need to be the last one.

### instantiate()

**Description**: Initializes the DataTables.

**Parameters**: None.

**Returns**: DataTables Object.

Example
<pre><code>dataTablesFactory()<strong>.instantiate()</strong>;</code></pre>

### selector()

**Description**: Specify a selector for the table.

**Parameters**: jQuery Selector.

**Returns**: Factory API.

Example
<pre><code>dataTablesFactory()
    <strong>.selector('#myTable')</strong>
    .instantiate();</code></pre>

<h3>setup()</h3>

**Description**: Set the DataTables options. You can see all options on the <a href="http://legacy.datatables.net/ref">DataTable legacy docs</a>.

**Parameters**: Javascript Object Literal.

**Returns**: Factory API.

Example
<pre><code>dataTablesFactory()
    .selector('#myTable')
    <strong>.setup({
        "bPaginate": false
    })</strong>
    .instantiate();</code></pre>