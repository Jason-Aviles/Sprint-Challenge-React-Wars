import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios'
import StarWarsList from './components/StarWarsList'
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


const [Data ,setData] = useState([])
const [isLoading,setIsLoading]=useState(false)
useEffect(
  ()=> fetchDate(),[]
)



const fetchDate = ()=>{
axios.get('https://swapi.co/api/people/').then(res => setData(res.data.results),setIsLoading(true)).catch(err => console.log(err))
}




  return !isLoading ? <div>loading</div> :(
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div><StarWarsList Data={Data}/></div>


    </div>
  );
}

export default App;
