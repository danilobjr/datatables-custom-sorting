# Datatables - Custom Sorting

This is an example of how to implement custom sorting for HTML input elements with [DataTables 1.9.4](http://legacy.datatables.net/ref) and [jQuery 1.9.1](http://jquery.com/).

## Usage

There is a link for a demo <a href="http://danilojrr.github.io/datatables-custom-sorting/">here</a>.

First of all, put the DataTables css file

```html
<link rel="stylesheet" href="path/to/jquery.min.js" />
```

Put jQuery and DataTables scripts in your page

```html
<script src="path/to/jquery.js" />
<script src="path/to/jquery.dataTables.js" />
```

Check the [DataTables](http://datatables.net) website for how to style and use its API. But remember that we are using the 1.9.4 version. So, check the [docs of the legacy API](http://legacy.datatables.net/ref).

Put the **custom sorting** javascript file after dataTables.js file.

```html
<script src="path/to/dataTables.customSorting.js" />
```

Set your table markup. You must use `<thead>` and `<tbody>` tags in the table.

```html
<table>
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Warranty Lost?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Remote Controlled Car</td>
      <td><input type="checkbox" value="true" /></td>
    </tr>
  </tbody>
</table>
```

Now setup the DataTables plugin with these options.

```javascript
$('table').dataTable({
  "aoColumns": {
    null,
    "sSortDataType": "checkbox"
  }
});
```

You must set an option called `aoColumns` to the DataTables setup. Each property of it represents the `<th>` of the table element. Where you want the default sorting behavior of DataTables, set null for that property. And for a custom sorting, set the `sSortDataType` property with a valid custom sorting type: `checkbox`, `radiobutton` or `select`.

That's it! Now you can sort the column of the example with checkboxes.

## DataTables Factory - Plus Content

So far, so good. But I also implemented a factory for DataTables plugin. Thus, you can instantiate DataTables and apply the custom sorting very easliy.

To use it, with jQuery, DataTables and custom sorting js files in place, like we saw before, you need to put the **factory** file after the **custom sorting** file.

```html
<script src="path/to/dataTables.customSorting.js" />
<script src="path/to/dataTables.factory.js" />
```

Set the `data-sorting-type=""` attribute to the desired `<th>` element in your table.

```html
<table>
  <thead>
    <tr>
      <th>Product Name</th>
      <!-- HERE -->
      <th data-sorting-type="checkbox">Warranty Lost?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Remote Controlled Car</td>
      <td><input type="checkbox" value="true" /></td>
    </tr>
  </tbody>
</table>
```

The valid types for custom sorting attribute are <code>checkbox</code>, <code>radiobutton</code> and <code>select</code>.

Now, all you need to do is call the `init()` method from the `dataTablesFactory` object.

```javascript
dataTablesFactory().init();
```

Done! =]

The factory will see that you desire to sort the column with the `data-sorting-type=""` attribute and it configure DataTables for you.

## API

All methods of the API are chainable. So, doesn't matter the order you call them, except for the <code>init()</code> method. It need to be the last one.

### `init()`

**Description**: Initializes the DataTables.

**Parameters**: None.

**Returns**: DataTables Object.

Example

```javascript
dataTablesFactory().init();
```

### `selector()`

**Description**: Specify a selector for the table.

**Parameters**: jQuery Selector.

**Returns**: DataTables Factory API.

Example

```javascript
dataTablesFactory().selector("#my-table").init();
```

### `setup()`

**Description**: Set the DataTables options. You can see all options on the [DataTable legacy docs](http://legacy.datatables.net/ref).

**Parameters**: Javascript Object Literal.

**Returns**: DataTables Factory API.

Example

```javascript
dataTablesFactory()
  .selector("#myTable")
  .setup({
    bPaginate: false,
  })
  .init();
```
