---
layout: default
title: Home
---
<h1>{{ "Hello World!" | downcase }}</h1>
<div id="screen"></div>
<button>RUN</button>
<button>reset</button>
<script>
var screen = document.getElementById("screen");
  screen.innerHTML(0);
</script
