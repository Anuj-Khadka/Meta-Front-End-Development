# How does the internet work?
> When computers interconnect, networks form. Two or more networks are connected to each other through the switch. This switches interconnect with eachother forming the internet.

# Web Server
> A computer or system that provides services to the client/nodes/computers such as messaging or responses.
### Features of Web Server:
* website storage and administration
* security and database
* web requests        --------primary

# Website and Webpage
> Webpage is a document that gives us the information of a specific person or organization. Website is the collection of webpages hyperlinked to eachothers.

# How does web browsers work?
> Web browsers work on the request-responce cycle. A cient sends a request to the server and the server responses to the request.

```
https://search.com/index.html
```
| https:// | search.com | index.html |
|----------|------------|------------|
| protocol | domain     | path file  |

## Web hosting:
> it is a service provided by a company to rent and host our website on their web server

### Types of web hosting:
* `Shared` : there a server is divided as many fragments and multiple websites are hosted in each fragment; cheap, for small business, free with limitation
* `Virtual-private` : dedicated storage and administration; expensive
* `Dedicated` : only for you; very expensive
* `Cloud : hosting website in a cloud(also stored in a physical server--if server is damaged, cloud will be hepful); very expensive, pay as per need, no limitation, secure and scalable

# IP Address:
> It is just like a postal code of a place, which assigns unique and specific address to the computer. It is of two types: IPv4 and IPv6. When the data is transmitted, the location of the sender and reciever is considered as IP packets and the actual data is as payloads.

Their might be various problems with data delivery such as a normal post mail derivery e.i `out of order`, `corrupt or data damage` and `lost of data`. Therefore, we have the other two protocols to look at this matter.
* TCP: it helps us solve all this three problems that can happen to a data
* UDP(User Datagram Protocol): it prevents only from data damage or corrupt such as messages and calls


# HTTP:
> core operational protocol in the `WWW` for transferring web documents.

## HTTP request:
```
 GET / HTTP/1.1 
 Host: developer.mozila.org
 Accept-Language: en
```
| GET | / | HTTP/1.1 | Host: developer.mozila.org <br> Accept-Language: en |
|-----|---|----------|-----------------------------------------------------|
| http method | path | http version | headers                              |


### HTTP methods:
| GET      |  retrive information from the server |
| :-----   |--------------------------------------|
| POST     |  send information to the server |
| PUT      |  update information in the server |
| DELETE   |  delete info in the server |
**the most popular HTTP versions are 1.1 and 2.0**

## HTTP response:
```
HTTP/1.1 OK 200 
(version, response status, response status code)
```
| Informational     |  100-199 |
| :-----   |--------------------------------------|
| Successful    |  200-299 |
| Redirectional      |  300-399 |
| Client-side error   |  400-499 |
| Server-side    |  500-599 |
**HTTPS is secure and encrypted**

> when your computer is connected to the network, the DHCP is used to assign IP address to the computer. It keeps track of the computer in the network and their IP addresses.

# Framework and Libraries
## Framework: 
> structure for the developers to work with; a blueprint. It in not that flexible. 

| Advantages| Disadvantages |
|:------------| ------------ |
| time saving | not flexible |
| high functionality | compatibility |
| structure |       |

## libraries: 
> pieces of code for a specific purpose or function. It in flexible. 

| Advantages| Disadvantages |
|:------------| ------------ |
| easily replacable | selecting library set |
|  | compatibility |
|  |       |

**Overall: `faster development`, `less error`, `time saving`**

# API
> Appication Programming Interface.
> set of function and procedures to create an application that access the features or data of a system. 
> Eg. Browser API(DOM API, Geolocational API), REST API, Sensor-based API(IoT)

## REST API
> Representation State Transer API
> a set of priniciple helps to build other efficient APIs.
> provides responses to requests

# IDE
> Integrated Development Environment
> software to build application.

## Features:
* syntax highlighting
* error highlighting
* IntelliSense
* auto-complete
* refactoring  -------------------------- change the structure of the program without disturing its functions
