# Match HTML

Complete the function `matchHTML` which is to check if a some HTML is properly closed. The function will take in an array of words and html tags. So the HTML code `<p>Hello world</p>` will be sent to the function as an array like below:

```
['<p>','Hello','world','</p>']
```

 For now, we only support `<h1>`, `<p>` and `<ul>` and `<li>`. The function returns true if all tags are properly closed, false if otherwise.

The following HTML is considered to be properly closed:
```
<h1>Hello</h1>
<p>Welcome!</p>
```
For each opening html tag, there is a corresponding closed one. 

The example below is not properly closed:
```
<h1>Hello<p>Abc</h1></p>
```
The closing `</h1>` tag comes before the closing `</p>` tag.

Another example of improperly closed tags (the `<ul>` is not properly closed):

```
<ul>
 <li>Hi</li>
 <li>Hello</li>

```

One last case of improperly closed tags:

```
<ul>
 <li>Hi
 <li>Hello</li>
</ul>
```
