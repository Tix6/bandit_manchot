# Training  

## One Armed Bandit  

The goal of this exercise is to learn how to use es6 Promises.  

We will build a kind of one armed bandit like this: The board is made of 5 “fruits”, a fruit is an icon [font-awesome](https://fortawesome.github.io/Font-Awesome/icons/) and a color.    

Each time application is loaded we have to display 5 icons {name, color} (randomizedvalues and time to load).    

Application starts with 5 spinners, then display fruits when it gets them.

Build an application made of react, redux to satisfy needs.  
You should have an action called ‘loadFruits’, that launch ‘loadFruit’ in parallel.  

Function ”loadFruit” returns a Promise and should not access the redux store (neither ‘dispatch’, nor ‘getState’).  
After a random delay, each “loadFruit” call (it simulates an AJAX request), returns a promise fulfilled with a random fruit (color, icon) that must be displayed. When all fruits are fulfilled, replace them by {icon: ‘paper-plane’, color: “#cd4436”}.  

You can learn about promises here:

* [Avoid callback hell](http://jamesknelson.com/grokking-es6-promises-the-four-functions-you-need-to-avoid-callback-hell/)  

* [MDN Promises](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise)  
