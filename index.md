---
layout: default
title: Home
---
<h1>{{ "Hello World!" | downcase }}</h1>
<div id="screen"></div>
<button id="RUN">RUN</button>
<button>reset</button>
<script>
var screen = document.querySelector("#screen");
screen.innerHTML = 0;
function myFunc(){
  alert("Hello world");
}
var run = document.querySelector("#RUN");
run.addEventListener('click', myFunc);
</script>
