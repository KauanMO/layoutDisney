import React from 'react';
import { StyleSheet,Text,View,SafeAreaView,ScrollView, Image} from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-web';

const data= [
  {
    "key": 1,
    "imagem": '//cnbl-cdn.bamgrid.com/assets/24069b782e1b1531b7197153b6ac1819191ca448aa4576cdd3767fa47270aae3/original'
  },
  {
    "key": 2,
    "imagem": '//cnbl-cdn.bamgrid.com/assets/845fba5f63f7fd64c6f4b422034f8669409e9d664313a28d64b4d6b2bc4fb0da/original'
  },
  {
    "key": 3,
    "imagem": '//cnbl-cdn.bamgrid.com/assets/15c6ace5aa3cc4fe011df27c52288989bbca80d26a11d405317e509ba1f3ad24/original'
  },
  {
    "key": 4,
    "imagem": '//cnbl-cdn.bamgrid.com/assets/ac915426b021288c04f8908ce12d080dcd70953fe0fac328383c7d5e3a253843/original'
  },
  {
    "key": 5,
    "imagem": '//cnbl-cdn.bamgrid.com/assets/5ece2dc4f3104e9b3b61f14e76a577cab5e14f5a997be9a8a473e5ab488e08be/original'
  },
  {
    "key": 6,
    "imagem": '//cnbl-cdn.bamgrid.com/assets/09b058e3486c22916e1dc4765581349d2e17090f2167689071b4a2d1d38a429c/original'
  },
  {
    "key": 7,
    "imagem": '//cnbl-cdn.bamgrid.com/assets/1742d878d2d5475eae2afba94902b3b41b313fe1f0897579c3293c5b82c70693/original'
  },


  

  
]

const logos= [
  {
    "key": 1,
    "logo": 'https://logodownload.org/wp-content/uploads/2017/04/disney-logo.png'
  },
  {
    "key": 2,
    "logo": 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Pixar_logo.svg/1280px-Pixar_logo.svg.png'
  },
  {
    "key": 3,
    "logo": 'https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png'
  },
  {
    "key": 4,
    "logo": 'https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-1-1.png'
  },
  {
    "key": 5,
    "logo": 'https://logodownload.org/wp-content/uploads/2017/04/national-geographic-channel-logo-1.png'
  },

  
]

const recomendados= [
  {
    "key": 1,
    "cartaz": 'https://images-na.ssl-images-amazon.com/images/I/81yqZBqn7aL.jpg'
  },
  {
    "key": 2,
    "cartaz": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQduPovH30BEo_boc49h4pIhyKHxRlhCXBngQ&usqp=CAU'
  },
  {
    "key": 3,
    "cartaz": 'https://imagens.publicocdn.com/imagens.aspx/609432?tp=KM&w=220'
  },
  {
    "key": 4,
    "cartaz": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fTb6OuCEZFgr24XsBWWBssRYGUU35xYqmA&usqp=CAU'
  },
  {
    "key": 5,
    "cartaz": 'https://br.web.img3.acsta.net/medias/nmedia/18/90/59/44/20103781.jpg'
  },
  {
    "key": 6,
    "cartaz": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsb-Ak9wnHuVJQxg5_V_kmbARy25Ex5-ePw&usqp=CAU'
  },
  {
    "key": 7,
    "cartaz": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDPSIW-ggMBWsGgzJQduWhQn9XDrq_xZ1Kw&usqp=CAU'
  },
  {
    "key": 8,
    "cartaz": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGG4T4-JTz9wlJnnucnfineXuh-wOkfxa8Nw&usqp=CAU'
  },
]

const novidades= [
  {
    "key": 1,
    "cartaz": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUkusdwZT_9hNHTq1kRWyumKangbDe9OHwOw&usqp=CAU'
  },
  {
    "key": 2,
    "cartaz": 'https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_explorerthelasttepui_v2_22784_2e3182fe.jpeg'
  },
  {
    "key": 3,
    "cartaz": 'https://media.fstatic.com/PiQgKWhNAcAmzDHPLVF2I_NJ48w=/210x312/smart/media/movies/covers/2021/07/214654869_2447601745384890_7111234204694048314_n.jpg'
  },
  {
    "key": 4,
    "cartaz": 'https://media.fstatic.com/PiQgKWhNAcAmzDHPLVF2I_NJ48w=/210x312/smart/media/movies/covers/2021/07/214654869_2447601745384890_7111234204694048314_n.jpg'
  },
  {
    "key": 5,
    "cartaz": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6dq4fc4OXOYqtIy2VdPOj3_hSkaTRF45PA&usqp=CAU'
  },
  {
    "key": 6,
    "cartaz": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRU0QyffeYiGNBKStMjAU-HPapIbxQmQ6ADw&usqp=CAU'
  },
  {
    "key": 7,
    "cartaz": 'https://www.themoviedb.org/t/p/original/1v0dGbbw2oQLBk2dmQyRpCffZ02.jpg'
  },
  {
    "key": 8,
    "cartaz": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7bE3IsXCYVnEc6PKFeVNB0IIVSD0OqSfbw&usqp=CAU'
  },
  {
    "key": 9,
    "cartaz": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlV_Bi82TuywX61bsK_i5GSLTJxVU-YkWVyA&usqp=CAU'
  },
  {
    "key": 10,
    "cartaz": 'https://imagens.publicocdn.com/imagens.aspx/609432?tp=KM&w=220'
  },
]

