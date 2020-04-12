import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        //flex 1 para ocupar a tela
        flex: 1,
        paddingHorizontal: 24,
        //dando um padding de 20px a baixo da Barra de Status
        paddingTop: Constants.statusBarHeight + 20,
    },
    //cabeçalho
    header: {
        //por padrão no mobile o display é sempre colunm, para deixa um ao lado do outro então usamos
        flexDirection: 'row',
        //colocando um espaço entre os conteudos
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    //texto do cabeçalho
    headerText: {
        fontSize: 15,
        color: '#737380',
    },
    //texto em negrito do cabeçalho
    headerTextBold: {
        fontWeight: 'bold',
    },
    //titulo
    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold',
    },
    //descrição
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
    },
    //lista de incidents
    incidentList: {
        marginTop: 32,
    },
    //blocos dos incidents
    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },
    //incidents titulos
    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },
    //incidents variaveis
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },
    //icon-arrow
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    //'Ver mais detalhes'
    detailsButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold',
    },
});