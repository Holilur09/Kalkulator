import React, { Component, useDebugValue } from 'react';
import { View, StatusBar, Text, Touchable, TouchableOpacity } from 'react-native';

class App extends Component {
  constructor(props) { 
  super(props);
  this.state = {
hitung: 0,
};
  }
masukkanAngka = (Value) =>{
  if (this.state.hitung==0)
{
this.setState ({hitung:Value})
}
else{
  this.setState ({hitung: this.state.hitung +''+ Value});
}
}

hitungHasil = () =>{
  let hasil = eval (this.state.hitung);
  this.setState ({hitung:hasil})
}

render() {
return (
  <View style={{flex: 1, backgroundColor: '#212121'}}> 
  <StatusBar backgroundColor="#212121" barStyle="light-content"/>

  <View style={{flex: 1.6, justifyContent: 'center', marginHorizontal: 10}}>
  <Text style={{ color: '#FFFFFF', fontSize: 70, textAlign: 'right' , color: '#18ffff'}}>{this.state.hitung}</Text>
</View>

<View style={{flex: 1 }}>
  
<View style={{flexDirection: 'row' }}>
    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10, margin: 10}}
    onPress={()=> this.setState({hitung : 0})}
    >
      <Text style={{color: '#FFFFFF', fontSize: 40, textAlign: 'left' ,marginLeft: 20, color: '#18ffff'}}>Clear</Text>
    </TouchableOpacity>
</View>

  <View style={{flexDirection: 'row', marginVertical: 10 }}>
    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
    onPress={()=> this.masukkanAngka('(')}
    >
      <Text style={{color: '#FFFFFF', fontSize: 30, textAlign: 'center', color: '#18ffff' }}>(</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10 }}
    onPress={()=> this.masukkanAngka(')')}
    >
    <Text style={{ color: '#FFFFFF', fontSize: 30, textAlign: 'center' , color: '#18ffff'}}>)</Text>
</TouchableOpacity>
<TouchableOpacity style={{ flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10 }}
onPress={()=> this.masukkanAngka('/')}
>
    <Text style={{ color: '#FFFFFF', fontSize: 30, textAlign: 'center', color: '#18ffff' }}>/</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10 }}
    onPress={()=> this.masukkanAngka('*')}
    >
    <Text style={{ color: '#FFFFFF', fontSize: 30, textAlign: 'center', color: '#18ffff' }}>X</Text>
    </TouchableOpacity>
</View>

  <View style={{flexDirection: 'row', marginVertical: 10}}>
    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
    onPress={()=> this.masukkanAngka(7)}
    >
      <Text style={{color: '#FFFFFF', fontSize: 30, textAlign: 'center' }}>7</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10 }}
    onPress={()=> this.masukkanAngka(8)}
    >
    <Text style={{ color: '#FFFFFF', fontSize: 30, textAlign: 'center' }}>8</Text>
</TouchableOpacity>
<TouchableOpacity style={{ flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10 }}
onPress={()=> this.masukkanAngka(9)}
>
    <Text style={{ color: '#FFFFFF', fontSize: 30, textAlign: 'center' }}>9</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10 }}
    onPress={()=> this.masukkanAngka('+')}
    >
    <Text style={{ color: '#FFFFFF', fontSize: 30, textAlign: 'center', color: '#18ffff' }}>+</Text>
    </TouchableOpacity>
</View>

<View style={{flexDirection: 'row', marginVertical: 10}}>
<TouchableOpacity style={{ flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10 }}
onPress={()=> this.masukkanAngka(4)}
>
    <Text style={{ color: '#FFFFFF', fontSize: 30, textAlign: 'center' }}>4</Text>
  </TouchableOpacity>
<TouchableOpacity style={{ flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10 }}
onPress={()=> this.masukkanAngka(5)}
>
    <Text style={{ color: '#FFFFFF', fontSize: 30, textAlign: 'center' }}>5</Text>
    </TouchableOpacity>
<TouchableOpacity style={{ flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10 }}
onPress={()=> this.masukkanAngka(6)}
>
    <Text style={{ color: '#FFFFFF', fontSize: 30, textAlign: 'center' }}>6</Text>
  </TouchableOpacity>
  <TouchableOpacity style={{ flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10 }}
  onPress={()=> this.masukkanAngka('-')}
  >
    <Text style={{ color: '#FFFFFF', fontSize: 30, textAlign: 'center', color: '#18ffff' }}>-</Text>
  </TouchableOpacity>
</View>

<View style={{flexDirection: 'row', marginVertical: 10}}>
<TouchableOpacity style={{ flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10 }}
onPress={()=> this.masukkanAngka(1)}
>
    <Text style={{ color: '#FFFFFF', fontSize: 30, textAlign: 'center' }}>1</Text>
  </TouchableOpacity>
<TouchableOpacity style={{ flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10 }}
onPress={()=> this.masukkanAngka(2)}
>
    <Text style={{ color: '#FFFFFF', fontSize: 30, textAlign: 'center' }}>2</Text>
    </TouchableOpacity>
<TouchableOpacity style={{ flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10 }}
onPress={()=> this.masukkanAngka(3)}
>
    <Text style={{ color: '#FFFFFF', fontSize: 30, textAlign: 'center' }}>3</Text>
  </TouchableOpacity>
  <TouchableOpacity style={{ flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10 }}
  onPress={()=> this.hitungHasil()}
  >
    <Text style={{ color: '#FFFFFF', fontSize: 30, textAlign: 'center', color: '#18ffff' }}>=</Text>
  </TouchableOpacity>
</View>
</View>
</View>
);
}
}
export default App;