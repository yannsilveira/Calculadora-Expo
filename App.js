import React, { Component, Fragment } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Painel from './components/Painel';
import Resultado from './components/Resultado';
import Topo from './components/Topo';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = { num1: '', num2: '', operacao: 'soma', resultado: '' };
    this.calcular = this.calcular.bind(this);
    this.limpar = this.limpar.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
  }

  calcular() {
    let resultado = 0;

    switch (this.state.operacao) {
      case 'soma':
        resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        break;
      case 'subtracao':
        resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
        break;
      case 'multiplicacao':
        resultado = parseFloat(this.state.num1) * parseFloat(this.state.num2)
        break;
      case 'divisao':
        resultado = parseFloat(this.state.num1) / parseFloat(this.state.num2);
        break;
      default:
        resultado = 0;
    }
    this.setState({ resultado: resultado.toString() });
  }

  atualizaOperacao(operacao) {
    this.setState({ operacao });
  }

  atualizaValor(nomeCampo, numero) {
    const obj = {};
    obj[nomeCampo] = numero;

    this.setState(obj);
  }

  limpar() {
    this.setState({num1: '', num2: '', operacao: 'soma', resultado: ''})
  }

  render() {
    return (
      <Fragment>
        <SafeAreaView style={{ backgroundColor: '#000' }} />
        <View style={styles.container}>
          <Topo />
          <Resultado resultado={this.state.resultado} />
          <Painel
            num1={this.state.num1}
            num2={this.state.num2}
            operacao={this.state.operacao}
            calcular={this.calcular}
            limpar={this.limpar}
            atualizaOperacao={this.atualizaOperacao}
            atualizaValor={this.atualizaValor}
          />
        </View>
      </Fragment>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
