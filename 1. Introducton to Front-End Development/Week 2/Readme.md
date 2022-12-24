**title, desc, sntax with example, and maybe output**

# HTML
> hypertext markup language; a basic structure assembled with different components like tag and elements.
* first website | 1989 --> Tim Berners Lee
* 1st html version | 1991
```html
<html>
<head>
    <title>Basic Syntax</title>
</head>
<body>
    <!-- contents -->
</body>
</html>
```

## Heading
> heading tag is used to gie titles and subtitles to the page. There are 6 heading tags starting from `<h1>` to `<h6>`, where h1 is the largest heading tag and h6 is the smallest.
```html
<h1>This is the largest heading</h1>
<h2>This is the second heading</h2>
<h3>This is the third heading</h3>
<h4>This is the forth heading</h4>
<h5>This is the fifth heading</h5>
<h6>This is the smallest heading</h6>
```


## Paragraph
> it is a tag for some description or text in the webpage.
```html
<p>this is a paragraph tag and you can add some related content in this tag</p>
```


## Line Break
> it is used to break the line in the page. It is a single tag.
```html
<p>here I am using a paragraph tag.<br /> This will appear in the second line now.
```


## Strong
> it is used to give a emphasis or stress to a certain content.
```html
<p>The fun park was <strong>extremely</strong> huge</p>
```


## Bold
> it is used to kind of highlight or make a text bold.
```html
<p>The fun park was <b>huge</b></p>
```


## Italic
> it is used to off-set or italic some content in the page like name or place or so.
```html
<p>The book was written by<i>Anuj Khadka</i></p>
```


## Emphasis
> it is used to give a impact or stress to a certain content.
```html
<p>The fun park was <em>extremely</em> huge</p>
```


### Italic vs Emphasis
> Italic is used for the off-set text, like title, name, etc. and Emphasis is used to give stress/impact to the text like very, really, so.


## List
> List allows the developers to make a list of different items, maybe nav, links or so. There are two types of lists i.e `ordered list` and `unordered list`. Ordered list gives us the list in a sequencial or serial manner with indexing(like 1, a, i), while unordered list gives us the list with no serial index. Instead it uses bullets, disc etc.
```html
Unordered list is defined by <ul>
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
</ul>

Ordered list is defined by <ol>
<ol>
    <li>Apple</li>
    <li>Mango</li>
    <li>Banana</li>
</ol>
```
### Defination list:
> it's used in situations when we have to give a description to a topic or title. It is a name-value group list with `<dt>` for the title and `<dd>` for the description.
```html
<dl>
    <dt>Water</dt>
    <dd>Drink water, stay healthy</dd>
    <dt>Air</dt>
    <dd>Something that is meant to feel, not see.</dd>
```


## Div
> it is a sematic tag which acts as a container to group elements creating a structure such as, card or form or so.
```html
<div>
    <h1>Math</h1>
    <p>We offer a variety of math courses in this page.</p>
    <button><a href="index.html">View More</a></button>
</div>
```


## Comment
> Comments are basically used for documentation of the code and are not executed as an output.
```html
<!-- This is a comment and down we have a small card on math course-->
<div>
    <h1>Math</h1>
    <p>We offer a variety of math courses in this page.</p>
    <button><a href="index.html">View More</a></button>
</div>
```


## Hyperlinks
> Hyperlink in the process of linking an element to another element or page or other page's element with the help of anchor tag(`<a>`).
```html
<a href="https://google.com" target="_blank">Open Google</a>
```
**Anchor tag uses a `target` attribute to define how the link should be open, whether in the same page(_parent) or a new page(_blank).**


## img
> it is used to insert an image to the webpage. <img> tag is a single tag and has various attributes to define the property of the image.

| attributes | functions |
|:-----------|:----------|
| src        | gives the path of the image where it is stored |
| alt        | short caption about the img that appears when img is not able to load |
| srcset     | makes an img responsive by assigning the screen viewpoint and img's height and width|
| height     | describes the height of the image |
| width      | describes the width of the image |
```html
    <img src="image.png" alt="example" height="250px" width="100px" />
```


## Table
> it is used to create a tabular structure inside the webpage. Table tag has various tags within it like `thead`, `tbody`, `tr`, `td` and so on.
```html
<table>
    <thead>
        <tr>
            <td>Name</td>
            <td>Age</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Anuj Khadka</td>
            <td>16</td>
        <tr>
    </tbody>
</table>
```

## form(different input types)
=======
## Table
## Form(different input types)
## DOM


<br><br>
-----------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------
<br><Br>


# Web Accessibility
> allows user with disabilities to use and interact with websites. Example: screen reader, voice recognition etc.
*good html ------> high accessibility*
**`ARIA: Accessible Rich Internet Application` has techniques to improve accessibility**


<br><br>
-----------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------
<br><Br>

# CSS
> describes how to display html elements in the screen.
```css
/* Syntax */

/* selector{
    declatation-block
} */

p{
    /* property: value; */
    color: #1f1f1f;             
    background-color: #272727;
}
```

## Ways to write CSS:
* External
* Internal
* Inline

## Types of CSS Selectors:
* Id (#id-name)
* class (.class-name)
* Tag (div)
* Descendent (div h1)
* :pseudo-class (h1:hover)


## Box Model

<pre align="center">

Margin
|-----------------------------|
|           Border            |
|   |---------------------|   |
|   |       Padding       |   |
|   |   |-------------|   |   |
|   |   |   Content   |   |   |
|   |   |-------------|   |   |
|   |                     |   |
|   |---------------------|   |
|                             |
|-----------------------------|

</pre>