import React from 'react';
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native';
// import { SizeClassIOS } from 'expo/build/ScreenOrientation/ScreenOrientation';

const ComponentScreen = () => {

    const myName = 'John Doe';
    const helloWorld = <Text>Hello World</Text>;

    return (
        
        <ScrollView >
            <Image 
                style={styles.size}
                source={require('../assets/images/Talaud.jpg')}
            />
            <Text style={styles.textStyle} > 
            SEJARAH SINGKAT TENTANG TALAUD
Letak Geografis Talaud
Terletak diantara Pulau Mindanao (Filipina) dan Pulau Sulawesi
Dasar Hukum
Kabupaten Kepulauan Talaud terbentuk berdasarkan Undang-Undang No. 8 Tahun 2002 yang merupakan hasil pemekaran Kabupaten Sangihe dan Talaud.
Ibu Kota : Melonguane
Luas wilayah : 1.288,94 km2
Jumlah Penduduk : 91.067 jiwa
Kecamatan

Kepulauan Talaud adalah gugusan pulau-pulau yang berada di utara Indonesia dan berbatasan dengan Negara Filipina. Sebelah selatan berbatasan dengan laut maluku, laut Sulawesi disebelah barat, Samudera Pasifik ditimur yang terdiri dari 20 pulau yaitu pulau Karakelang (terbesar), Mangaran, Salibabu, Miangas, Marampit, Karatung, Kakorotan dan pulau – pulau tidak berpenghuni lainnya dengan Luas wilayah secara keseluruhan adalah 27.061,16 km2 yang terdiri dari dari daratan seluas 1.288,94 km2 dan lautan seluas 25.772,22 km2.
- Proses Terbentuknya Kepulauan Talaud
Kepulauan talaud terbentuk karena adanya pergesaran lempeng Halmahera dan lempeng sangihe. Kedua lempeng saling “bertabrakan” yang mengakibatkan lapisan permukaan bumi terangkat diatas permukaan laut. Hasil dari proses pangangkatan ini sejak zaman Pleistosen (1,6 juta-10.000) hingga zaman Holocen ditambah dengan kolonisasi oleh tumbuhan, binatang dan manusia serta interaksi diantaranya, terbentuklah Kepulauan talaud.
- Nama lain Talaud
Talaud atau taloda disebut juga dengan nama “Porodisa” atau Paradise yang berarti surga. Menurut cerita ketika bangsa Portugis datang pertama kali ke talaud mereka berkata “Paradise” karena dilihatnya talaud bagaikan surga, tapi penduduk lokal waktu itu mengucapkannya “porodisa” karena tidak dapat mendengar dan melafazkannya dengan baik dan juga tidak mengerti artinya.
Sedangkan Taloda berasal dari kata Talo dan Oda. Talo adalah nama orang yang berasal dari talaud sedangkan Oda adalah istrinya yang berasal dari pulau Mindanau (Filipina), Taloda menjadi nama dari keturunan mereka berdua.
- Asal-usul orang Talaud
Mengenai asal-usul Orang Talaud tidak dapat diketahui secara pasti, ada yang berpendapat bahwa orang talaud berasal dari Filipina karena mempunyai kemiripan bahasa dan warna kulit serta bentuk tubuh, ada yang menyebutkan bahwa suku talaud termasuk bangsa Melayu Polinesia yang merupakan bagian dari Austronesia. Berdasarkan penelitian, kepulauan talaud telah dihuni sekitar ± 6.000 tahun SM.
Kita juga dapat mengetahui asal-usul orang Talaud berdasarkan cerita rakyat, seperti yang disebutkan diatas Talo dan Oda adalah manusia pertama ditalaud. Cerita lain adalah Hikayat yang berjudul “Alamona Otaumata Ntaloda” (manusia pertama ditalaud).
Cerita lain juga mengatakan tentang asal usul orang talaud berasal dari Filipina selatan. Dikisahkan tiga orang yaitu Gumansalangi dan istrinya Kondawulaeng bersama Bawanulare berlayar ketimur. Ketika sampai di pulau Sangir, Gumansalangi dan istrinya Kondawulaeng tidak berlayar dan menetap disana, sedangkan Bawanulare tetap melanjutkan pelayaran sampai di Pulau Kabaruan.
- Kerajaan Di Talaud
Petunjuk ataupun bukti-bukti tentang kerajaan talud sangat sedikit, namun yang pasti di talaud telah berdiri kerajaan sejak jaman Majapahit. Dalam syair Prapanca pada kitab negarakartagama pada zaman gajah mada (1364), Talaud disebut sebgai udamakatrayadi atau udamakatraya. 
            </Text>
            <Text style={styles.textStyle2}>
                {myName}
            </Text>
            <Text style={styles.textStyle} > 
                This is component Screen 
            </Text>
            {helloWorld}
        </ScrollView> 
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 26,
        color: 'green'
    },
    textStyle2: {
        fontSize: 26,
        color: 'red'
    },
    size:{
        width: "50%", 
        height: "10%",
       
    }
});

export default ComponentScreen;