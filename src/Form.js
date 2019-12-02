import React from 'react';

class Form extends React.Component{
  constructor (props) {
    super(props);



    this.state = {
      nome:'null'
    }
  }

  nome = (ev) => {
    console.log(ev.target.value);
    this.setState({
      nome: ev.target.value,
    });
  }
  idade = (ev)=>{
    console.log(ev.target.value);
    this.setState({
      idade: ev.target.value,
    });
  }
  bairro = (ev) =>{
    console.log(ev.target.value);
    this.setState({
      bairro: ev.target.value,
    });
  }
  render () {
    return (
      <form>
        <label>
          Nome:
          <input type='text' onChange={this.nome}/>
        </label>
        <label>
          Idade:
          <input type='number' onChange={this.idade}/>
        </label>
        <label>
          Bairro:
          <input type='text' onChange={this.bairro}/>
        </label>
      </form>
    )
  }
}


export default Form;