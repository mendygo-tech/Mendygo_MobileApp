import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


const { width } = Dimensions.get("window");


const slides = [
  {
    id: "1",
    renderTitle: () => (
      <View style={styles.titleContainer}>
        <Text style={styles.titleLine1}>
          Your <Text style={styles.green}>AI-Powered</Text>
        </Text>
        <Text style={styles.titleLine2}>Factory Brain</Text>
      </View>
    ),
    subtitle: "Monitors. Predicts. Optimizes your production.",
    image: require("../assets/images/Splash1.png"),
    
    backgroundColor: "#ffffff",
  },

  {
  id: "2",
  renderTitle: () => (
    <View style={styles.titleContainer}>
      <Text style={styles.titleLine1}>Why Go With</Text>

      <Text style={styles.titleLine2}>
        <Text style={styles.green}>MendyGo?</Text>
      </Text>
    </View>
  ),
  subtitle: "Monitors. Predicts. Optimizes your production.",
  image: require("../assets/images/Splash2.png"),
  imageStyle: {
      width: 260,
      height: 205,
      marginRight: 20,
   
    },

    centerLogoStyle: {
        top:99,
        marginRight:-20,
   
    
    },
  backgroundColor: "#ffffff",
},

  {
    id: "3",
      renderTitle: () => (
      <View style={styles.titleContainer}>
        <Text style={styles.titleLine1}>
          Your Onboarding Made
        </Text>
        <Text style={styles.titleLine2}>
        <Text style={styles.green}>Simple ?</Text>
      </Text>
      </View>
    ),
    subtitle: "Monitors. Predicts. Optimizes your production.",
    image: require("../assets/images/Splash1.png"),
    backgroundColor: "#ffffff",
  },
];


export default function OnboardingScreen({ navigation }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      sliderRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.replace("IntroScreen");
    }
  };

  const handleSkip = () => navigation.replace("IntroScreen");

  return (
  <View style={[styles.container, { backgroundColor: slides[currentIndex].backgroundColor }]}>

    {/* Top Decorative circles */}
    <View style={styles.bgCircle1} />
    <View style={styles.bgCircle2} />

    {/* Bottom decorative circles */}
    <View style={styles.bottomCircle1} />
    <View style={styles.bottomCircle2} />

   
    <FlatList
      ref={sliderRef}
      data={slides}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={(e) => {
        const index = Math.round(e.nativeEvent.contentOffset.x / width);
        setCurrentIndex(index);
      }}
      renderItem={({ item }) => (
        <View style={styles.slide}>

          <Image
            source={require("../assets/images/logo2.png")}
            style={styles.logo}
          />

          {item.renderTitle()}


          <View style={styles.imageWrapper}>
           <Image
  source={item.image}
  style={[styles.image, item.imageStyle]} 
/>

          <Image
  source={require("../assets/images/logo2.png")}
  style={[styles.centerLogo, item.centerLogoStyle]}
/>

          </View>

          <Text style={styles.subtitle}>{item.subtitle}</Text>

<View style={styles.dotsContainer}>
  {slides.map((_, idx) => (
    <View
      key={idx}
      style={[styles.dot, currentIndex === idx && styles.activeDot]}
    />
  ))}
</View>

        </View>
      )}
    />
  
<TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
  <Text style={styles.nextText}>
    {currentIndex === slides.length  ? "Get Started" : "Next"}
  </Text>
</TouchableOpacity>




<TouchableOpacity style={styles.skipBtn} onPress={handleSkip}>
  <Text style={styles.skipText}>Skip</Text>
</TouchableOpacity>
  </View>
);

}

const styles = StyleSheet.create({
  container: { flex: 1 },
  slide: {
    width,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  
  logo:{
     width: 110,
    height: 83,
    resizeMode: "contain",
    padding:0,
    top:-40
    

  },
  
   title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 10,
  },

  slideTitle: {
  fontSize: 28,
  fontWeight: "700",
  textAlign: "center",
  color: "#000",
  marginVertical: 10,
},


titleContainer: {
  alignItems: "center",
  marginTop: 10,
  marginBottom: 10,
},

titleLine1: {
  fontSize: 24,
  fontWeight: "600",
  color: "#000",
},

green: {
  color: "rgba(121, 193, 66, 1)",
  fontWeight: "700",
},

titleLine2: {
  fontSize: 26,
  fontWeight: "bold",
  color: "#000",
  marginTop: -4,
},

  image: {
    width: 334,
    height: 265,
    resizeMode: "contain",
    marginVertical: 20,
    marginLeft:19,
  },

  imageWrapper: {
  width: 250,
  height: 300,
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
},

centerLogo: {
  width: 65,
  height: 45,
  resizeMode: "contain",
  position: "absolute",
},

  subtitle: {
    fontSize: 16,
     fontWeight: "bold",
    color: "#555",
    textAlign: "center",
    marginBottom: 0,
  },
  dotsContainer: { flexDirection: "row", justifyContent: "center", marginTop:20, },
  dot: { width: 15, height:15, borderRadius: 10, backgroundColor: "#ccc", margin: 5 },
  activeDot: { backgroundColor: "rgba(122, 193, 66, 0.7)", },

nextBtn: {
  position: "absolute",
  bottom: 100,
  alignSelf: "center",
  backgroundColor: "rgba(96, 182, 30, 1)",
  paddingVertical: 14,
  paddingHorizontal: 50,
  borderRadius: 18,
  elevation: 4,
  flexDirection: "row",
  alignItems: "center",
},

nextText: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "bold",
},


skipBtn: {
  position: "absolute",
  bottom: 45,
  right: 25,
  padding: 10,
  flexDirection: "row",
  alignItems: "center",
},

skipText: {
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: 20,
  lineHeight: 16 * 1.1,
  letterSpacing: 0,
  textAlign: "center",
  color: "#555",
},

bgCircle1: {
  position: "absolute",
  width: 130,
  height: 130,
  borderRadius: 65, 
  backgroundColor: "rgba(122, 193, 66, 0.7)",
  top: -15,
  left: 340, 
  opacity: 1,
},

bgCircle2: {
  position: "absolute",
  width: 130,
  height: 130,
  borderRadius: 65, 
  backgroundColor: "rgba(122, 193, 66, 0.7)",
  top: -65,
  left: 275,
  opacity: 1,
},


bottomCircle1: {
  position: "absolute",
  width: 130,
  height: 130,
  borderRadius: 65,
  backgroundColor: "rgba(122, 193, 66, 0.7)",
  top: 736, 
  left: -70,  
  transform: [{ rotate: "0deg" }],
},


bottomCircle2: {
  position: "absolute",
  width: 130,
  height: 130,
  borderRadius: 65,
  backgroundColor: "rgba(122, 193, 66, 0.7)",
  top: 795,  
  left: -12, 
  transform: [{ rotate: "0deg" }],
},

});
