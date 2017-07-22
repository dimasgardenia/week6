var body = document.body;
var mainDiv = document.createElement('div');
var mainDivAttrId = document.createAttribute('id');
mainDivAttrId.value = 'main';
mainDiv.setAttributeNode(mainDivAttrId);

body.appendChild(mainDiv);

var insideMainDiv = document.createElement('div');
insideMainDiv.setAttribute('id', 'content');
mainDiv.appendChild(insideMainDiv);


var h1 = document.createElement('h1');
var h1Text = document.createTextNode('Judul Post');
h1.appendChild(h1Text);
insideMainDiv.appendChild(h1);


var span = document.createElement('span');
var spanText = document.createTextNode('Published on 12 May 2016');
span.appendChild(spanText);
insideMainDiv.appendChild(span);


var p = document.createElement('p');
var pText = document.createTextNode('Lorem Ipsum Dolor Sit Amet');
p.appendChild(pText);
insideMainDiv.appendChild(p);

var button = document.createElement('button');
var buttonText = document.createTextNode('Share this Post');
button.appendChild(buttonText);
button.addEventListener('click', function() {
  alert('berhasil');
});

insideMainDiv.appendChild(button);


var h1 = document.createElement('h1');
var h1Text = document.createTextNode('Judul Post 2');
h1.appendChild(h1Text);
insideMainDiv.appendChild(h1);


var span = document.createElement('span');
var spanText = document.createTextNode('Published on 13 May 2016');
span.appendChild(spanText);
insideMainDiv.appendChild(span);


var p = document.createElement('p');
var pText = document.createTextNode('Lorem Ipsum Dolor Sit Amet');
p.appendChild(pText);
insideMainDiv.appendChild(p);


var button = document.createElement('button');
var buttonText = document.createTextNode('Share this Post');
button.appendChild(buttonText);
button.addEventListener('click', function() {
  alert('berhasil');
});

insideMainDiv.appendChild(button);