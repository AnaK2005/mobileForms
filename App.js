import React,{useState} from 'react';

import {Text, View, TextInput
,TouchableOpacity} from 'react-native';

import estilo from './CSS/estilo';


export default function App() {

const[username,setUsername] = useState('');
const[email, setEmail] = useState('');
const[password,setPassword] = useState('');
const[cpf,setCPF] = useState('');
const[rg,setRG] = useState('');
const[genero,setGenero] = useState('');
const[idade,setIdade] = useState('');
function gravar(){
  if(username=== '' || email === '' || password === ''||cpf===''|| rg ===''|| genero ===''|| idade==='')
  {
    alert ("Preencha os campos");
   return;
  }

  const dados = {
    username,email,password,cpf,rg,genero,idade
  } 
  console.log(dados);
}

  return (
    <View style={estilo.container}>
          <Text style={estilo.texto}>Seja bem vindo(a)!</Text>
    
    <TextInput style={estilo.campos} onChangeText={setUsername}
    value={username} placeholder={"Dg seu nome"}/>
    
    <TextInput style={estilo.campos}  onChangeText={setEmail} 
    value={email} placeholder={"Dg seu e-mail"} 
    />

<TextInput style={estilo.campos}  onChangeText={setPassword} 
    value={password} placeholder={"Dg a senha"} 
    />

    
<TextInput style={estilo.campos}  onChangeText={setCPF} 
    value={password} placeholder={"Dg seu cpf"} 
    />

    
<TextInput style={estilo.campos}  onChangeText={setRG} 
    value={password} placeholder={"Dg seu RG"} 
    />
    
<TextInput style={estilo.campos}  onChangeText={setGenero} 
    value={password} placeholder={"Dg seu gênero"} 
    />
    
<TextInput style={estilo.campos}  onChangeText={setIdade} 
    value={password} placeholder={"Dg sua idade"} 
    />

<TouchableOpacity style={estilo.btngravar} onPress={gravar}>
  <Text>Gravar</Text>
</TouchableOpacity>




    
    
    </View>
  );
}


