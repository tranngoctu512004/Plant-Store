import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ItemProductCustom = ({ products }) => {
    const formatCurrency = (number) => {
        const parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');


        return parts.join('.') + 'đ';
    };
    const handleProductPress = (productId) => {

        navigation.navigate('Detail', { productId: productId });
    };

    return (
        <View style={styles.itemContainer}>
            {products.map(product => (
                <TouchableOpacity onPress={() => handleProductPress(product._id)} key={product._id} >
                    <View style={styles.containerItem}>
                        <Image source={{ uri: product.image[0] }} style={styles.Image} />
                        <Text style={styles.name}>{product.name}</Text>
                        <Text>{product.species}</Text>
                        <Text style={styles.price}>{formatCurrency(product.price)}</Text>

                    </View>
                </TouchableOpacity>
            ))}

        </View>
    )
}

export default ItemProductCustom

const styles = StyleSheet.create({
    price: {
        fontSize: 16,
        fontWeight: '500',
        color: '#007537',
        fontFamily: 'Lato'
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        color: '#221F1F',
        fontFamily: 'Lato'
    },
    containerItem: {
        marginTop: 15,
    },
    itemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        paddingHorizontal: 10,
        justifyContent: 'space-evenly'
    },
    title: {
        width: 325,
        height: 49,
        color: '#221F1F',
        fontSize: 24,
        fontFamily: 'Lato',
        fontWeight: '500',
        lineHeight: 34

    },
    Image: {
        height: 135,
        width: 155,
        borderRadius: 10,
    }
})