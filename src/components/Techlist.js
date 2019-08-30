import React, {Component} from 'react';

class TechList extends Component{
  state = {
    newTech : '',
    techs: [
      'NodeJS',
      'ReactJS',
      'React Native'
    ]
  }
  
  handleInputChange = e => {
    this.setState({newTech: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [... this.state.techs, this.state.newTech],
      newTech : '',
    });
  }

  handleDelete = (tech) => {
    this.setState({techs: this.state.techs.filter(t => t !== tech)})
    console.log(tech);
  }
  render(){
    return (
      // Fragment
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
        {this.state.techs.map(tech => (
          <li 
          key={tech}>
          {tech}
          <button onClick={() => this.handleDelete(tech)} type="button">Remover</button>
          </li>
        ))}
        
        </ul>
        <input type="text" 
        onChange={this.handleInputChange} 
        value={this.state.newTech}
        />
        <button type="submit">Submit</button>
      </form>
    )
  };

}

export default TechList;