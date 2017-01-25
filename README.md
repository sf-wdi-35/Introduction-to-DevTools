![](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)
## Introduction to Chrome DevTools
### Why is this important?
Using Chrome DevTools is a great way to debug front-end files, measure performance and do opptimization of your website.

### What are the objectives?
In this lesson, we will go over the most important features of Chrome Developer Tools. By the end of this lesson, you will be able to:

 - Explain what DevTools is and what each tab does
 - Inspect HTML, CSS and JavaScript using Console and Element tabs
 - Inspect Network tab and discribe the provided data
 - Use Source tab to run JavaScript and debug scripts

### Where should we be now?
- Make sure you have Chrome installed. 
- You should alse be familiar with basics of HTML, CSS and JavaScript and how they work together to create a web page.

## What is DevTools?
[DevTools](https://developers.google.com/web/tools/chrome-devtools/?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3#execution-control ) is a group of built in tool for developers in Chrome browser to do debugging and find detailed information about web apps and web pages. Itis consisted of multiple tabs and each one focus on a specific aspect of an app. You can explore the HTML/CSS used in the webpage, debug JavaScript, view network and load performance.
 
There are three way to open DevTools:

1. open your Chrome browser and click on the three bar icon on the right side of your address bar. Go to More Tools -> Developer Tools.
2. Right click anywhere on the page and select Inspect. This method will open the Elements tab and highlights the selected element on the page.
3. Use the shortcut : ` cmd + option + j `. This shortcut will always open the console tag. You can use `i` instead of `j` to start from the tab you left off before. 


![](https://github.com/Sherri010/Intro-to-Chrome-DevTools/blob/master/overview.png)

 
 
 Now go ahead and open you DevTools using any of the 3 methods mentioned above. As you can see there are 9 tabs available and each one provides different set of data to help you debug or optimize your applications:


1. **Elements**: Inspect and edit the HTML & CSS of the DOM (Document Object Model)
2. **Console**: Run JavaScript in the browser
3. **Sources**: A graphical interface to the V8 debugger
4. **Network**: Evaluate network performance (refresh to see it in action)
5. **Timeline**: Evaluate page load performance (refresh to see it in action)
6. **Profiles**: Identify optimizations in the performance of an app or webpage.
7. **Application**: (Formerly "Resources"); Manage application storage
8. **Security**: Confirm whether the page you're viewing is secure
9. **Audits**: The Audit panel can analyze a page as it loads.

## Elements 
###### Tool for inspecting layout
 In this tab you can inspect:
 
 - HTML structure of the page
 - CSS styles applied to each element
 - Box Model
 - Event Listeners
 - Element Properties

Go to <a href="https://google.com">google.com</a> and open the elements tab in your DevTools. spend a minute and explore the html elements in the page and try to find the styles applied to them.

As you can see, this tab provides a hierarchical structure of the DOM. You can play around with the attributes,styles and find the size of each element in the page. This is a great way to find issues in the structural layer of your applications. You can also view the event listeners attached to elements.

## Console 
###### Tool for log information during developemnt and interact with DOM elements 
Similar to using Elements tab for finding bugs with the layout, we use console tab to view JavaScript error and log messages. You can run JavaScript code in the console as shown here:

![](http://jsforcats.com/images/console-variables.gif)
[image source](http://jsforcats.com/)

#### It's your turn!

Spend a few minutes and go through [Command Line API Reference](https://developers.google.com/web/tools/chrome-devtools/console/command-line-reference) and learn how to use console and interact with DOM. 

Going back to google.com, let's open the console:

<details>
<summary> Let's select the microphone element in the search field. Can you name selector attached to it?
</summary>
```
document.getElementById('element-id');
```
</details>
<details>
<summary> Now let's make the microphone disappear!
</summary>
```
document.getElementById('element-id').style.visibility="hidden";
```
</details>

**Tip** : you can have your console and elements tab open at the same time. How? go to you elements tab and press `esc`.

## Source
###### Tool for debuging JavaScript and loading local files
In this tab you can view web page's resources. You can view the javascript files. When you receive an error in console, if you click on the filename on the right hand, it will take you to source tab and highlights where the error happend.

![](https://abdulapopoola.files.wordpress.com/2016/03/snippets.gif?w=1200)
[image source](https://abdulapopoola.com)
### Snippets
Although we won't be using Snippets in our exercise, I would like to take a moment to show you what they do. Snippets allow you to run a small piece of code on any website.

Try this:

```
 var bod = document.querySelector('body');
    bod.onclick = function(e){
    this.style.transform = 'rotateZ(-40deg)';
   }

``` 
 spend 5 minutes and modify any page that you like by writing a short snippet and share it with your friends.
## Network
###### Tool to measure network performance

This tab shows information related to network activities,like the timeline of all the resources(including CSS, JS, img and etc) begin loaded or HTTP requests and responses. One of the coolest things you can do with this tab is to record your page while it's being loaded and identify which resources are available sooner than the other. This will come in handy at optimization.

![](https://developers.google.com/web/tools/chrome-devtools/images/before-reorder.png)
[image source](https://developers.google.com/web/tools/chrome-devtools/settings)

When DOM content is ready, a vertical blue line will appear in the timeline section. You can alo find the the exact timing on the bottom of the page.
A red vertical line in timeline shows when the window.onload event is ready.

![](https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/domcontentloaded.png)

[image source](https://developers.google.com/web/tools/chrome-devtools/settings) 

When inspecting this tab it is important to be familiar with  response status codes:

 - 1xx : Informational
 - 2xx : Successful
 - 3xx : Redirect 
 - 4xx : Client-error
 - 5xx : Server-error

check this out : [List of status codes](https://http.cat/)

![](https://developer.chrome.com/devtools/images/network-panel.png)
[img source](https://developer.chrome.com/devtools/images/network-panel.png)

If one of the resources failed to load, by checking this tab you can figure our where is problem is. Is it a server side issue? Is it bad request from client? 


## Individual Exsercise
  Now it is time for you to try to debug a few errors! First:
  
  - clone down this repo : `git clone repo-url`
  - navigate to your local repo : ` cd Intro-to-Chrome-DevTools`
  - go to challenges folder : ` cd challenges`
 

### Challenge 1
 - go to the first challenge : ` cd challenge1`
 - open the index file in browser: `open index.html`
 
As you can see I have lost my cats!! All three of them! and the elements page doesnt seem to be in the right place.

##### Step1: Find my cats!
  Explore the Elements tab and go through the DOM and their styles to find the three cats. Change the CSS styles to make the cats stick on the page. 
  
  Dont forget **not to refresh** the page or you will loose the changes.
  
##### Step2: Name the cats
   Aren't they cool?! if you click on them you should get an alert message from the cat introducing themselves. If they are not introducing themselves where would you look for possible bugs? There might not be visible error messages in the console but how else you can see script files?
 
### Challenge 2
- go back one folder from challenge1 to challenges: ` cd ..`
- go to second challenge : ` cd challenge2`
- open index file in browser ` open index.html`

Start in the console and look for error messages. If you find anything, go back to your text editor and modify your js file and test again until you can role the dice.

## Conclusion
As you can see Chrome DevTools is a powerful tool for web developers and knowing your way around it can help you pinpoint issues with your app faster. So make the DevTools your best friend!

- Explain what the Elements tab is and what kind of information it provides?
- If an event listener does not respond to clicking,where is the first place you check?
- How can you write snippets in your browser? 
- Explain what the networks tab does and record a page during loading process.


## Resources
- [Chrome DevTools reference](https://developers.google.com/web/tools/chrome-devtools/?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3)
- [developer.chrome.com](https://developer.chrome.com/devtools)
- [More practise on DevTools](http://discover-devtools.codeschool.com/)


