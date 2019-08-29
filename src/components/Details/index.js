import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';

import {
  Container,
  TypeTitle,
  TypeDescription,
  TypeImage,
  RequestButton,
  RequestButtonText,
} from './styles';

import uberx from '../../assets/uberx.png';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }

  change() {
    this.props.changeState;
  }

  render() {
    return (
      <Container>
        <TypeTitle> Programadorzão </TypeTitle>
        <TypeDescription>
          {'Verifica se ta tudo certo e só solicitar'}
        </TypeDescription>

        <TypeImage source={uberx} />
        <TypeTitle> UberX </TypeTitle>
        <TypeDescription> R$6,00 </TypeDescription>

        <RequestButton
          onPress={() => {
            this.change;
            Alert.alert('Agora só aguardar que já já sua carona chega...');
          }}
        >
          <RequestButtonText>SOLICITAR UBERX</RequestButtonText>
        </RequestButton>
      </Container>
    );
  }
}
