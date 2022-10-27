//	const getMessage = () => "Hello World";
//	document.getElementById("output").innerHTML = getMessage();

	const App = () => {
	  return (
		<div id="hoge" className="fuga">
		  <h1>Hello, World! React</h1>
		</div>
	  );
	};
	const container = document.getElementById('screen');
	const root = ReactDOM.createRoot(container);
	root.render(<App />);