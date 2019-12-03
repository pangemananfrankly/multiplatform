import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

export default class PakaianAdat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Papehe",  price:"Couple", image:"https://fitinline.com/data/article/20140606/Sangihe-Talaud-000.jpg"},
        {id:2, title: "Product 2",  price:"", image:"https://fitinline.com/data/article/20140606/Sangihe-Talaud-003.jpg"} ,
        {id:3, title: "Product 3",  price:"", image:"https://fitinline.com/data/article/20140606/Sangihe-Talaud-005.jpg"}, 
        {id:4, title: "Product 4",  price:"", image:"https://fitinline.com/data/article/20140606/Sangihe-Talaud-006.jpg"}, 
        // {id:5, title: "Product 5",  price:"", image:"https://lorempixel.com/400/200/sports/1/"}, 
        // {id:6, title: "Product 6",  price:"", image:"https://lorempixel.com/400/200/nature/8/"}, 
        // {id:7, title: "Product 7",  price:"", image:"https://lorempixel.com/400/200/nature/1/"}, 
        // {id:8, title: "Product 8",  price:"", image:"https://lorempixel.com/400/200/nature/3/"},
        // {id:9, title: "Product 9",  price:"", image:"https://lorempixel.com/400/200/nature/4/"},
        // {id:9, title: "Product 10", price:"", image:"https://lorempixel.com/400/200/nature/5/"},
      ]
    };
  }

  klik1 = () => {
    Alert.alert('Laku tepu,','Busana adat yang sering dikenakan dalam berbagai kesempatan yang erat kaitannya dengan tradisi masyarakat setempat seperti perkawinan, peminangan, penasbihan desa, atau bahkan untuk pakaian sehari-hari. Nama busana tersebut adalah laku tepu yakni baju panjang yang biasa dikenakan oleh wanita maupun pria.Perbedaannya hanya terletak pada ukuran panjang baju dan pasangannya. Untuk kaum wanita panjangnya bisa mencapai betis, dengan penutup bagian bawahnya menggunakan kain sarung. Sementara itu, untuk kaum pria bisa mencapai telapak kaki atau hanya sebatas lutut, dengan celana panjang sebagai penutup pada bagian bawahnya.')
  }
  

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id==1;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
               
               <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>

                <TouchableOpacity style={styles.socialBarButton} onPress={() => this.klik1()}>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                </TouchableOpacity>
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton} onPress={() => this.Like()}>
                        {/* <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/48/000000/facebook-like.png'}}/>
                        <Text style={styles.socialBarLabel}>2</Text> */}
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        {/* <Image style={styles.icon} source={{uri: 'https://png.icons8.com/color/50/000000/hearts.png'}}/>
                        <Text style={styles.socialBarLabel}>25</Text> */}
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white",
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  },
  price:{
    fontSize:16,
    color: "green",
    marginTop: 5
  },
  buyNow:{
    color: "purple",
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});   