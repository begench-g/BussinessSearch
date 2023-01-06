import React,{ useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image} from 'react-native'
import yelp from "../api/yelp";
const ResultsShowScreen = ({navigation}) => {
    const [results, setResults ]= useState(null)
    const id = navigation.getParam('id');

    console.log(results);
    const getResults = async (id) => {
        const response = await yelp.get(`${id}`)
        setResults(response.data)
    }
    useEffect(()=>{
        getResults(id)
    },[])
    if (!results){
        return null
    }
    console.log(results.photos)
    return (
        <View>
            <Text>{results.name}</Text>
            <FlatList
                data={results.photos}
                keyExtractor={(photo)=>photo}
                renderItem={
                    ({item})=>{
                        return <Image style={styles.image} source={{uri: item}}/>
                    }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
    }
});

export default ResultsShowScreen;