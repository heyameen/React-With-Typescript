import './App.css';

import React, {useState} from 'react';

import AddToList from './components/AddToList';
import List from './components/List'
import logo from './logo.svg';

export interface IState {
  people:{
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      age: 36,
      url:"https://hoopshype.com/wp-content/uploads/sites/92/2021/10/i_7f_e7_31_lebron-james.png?w=1000&h=600&crop=1",
      note: "Allergic to staying on a team for more than 2 seasons"
    }
  ])

 return (
    <div className="App">      
        <h1> People invited to my party</h1>
        <List people={people}/>   
        <AddToList people={people} setPeople={setPeople}/>     
    </div>
  );
}

export default App;
