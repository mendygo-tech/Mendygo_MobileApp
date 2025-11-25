import React from "react";
import { View , Text,Image, StyleSheet, TouchableOpacity } from "react-native";


const IntroScreen = ({navigation}:any)=>{

   

    return(
        <View style={styles.container}>

            {/* top circles */}

            <View style={styles.bgCircle1} />
            <View style={styles.bgCircle2}/> 

             <Image
                    source={require("../assets/images/mendy.png")} 
                    style={styles.mendyImage}
                  />

            <Text style={styles.title}>
                 For Operations
            </Text>
             <Image
                    source={require("../assets/images/Intro.png")} 
                    style={styles.IntroImage}
                  />

        <Image source={require("../assets/images/mendyLogo.png")} 
                    style={styles.mendyLogo}
                  />
                  <View style={styles.box1}>
                    <Text style={{padding:5, color:"#ffffffff", fontWeight:"500",fontSize:15}}>Hi, How i can assist you today ?</Text>
                    </View>
                
                  <View style={styles.box2}>
                      <Text style={{padding:5, fontWeight:"500",fontSize:15}} >We’re noticing a drop in energy efficiency. Any insights?”</Text>
                    </View>


      <Text style={styles.subtitle}>“Mendy - your Smart Copilot for solving Operational problems.”</Text>

            <TouchableOpacity  style={styles.exploreButton} onPress={()=>{ navigation.replace("SignupScreen")} }>
                <Text style={styles.exploreText}>Explore</Text>
            </TouchableOpacity>

            {/* bottom circles */}

             <View style={styles.bottomCircle1} />
            <View style={styles.bottomCircle2}/> 
            
        </View>


    );
};

export default IntroScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#ffffffff",
        justifyContent: "center",
        padding: 20,
        alignItems:"center",

    },
    mendyImage:{
        position:"absolute",
         width: 185,
    height: 70,
    resizeMode: "contain",
    top:110,

    },
    IntroImage:{
          position:"relative",
         width: 340,
    height: 255,
    resizeMode: "contain",
    margin:0,
    

    },
    title:{
        
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 3,
   
    
    },
    greenText: {
        color: "rgba(102, 183, 51, 1)",
    },
    subtitle:{
        fontSize: 18,
    
    textAlign: "center",
    // marginBottom: 10,
    bottom:-40,
    fontWeight:"500",

    },
    mendyLogo:{
        position:"absolute",
        height:40,
        width:30,
        resizeMode:"contain",
        left:40,
        top:501,
        shadowColor: "#66B733", 
shadowOpacity: 1,
shadowRadius: 10,
elevation: 10,

    },
    box1:{
        height:35,
        width:240,
    fontSize: 10,

    alignItems:"center",
    alignContent:"center",
  
    backgroundColor: "rgba(102, 183, 51, 1)",

     borderRadius: 9,
     marginBottom:15,
     left:-2,
     marginTop:32,
     elevation:5,
    
    },
    box2:{
          height:50,
        width:280,
    fontSize: 10,
    alignContent:"center",
   backgroundColor: "rgba(239, 241, 245, 1)",
   elevation:3,

     borderRadius: 9,
     left:35,
     

    },

    exploreButton:{
        // marginTop:10,
        bottom:-52,
        backgroundColor: "rgba(102, 183, 51, 1)",
         padding:0,
  paddingHorizontal: 35,
  borderRadius: 12,
  elevation: 4,
  margin:0,
 
  alignItems: "center",

    },
    exploreText:{
        color:"#ffff",
        fontSize:32,
        fontFamily:"Montserrat",

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
  opacity:1,
},
bottomCircle2: {
 position: "absolute",
  width: 130,
  height: 130,
  borderRadius: 65,
  backgroundColor: "rgba(122, 193, 66, 0.7)",
  top: 795, 
  left: -12, 
  opacity:1,
},



    
})
