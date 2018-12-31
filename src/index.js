import React from 'react';
import ReactDOM from 'react-dom';

const labelText = 'Enter Your Name:';

function getButtonText() {
	return 'Click on me!';
}

const App = () => {
	return (
		<div>
			<label className="label" for="name">
				{labelText}
			</label>
			<input id="name" type="text" />
			<button style={{ backgroundColor: 'blue', color: 'white' }}>{getButtonText()}</button>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
