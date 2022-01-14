import './App.css';
import axios from 'axios'
import { Component } from 'react';

class App extends Component {
  state = {
quotes:[]
  }
  componentDidMount(){
    axios.get ("https://jsonplaceholder.typicode.com/posts ")
    .then(res =>{
      const quotes = res.data;
      this.setState ({quotes})
      // console.log(quotes)
    })
  }
  render(){
  return (
    <div className="App">
{this.state.quotes.map(quotes =>
<div key={quotes.id} className='card'>
  <h3>{quotes.title}</h3>
  <p>{quotes.body} </p>
</div>)
}
    </div>
  );
}
}

export default App;
