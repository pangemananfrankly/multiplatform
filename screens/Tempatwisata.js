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
  Button,
  Animated
} from 'react-native';


export default class TempatWisata extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Pulau sara",                  time:"2018-08-01 12:15 pm",
         image:"https://1.bp.blogspot.com/-SPQLOsVCPZw/WlitXLc0f8I/AAAAAAAAEJQ/WFVLyzhZlvUZ8LG1WzZ2b-kZtLmf-BhLgCLcBGAs/s640/talaud3.jpg",
         description:" Pulau kecil tak berpenghuni ini menawarkan pemandangan pantai yang eksotis dengan hamparan pantai berpasir putih bersih dan halus. Di pulau nan indah bagaikan surga ini telah di fasilitasi dengan berbagai cottage dan prasarana air bersih"},
        {id:2, title: "Desa Adat Bannada",             time:"2018-08-12 12:00 pm",
         image:"https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2019/01/wisata-talaud-1-Kompas.jpg",
         description:"Belibur ke Talaud, Desa Adat Bannada yang berlokasi di paling ujung utara pulau Karakelang bisa jadi objek wisata di Talaud pertama yang Toppers kunjung, Dipercaya sebagai desa tertua di kepulauan Talaud, Bannada juga diyakini sebagai tempat bermulanya Kerajaan Porodisa. Hingga kini, Toppers masih bisa menemukan dan melihat berbagai peninggalan dari kerajaan yang dikenal juga dengan nama kerajaan Payung Utara yang disimpan dan dijaga oleh para tetua adat Toppers juga perlu ingat saat mengunjungi objek wisata Talaud satu ini untuk menghormati semua peraturan yang ada karena masyarakat Desa Adat Bannada masih sangat memegang teguh kepercayaan dan juga hukum adat."} ,
        {id:3, title: "Pulau Karakelang ",            time:"2017-08-05 12:21 pm", 
        image:"https://festivaljalanjalan.com/wp-content/uploads/2019/05/Pulau-Karakelang.jpg", 
        description:"Pulau Karakelang merupakan tempat wisata di Kabupaten Kepulauan Talaud yang memberikan pesona bahari yang cantik. Pulau ini jugalah di mana Desa Adat Bannada berada, sehingga Anda bisa mnegunjunginya sekaligus juga setelah mengeksplor wilayah pulau ini yang lain.Di sini terdapat berbagai pantai yang indah dan eksotis yang sayang kalau Anda lewatkan apalagi saat sore atau pagi harinya di mana Anda dapat melihat matahari terbenam dan matahari terbit"}, 
        {id:4, title: "Danau Lotah Talaud.",         time:"2015-08-12 12:00 pm", 
        image:"https://festivaljalanjalan.com/wp-content/uploads/2019/05/Sore-hari-indah-di-Danau-Lotah-Talaud.jpg",
         description:"Danau Lotah Talaud berada di Desa Moronge yang menyajikan pesona danaunya yang cantik dan menawan. Suasananya sangatlah tenang dan menyejukkan karena di kelilingi oleh pepohonan rindang serta lebat di area danaunya. Saat sore hari, Anda dapat menikmati indahnya panorama matahari terbenam yang cantik. Bagi Anda yang hobi memancing, di sini Anda bisa puas memancing ikan dengan berbagai macam jenis ikan dan ukuran. Siapa tahu ikan yang Anda dapat bisa Anda masak sendiri di vila-vila yang tersedia di dekat danau ini."}, 
        {id:5, title: "Pantai Lobbo",           time:"2013-06-12 12:11 pm",
         image:"https://festivaljalanjalan.com/wp-content/uploads/2019/05/Cantiknya-sore-hari-di-Pantai-Lobbo.jpg",
          description:"Pantai Lobbo merupakan tempat wisata di Talaud yang tidak kalah menariknya dari objek wisata di Sulawesi Utara lainnya. Berada di Kecamatan Beo Utara, keeksotisannya sangat luar biasa, apalagi saat sore harinya ketika matahari terbenam yang memancarkan warna orange di air lautnya. Pasirnya yang berwarna hitam dan halus menjadi daya tarik wisatawan untuk berlibur ke pantai ini, apalagi ombaknya yang cukup tenang membuat Anda bisa bermain-main atau berenang di tepiannya."}, 
        {id:6, title: "Goa Weta",        time:"2018-08-12 12:56 pm",
         image:"https://festivaljalanjalan.com/wp-content/uploads/2019/05/Pesona-stalaktit-di-Goa-Weta.jpg", 
         description:"Goa Weta merupakan tempat wisata di Kabupaten Kepulauan Talaud yang menjadi saksi bisu masyarakat Talaud saat penjajahan Jepang dahulu. Berlokasi di Kecamatan Beo, Anda akan melihat panorama stalaktit dan stalakmit yang menawan.Weta sendiri adalah nama yang orang yang saat penjajahan Jepang menemukan goa ini terlebih dahulu. Masyarakat Talaud dulunya tinggal di goa ini selama beberapa bulan dan hanya saat malam hari saja mereka keluar agar tidak ketahuan. Meskipun sangat menarik untuk dieksplor, Anda tidak akan menemukan fasilitas pendukung, seperti warung makan atau toilet. Anda tidak akan dikenakan biaya tiket masuk apapun saat mengunjunginya."}, 
        {id:7, title: "Air Terjun Ampadoap",    time:"2018-08-12 12:33 pm",
         image:"https://festivaljalanjalan.com/wp-content/uploads/2019/05/Air-Terjun-Ampadoap.jpg",
         description:"Di Kepulauan Talaud, terdapat objek wisata yang sangat populer yakni Air Terjun Ampadoap. Ampadoap sendiri diambil dari bahasa lokal yang artinya saling menghadap satu sama lain. 2 air terjunnya tidak setinggi di tempat lainnya karena hanya sektiar 5 meter saja.Saat Anda mencoba memasuki airnya, hawanya sangat segar, apalagi airnya yang jernih. Suasananya semakin menyejukkan karena pepohonan di sekelilinginya sangatlah rindang dan lebat."}, 
        {id:8, title: "Gua Batu Kapal",          time:"2018-06-12 12:44 pm",
         image:"https://festivaljalanjalan.com/wp-content/uploads/2019/05/Gua-Batu-Kapal.jpg", 
         description:"Gua Batu Kapal juga menjadi tempat wisata di Kabupaten Kepulauan Talaud yang cukup populer di sana. Di sini, Anda bisa melakukan ekplorasi sejarah yang cukup seru untuk dilakukan. Objek wisata ini berlokasi di puncak bukit dan ada sekitar 144 anak tangga yang harus Anda tempuh untuk menuju goa ini. Dari cerita masyarakat sekitar, goa ini dulunya hanya dipakai oleh nenek moyang untuk bertapa atau bersemedi. Tapi, karena adanya longsor, mereka sudah tidak bisa lagi ke goa ini karena tertutup longsornya. Ada tidak akan dikenakan biaya apapun saat masuk ke goa ini."},
        {id:9, title: "Pulau Kabaruan", time:"2012-07-12 12:23 pm",
         image:"https://festivaljalanjalan.com/wp-content/uploads/2019/05/Pesona-Pulau-Kebaruan.jpg",
          description:"Pulau Kabaruan merupakan salah satu dari 4 gugusan pulau paling besar di daerah Talaud. Di pulau ini, terdapat banyak sekali fauna burung maleo yang cantik, sekaligus menjadi habitatnya yang indah. Selain terkenal sebagai habitat burung maleo, tempat wisata di Kabupaten Kepulauan Talaud ini juga terkenal dengan ekosistem bawah lautnya. Bawah lautnya dipenuhi dengan terumbu karang dan biota serta hewan laut yang menarik untuk Anda lihat. Hutan bakaunya yang eksotis juga menjadi pelindung pantai agar tidak mudah terjadi abrasi. "},
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}z
          renderItem={(post) => {
            const item = post.item;
            return (
              
              <View style={styles.card}>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.timeContainer}>
                    <TouchableOpacity style={styles.socialBarButton}>
                     <Image style={styles.icon} source={{uri: 'https://img.icons8.com/nolan/64/000000/map-pin.png'}}/>
                      {/* <Image style={styles.iconData} source={{uri: 'https://png.icons8.com/color/96/3498db/calendar.png'}}/>
                      <Text style={styles.time}>{item.time}</Text> */}
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    {/* <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/material/96/2ecc71/visible.png'}}/>
                        <Text style={styles.socialBarLabel}>78</Text>
                      </TouchableOpacity>
                    </View> */}
                    {/* <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/ios-glyphs/75/2ecc71/comments.png'}}/>
                        <Text style={styles.socialBarLabel}>25</Text>
                      </TouchableOpacity>
                    </View> */}
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
    paddingHorizontal: 17,
    backgroundColor:"#E6E6E6",
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
    backgroundColor:"white"
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
    backgroundColor:"#EEEEEE",
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
  description:{
    fontSize:15,
    color:"#888",
    flex:1,
    marginTop:5,
    marginBottom:5,
  },
  time:{
    fontSize:13,
    color: "#808080",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  iconData:{
    width:15,
    height:15,
    marginTop:5,
    marginRight:5
  },
  timeContainer:{
    flexDirection:'row'
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