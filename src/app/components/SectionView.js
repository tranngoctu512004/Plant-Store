import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const SectionView = ({ categories, products, navigation }) => {
    const formatCurrency = (number) => {
        const parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');


        return parts.join('.') + 'đ';
    };
    const handleProductPress = (productId) => {

        navigation.navigate('Detail', { productId: productId });
    };
    const handleAllProductPress = (categoryID, categoryName) => {
        navigation.navigate('ListProducts', { categoryID: categoryID, categoryName: categoryName });

    }



    return (
        <View>
            {categories.map(category => (
                <View key={category._id} >
                    <Text style={styles.title}>{category.name}</Text>
                    <View style={styles.itemContainer}>
                        {products.filter(product => product.category === category._id).slice(0, 4).map(product => (
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
                    <TouchableOpacity onPress={() => handleAllProductPress(category._id, category.name)} key={category._id}>
                        <Text style={styles.xemthem}>Xem thêm {category.name}</Text>
                    </TouchableOpacity>


                </View>
            ))
            }
        </View >
    );
};

export default SectionView;

const styles = StyleSheet.create({
    xemthem: {
        color: '#221F1F', fontSize: 16, fontFamily: 'Lato', fontWeight: '500',
        lineHeight: 20,
        marginTop: 17.5,
        marginLeft: 230,
        marginBottom: 30,
    },
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
        marginTop:15
    },
    itemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        paddingHorizontal: 10,
        justifyContent: 'space-around'
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
});
