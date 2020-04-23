import React, { Fragment, useState } from 'react';
import {
    TouchableHighlight,
    View,
    Text,
    TextInput,
    StyleSheet,
    Picker,
} from 'react-native';


const TranslatorView = () => {

    const [inputText, setText] = useState('');
    const [responseText, setResponse] = useState('');


    function postTranslateService(text) {
        text != '' ? 
        fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key=${API_KEY}&text=' + text + '&lang=en-tr')
            .then((res) => res.json())
            .then((res) => {
                console.log(res.text)
                setResponse(res.text)
            })
            .catch((error) => {
                console.log(error)
            }): setResponse('Boş bırakıyosun ayıp ediyosun.')
    };

    return (

        <View style={styles.container}>
            <Text style={styles.headline}>ENG - TR</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    multiline={true}
                    placeholder="go ahead!"
                    keyboardType="web-search"
                    underlineColorAndroid='transparent'
                    onChangeText={text => setText(text)} />
            </View>
         
            <TouchableHighlight style={[styles.buttonContainer, styles.translateButton]} onPress={() => postTranslateService(inputText)}>
                <Text style={styles.translateText}>Translate it!</Text>
            </TouchableHighlight>


            <Text>{responseText}</Text>
        </View>
    );
};

var styles = StyleSheet.create({
    //first view style
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    // eng-tr style
    headline: {
        marginBottom:50,
        textAlign: 'center',
        alignContent: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        color: 'black'
    },
    // input style
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        flex: 1,
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
    },

    //button style
    buttonContainer: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 100,
        borderRadius: 15,
    },
    translateButton: {
        backgroundColor: "#00b5ec",
    },
    translateText: {
        color: 'white',
    }
});
export default TranslatorView;