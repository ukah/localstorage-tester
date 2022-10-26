---
layout: default
title: Home
---
<h1>{{ "Hello World!" | downcase }}</h1>
<div id="screen"></div>
<button onclick="myFunc">RUN</button>
<button>reset</button>
<script>
var screen = document.getElementById("screen");
  screen.innerHTML(0);
  function myFunc(){
    alert("Hello world");
  }
</script>
