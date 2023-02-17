# Semantic Tags
> tags that are used to give some meaning to the HTML content. These includes: Div, nav, ul, strong, p, footer, article,  etc. and similar tags.

# Meta Tags
> meta tag defines the metadata of the web page. It has two attributes.
* `name`: describes the name of the metadata.
* `content`: describes the value of the metadata.

## Metadata
> Data about other data. in this case, data about web contents.

## UX wit Metatags
> the Open Graph Protocol is a set of metadata rules that allows web pages to describe themselves to social networks. Social media platforms use these meta tags to create a preview of the shared web page.    
```html
<meta property="og:title" content="UX with Meta" />
```

# Form and Validation
> Form validation is a process
that ensures that the data entered by
the user in a form is valid
and conforms to rules defined by the developer. there are two types of validation: 
* `Client-Side Validation`: it is done in the frontend of the website when the user starts filling their data in the form. For example, if the user doesn't enter the correct email, they will get a message of invalid email. This can be done using specific input type.
* `Server-side Validation`: it is done in the backend of the website to prevent from malicious data entry and code bleach. It can perform more complex checks like database checks and requirements.

## Field Set
> field set groups the imput elements. If you do not add a fieldset element to each radio button, all radio buttons will belong to the same group.    

## Form Submission Methods
>  The HTTP POST method is more secure than the HTTP GET method. When a form is submitted using the Post method, the form data is inserted into the content of the HTTP request instead of appended at the end of the URL as is done with the GET method.
* `GET`: data transmit to server via the address in the URL bar of the web browser, URL lenght is limited to 2000 chars by browser, lack of security 
* `POST`: data transmit to server via the body of the HTTP request

## 