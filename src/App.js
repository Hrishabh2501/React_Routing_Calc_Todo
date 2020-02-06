import React from 'react';
import './App.css';

class ListItem extends React.Component{


  constructor(props)
  {
    super(props);
    this.state={
    ch:this.props.value[this.props.value.length-1],
    cboxkey:false
    }
  this.strike=this.strike.bind(this)
  } 
  strike()
  {

    this.setState({cboxkey:true})

  }
render()
{
  return(
    <li id="li_items">
    <input type="checkbox" id={this.state.cboxkey}  className={this.state.cboxkey?'undone':'done'}  onChange={this.strike}></input>{this.state.ch}
    <button id="btn_done">DONE</button>
  </li>
  )
}
}

class List extends React.Component{
  
  render(){
    return(
    <ol id="li">
    {
      this.props.items.map((item,i) => <ListItem key={i} value={this.props.items}  />)
    }
  </ol>
    )
  }
} 

class TodoList extends React.Component
{   
  
  constructor(props)
  {
    
   super(props);
    this.state={
      inputValue:'',
      listitem:[]
    }
    this.click=this.click.bind(this) 
    this.handleItemClick=this.handleItemClick.bind(this) 
    // this.ItemClick=this.ItemClick.bind(this)  
  }
  
  
  handleNameOnChange(e) {
    this.setState({
      inputValue: e.target.value  
      
    });
  }

  click(e)
  {    
    const { inputValue, listitem } = this.state;
    if (inputValue) {
      const nextState = [...listitem, inputValue];
      this.setState({ listitem: nextState, inputValue: ''});
      
    }
    
  }

  handleItemClick(item)
  {
  
   console.log(this.state.listitem ) 
    
  }

   render(){
     
  return (
    <div className="App">
      <header className="App-header">      
    
      <h1>TO-DO LIST</h1>     
    
      </header>
      <div>
        <input type="text" id="text_add" placeholder="whats stuffs you want to do....?" value={this.state.inputValue}  onChange={ (e) => this.handleNameOnChange(e) }></input>
        <button id="btn_add" onClick={this.click}>Add It</button>
        {/* <input type="button" id="btn_add" onClick={this.click}  >add it!!</input> */}  {/* input type for button won't work when render */}
        {/* <p>{this.state.a}</p> */}
        </div>
        
        <List items={this.state.listitem} text={this.state.inputValue} onItemClick={this.handleItemClick} id="item"></List>
           
    </div>
  );
}

}
export default TodoList;
