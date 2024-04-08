import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    Container: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    },
    inputs: {
        padding: 10,
        height: 60,
        marginVertical: 10,
        borderColor: '#D9D9D9',
        borderWidth: 2,
        opacity: 1,
        backgroundColor: '#D9D9D9'
    },
    inputsCad: {
        padding: 10,
        width: 172,
        height: 60,
        marginVertical: 10,
        borderColor: '#D9D9D9',
        borderWidth: 2,
        opacity: 1,
        backgroundColor: '#D9D9D9'
    },
    inputsCadastro: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    inputsButton: {
        padding: 15,
        marginVertical: 10,
        backgroundColor: '#FBAD16',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FBAD16'
    },
    inputsButtonRegister: {
        display: 'flex',
        width: '100%',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold'

    },
    inputsButtonCadClientes: {
        padding: 15,
        marginVertical: 20,
        backgroundColor: '#5780FA',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textInput: {
        color: '#000',
        fontSize: 18
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "50%",
    },
    headers: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%', 
        height: 60,
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 40,
        paddingHorizontal: 10
    },
    headersTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#464237'
    }
});

export default estilos; 