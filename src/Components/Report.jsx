import React from 'react';
import './Report.css';

const Report = () => {
    return (
        <div className="report">
            <div className="temp">
                
            </div>   
            <div className="titles">
                <div className="heading-report">
                    <h1>About</h1>
                </div>
                <div className="developers">
                    <p><b>This Website is Developed By :</b><br/>Aditya Singh Chauhan</p>
                </div>
            </div>
            <div className="about-content">
                <div id="heading-container">
                    <h2>What is My Quiz?</h2>
                    <img src="/NEO.png" alt="" id="about-img"/>
                </div>
                <p>According to one saying “knowledge is power”. There is infinite amount of knowledge in this world and gathering all that is not an easy task to do. World is looking for different alternatives ways to have easy access to knowledge and ways which would make conceiving knowledge easier. <br/><br/>
Quiz is one of the most popular and easiest way to test your knowledge out and at the same time to gain more of it. The problem with the offline quizzes is that participation in them is hard to do and organizing it involve more labor and cost. There is need of an alternative to solve all the problems the physical quizzes contains.<br/><br/>
The aim of this project is to develop a system which would allow users to have participation in online quizzes making learning easier and fun for its users. The web application built by us is fully GUI (Graphical User Interface) based so it ensures that its users would have good time using it.
</p>
                <hr/>
                <h2>Programming languages Used</h2>
                <p><b>HTML (Hyper Text Markup Language)</b><br/>
HTML is a markup language that defines the structure of your content. HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way. The enclosing tags can make a word or image hyperlink to somewhere else, can italicize words, can make the font bigger or smaller, and so on.
<br/><br/><b>CSS (Cascading Style Sheets)</b><br/>
Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable.CSS handles the look and feel part of a web page. Using CSS, you can control the color of the text, the style of fonts, the spacing between paragraphs, how columns are sized and laid out, what background images or colors are used, layout designs and variations in display for different devices and screen sizes as well as a variety of other effects.


<br/><br/><b>JSX (JavaScript XML)</b><br/>
JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code. The syntax is intended to be used by preprocessors (i.e., transpilers like Babel) to transform HTML-like text found in JavaScript files into standard JavaScript objects that a JavaScript engine will parse.
Basically, by using JSX you can write concise HTML/XML-like structures (e.g., DOM like tree structures) in the same file as you write JavaScript code, then Babel will transform these expressions into actual JavaScript code. Unlike the past, instead of putting JavaScript into HTML, JSX allows us to put HTML into JavaScript.
</p>
<p><b>Java Script</b><br/>
JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.
</p>
<hr/>
<h2>Libraries Used</h2>
<p><b>Axios</b><br/>
Axios is a Java Script library used to make HTTP requests from node.js or XML Http Requests from the browser that also supports the ES6 Promise API.
</p>
<p><b>React</b><br/>
React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
</p>
<p><b>Material-UI</b><br/>
Material-UI components work in isolation. They are self-supporting, and will only inject the styles they need to display. They don't rely on any global style-sheets such as normalize.css.</p>
<hr/>
<h2>Other Stuff Used</h2>
<p><b>Google Fonts</b><br/>
Google Fonts is a library of more than a thousand free and open source font families, an interactive web directory for browsing the library, and APIs for using the fonts via CSS and Android.
</p>
<p><b>Quiz API used</b><br/>
The web application created by us uses a Quiz API provided by ‘https://quizapi.io/’ to fetch questions from their server and displays it on our web application.
</p>

            </div>
            <div className="temp"></div> 
        </div>
    )
}

export default Report
