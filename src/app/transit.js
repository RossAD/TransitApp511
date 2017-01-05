import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  PickerIOS
} from 'react-native'

const PickerItemIOS = PickerIOS.Item

export class Transit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      operators: [],
      operatorID: '',
      operatorName: ''
    }
  }
  getOperators() {
    fetch('https://api.511.org/transit/gtfsoperators?api_key=f91167ae-0e4c-4e03-b6be-349850e2b0b5', {
      Accept: 'application/json'
    })
    .then(res => res.json())
    .then(data => {
      console.log('What did I get? ', data) 
      let OperatorList = data.map((op) => {
        return op
      })
      this.setState({operators: OperatorList})   
      }
    )
    .catch(error => {
      console.warn('You recieved and error: ', error)
      throw error
    })
  }

  componentDidMount() {
    this.getOperators()
  }

  render () {
    return (
      <View style={ styles.container }>
        <Text>Welcome to the TransitApp511!!</Text>
        <View>
          {this.state.operators.map((operator, index) => (
            <View key={index}>
              <Text>{operator.CarrierName}</Text>
            </View>
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