const mesDaTerra=[
  {
    "key": 1,
    "cartaz": 'https://br.web.img3.acsta.net/pictures/22/04/04/19/37/5314981.jpg'
  },
  {
    "key": 2,
    "cartaz": 'https://br.web.img3.acsta.net/c_310_420/pictures/22/03/24/17/30/5664496.jpg'
  },
  {
    "key": 3,
    "cartaz": 'https://www.themoviedb.org/t/p/w500/pVfqBJK48myxQvl4MzRaNw4sMPA.jpg'
  },
  {
    "key": 4,
    "cartaz": 'https://media.fstatic.com/a6G3MTL4Gv7X_JmcpqeW68jCs5c=/290x478/smart/media/movies/covers/2020/10/tLzLevrWEDE0yJGo6PkDauAG6F5.jpg'
  },
  {
    "key": 5,
    "cartaz": 'https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_explorerthelasttepui_v2_22784_2e3182fe.jpeg'
  },
  {
    "key": 6,
    "cartaz": 'https://media.fstatic.com/wsbumRotU4NdWHsphBiNlW8VxXo=/290x478/smart/media/movies/covers/2020/07/588x783-Q80_e43f0a28e6725a8ea592ec3ba763ec5c.jpg'
  },
  {
    "key": 7,
    "cartaz": 'https://media.discordapp.net/attachments/756699032667029666/968623293986926672/unknown.png?width=281&height=463'
  },
  {
    "key": 8,
    "cartaz": 'https://media.filmelier.com/images/filmes/cartaz/greta-thunberg-the-voice-of-the-future30234.jpeg'
  },
]

export default function app(){
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView scrollEventThrottle={16} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={{flex: 2}}>
          <Image style={{width: 110,
          height: 110,
          alignSelf: 'center',
          resizeMode: 'contain'}} 
          source={require('./assets/logo.png')}/>  
         
         <FlatList
         style={{
           marginLeft:40,
           marginTop: -70
         }}
            pagingEnabled
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal = {true}
            data={data}
            keyExtrator={item => item.key}
            scrollEventThrottle={10}
            decelerationRate="fast"
            snapToAlignment={'start'}
            renderItem={({item}) => <View style={{
            }}><Image style={{width: 290,
              height: 290,
              //alignSelf: 'center',
              resizeMode: 'contain'
            
            }} 
              source={{uri: item.imagem}}/> </View>}
              ItemSeparatorComponent={() => <View style={{ width: 30 }} />}
            />

            <FlatList
            style= {{
              alignSelf: 'center',
              marginTop: -33,
            }}
              pagingEnabled
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal = {true}
              data={logos}
              keyExtrator={item => item.key}
              scrollEventThrottle={10}
              decelerationRate="fast"
              snapToAlignment={'start'}
              renderItem={({item}) => <View style={{
              }}><Image style={{width: 55,
                height: 55,
                //alignSelf: 'center',
                resizeMode: 'contain',
                backgroundColor: '#052960',
                borderRadius: 10,
                borderColor: '#263350',
                borderWidth: '2px'
              }} 
                source={{uri: item.logo}}/> </View>}
                ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
              />

                <Text style={{
                color: "#F0FFF0",
                marginTop: 20,
                marginLeft: 33,
                }}>Recomendado para você</Text>

          <FlatList
            style= {{
              marginLeft: 33,
              marginTop: 8,
            }}
              pagingEnabled
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal = {true}
              data={recomendados}
              keyExtrator={item => item.key}
              scrollEventThrottle={10}
              decelerationRate="fast"
              snapToAlignment={'start'}
              renderItem={({item}) => <View style={{
              }}><Image style={{width: 110,
                height: 150,
                //alignSelf: 'center',
                resizeMode: 'contain',

              }} 
                source={{uri: item.cartaz}}/> </View>}
                ItemSeparatorComponent={() => <View style={{ width: 4 }} />}
              />

                <Text style={{
                color: "#F0FFF0",
                marginTop: 20,
                marginLeft: 33,
                }}>Novidades do Disney+</Text>

            <FlatList
            style= {{
              marginLeft: 33,
              marginTop: 8,
            }}
              pagingEnabled
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal = {true}
              data={novidades}
              keyExtrator={item => item.key}
              scrollEventThrottle={10}
              decelerationRate="fast"
              snapToAlignment={'start'}
              renderItem={({item}) => <View style={{
              }}><Image style={{width: 110,
                height: 150,
                //alignSelf: 'center',
                resizeMode: 'contain',

              }} 
                source={{uri: item.cartaz}}/> </View>}
                ItemSeparatorComponent={() => <View style={{ width: 4 }} />}
              />

                <Text style={{
                color: "#F0FFF0",
                marginTop: 20,
                marginLeft: 33,
                }}>Comemore o Mês da Terra</Text>


            <FlatList
            style= {{
              marginLeft: 33,
              marginTop: 8,
            }}
              pagingEnabled
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal = {true}
              data={mesDaTerra}
              keyExtrator={item => item.key}
              scrollEventThrottle={10}
              decelerationRate="fast"
              snapToAlignment={'start'}
              renderItem={({item}) => <View style={{
              }}><Image style={{width: 110,
                height: 150,
                //alignSelf: 'center',
                resizeMode: 'contain',

              }} 
                source={{uri: item.cartaz}}/> </View>}
                ItemSeparatorComponent={() => <View style={{ width: 4 }} />}
              />
                

        </View>
        <View>
        </View>
      </ScrollView>      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#030c40',
    flex:1,    
  },

  Image

});