//Reactでユーザ定義のコンポーネントを使う場合は名前の先頭を大文字としよう

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

const btnClass = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
function Button(props){
	return <button id={props.name} className={btnClass}>{props.name}</button>;
}
function Btns(){
	return(
		<div>
			<Button name="RUN" />
			<Button name="runTest" />
			<Button name="getArray" />
			<Button name="getJSON" />
		</div>
	);
}
const rootDOM = ReactDOM.createRoot(
	document.getElementById('buttons')
);
rootDOM.render(<Btns />);