import  React from 'react';
import {Text,View,Image,FlatList} from 'react-native';

const data= [
    
    {id:1, imagem: '../assets/gaviaoarqueiro.jpg'},
    {imagem: '../assets/logo.png'}
    
]

export default function() {
    <FlatList
    data={data}
    keyExtractor={item=>item.imagem1}
    renderItem={({item}) => {return (<View> <Image source={{uri: item}} style={{width: 300, height: 300, resizeMode: 'contain', alignSelf: 'center'}}/> </View>) }}
    />
}