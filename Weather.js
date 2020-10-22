import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const WeatherOptions = {
    Clouds : {
        iconName : "cloud",
        gradient: ["#2c3e50","#bdc3c7" ],
        title:"Clouds",
        subtitle:"I have clouds in my heart because of the corona."
    },
    Thunderstorm : {
        iconName : "weather-lightning",
        gradient: ["#373B44","#4286f4" ],
        title:"Thunderstorm",
        subtitle:"don't go outside"
    },
    Drizzle: {
        iconName : "weather-rainy",
        gradient: ["#4c669f","#203A43","#2C5364" ],
        title:"Drizzle",
        subtitle:"could is my mind"
    },
    Rain : {
        iconName : "weather-pouring",
        gradient: ["#1488CC","#2B32B2" ],
        title:"Rainy",
        subtitle:"I like the sound of rain."
    },
    Snow : {
        iconName : "snowflake",
        gradient: ["#7DE2FC","#B9B6E5" ],
        title:"Snow",
        subtitle:"Do you wanna build a snow man? No, it's cold." 
    },
    Atmosphere : {
        iconName : "cloud",
        gradient: ["#DBD5A4", "#ffdde1" ],
        title:"Atmosphere",
        subtitle:"could is my mind"
    },
    Haze : {
        iconName : "weather-hazy",
        gradient: ["#4c669f","#192f6a" ],
        title:"Haze",
        subtitle:"don't go outside"
    },
    Dust : {
        iconName : "dotchart",
        gradient: ["#649173","#DBD5A4" ],
        title:"Dust",
        subtitle:"A mask is a lifesaver"
    },
    Fog : {
        iconName : "weather-fog",
        gradient: ["#4c669f","#192f6a" ],
        title:"Fog",
        subtitle:"it's like you have no glasses on"
    },
    Clear : {
        iconName : "white-balance-sunny",
        gradient: ["#FF7300","#FEF352" ],
        title:"Sunny",
        subtitle:"Let's go to the citizen park and have a beer."
    }
}

export default function Weather ({ temp , condition }) {
    return ( 
     
        <LinearGradient
        // Button Linear Gradient
        colors={WeatherOptions["Snow"].gradient}
        style={styles.container}>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={WeatherOptions["Snow"].iconName}
                    color ="white"/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{WeatherOptions["Snow"].title}</Text>
                <Text style={styles.subtitle}>{WeatherOptions["Snow"].subtitle}</Text>
            </View>
            </LinearGradient>
    
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Clouds",
        "Thunderstorm",
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere",
        "Haze", 
        "Dust", 
        "Fog",
        "Clear"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex : 1 ,
        justifyContent : "center",
        alignItems: "center"
    },
    temp:{
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    title:{
        color :"white",
        fontSize:44,
        fontWeight:"300",
        marginBottom: 10
    },
    subtitle:{
        fontWeight :"600",
        color:"white",
        fontSize: 24
    },
    textContainer:{
        paddingHorizontal : 20,
        alignItems : "flex-start"
    }
});

