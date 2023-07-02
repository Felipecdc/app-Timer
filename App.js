import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";


let timer = null;

let ss = 0;
let mm = 0;
let hh = 0;

export default function App(){
  const [numero, setNumero] = useState('00:00:00');
  const [inicio, setInicio] = useState("Iniciar");
  const [ultimo, setUltimo] = useState(null);
  const [ultimo1, setUltimo1] = useState(null);
  const [ultimo2, setUltimo2] = useState(null);
  

  function vai(){
    if(timer !== null){
      clearInterval(timer);
      timer = null;
      setInicio('Iniciar')
    }else{
      timer = setInterval(()=>{
        ss++;

        if(ss == 60){
          ss = 0;
          mm++;
        }

        if(mm == 60){
          mm = 0;
          hh++;
        }

        let format =
        (hh < 10 ? '0' + hh : hh) + ':'
         + (mm < 10 ? '0' + mm : mm) + ':' 
         + (ss < 10 ? '0' + ss : ss);

         setNumero(format);
      },100);
      setInicio('Pausar');

    }
  }

  function limpar(){
    if(timer !== null){
      clearInterval(timer);
      timer = null
    }

    setUltimo2(ultimo1);
    setUltimo1(ultimo);
    setUltimo(numero);
    setNumero('00:00:00');
    ss = 0;
    mm = 0;
    hh = 0;
    setInicio('Iniciar');


  }

  return(
    <View style={styles.container}>
      <Image
      source={require('./source/crono.png')}
      />

      <Text style={styles.timer}> {numero} </Text>

      <View style={styles.btnArea}>
        <TouchableOpacity onPress={vai} style={styles.btn}>
          <Text style={styles.btnText}> {inicio} </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={limpar} style={styles.btn}>
          <Text style={styles.btnText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaEnd}>
        <Text style={styles.textRun}>{ultimo ? 'Ultimo tempo: ' + ultimo : ''}</Text>
        <Text style={styles.textRun1}>{ultimo1 ? 'Ultimo tempo: ' + ultimo1 : ''}</Text>
        <Text style={styles.textRun2}>{ultimo2 ? 'Ultimo tempo: ' + ultimo2 : ''}</Text>
      </View>
    </View>
  );
};

const styles  = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },
  timer:{
    marginTop: -160,
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white', 
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 130,
    height: 40,
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnText:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#00aeef'
  },
  areaEnd:{
    marginTop: 40,
  },
  textRun:{
    textAlign: 'center',
    fontSize: 22,
    color: '#fff',
    fontStyle: "italic",
  },
  textRun1:{
    textAlign: 'center',
    fontSize: 18,
    color: 'rgba(220,220,220,0.8)',
    fontStyle: "italic",
  },
  textRun2:{
    textAlign: 'center',
    fontSize: 14,
    color: 'rgba(220,220,220,0.5)',
    fontStyle: "italic",
  }
})