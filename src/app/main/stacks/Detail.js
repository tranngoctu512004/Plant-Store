import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, PixelRatio } from 'react-native'
import React, { useState, useEffect } from 'react'
import HeaderCustom from '../../components/HeaderCustom'
import Swiper from 'react-native-swiper';
import ButtonAuthen from '../../components/ButtonAuthen';
import { useNavigation } from '@react-navigation/native';
const Detail = ({ route }) => {
    const { productId } = route.params;

    const navigation = useNavigation();
    const [productData, setProductData] = useState([]);
    const [categoryProduct, setcategoryProduct] = useState([])
    const back = () => {
        navigation.goBack();
    }
    useEffect(() => {
        Promise.all([
            fetch('http://172.20.10.4:3000/product').then(res => res.json()),
            fetch('http://172.20.10.4:3000/category').then(res => res.json())
        ])
            .then(([productData, categoryData]) => {
                console.log('Dữ liệu sản phẩm:', productData);
                console.log('Dữ liệu danh mục:', categoryData);
                setProductData(productData);
                setcategoryProduct(categoryData);
            })
            .catch(error => console.error("Lỗi khi tải dữ liệu:", error));
    }, []);
    const formatCurrency = (number) => {
        const parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');


        return parts.join('.') + 'đ';
    };
    const product = productData.find(product => product._id === productId);
    console.log(product);
    const category = categoryProduct.find(category => category._id === product.category)
    console.log(category);
    if (!product || !category) {
        return <View><Text>Product not found</Text></View>;
    }

    return (

        <View style={styles.container}>
            <StatusBar
                backgroundColor="rgba(255, 255, 255, 0)"
                translucent={true}
            />
            <HeaderCustom
                onPress={back}
                leftIcon={require('../../../../assets/arrowLeft.png')}
                title={product ? product.name : 'Loading...'}
                rightIcon={require('../../../../assets/shopping-cart.png')}
            />
            <View style={styles.containerSwipper}>
                <Swiper
                    style={styles.wrapper}
                    showsButtons={true}
                    nextButton={<Text style={styles.buttonText}>›</Text>} // Style cho nút next
                    prevButton={<Text style={styles.buttonText}>‹</Text>} // Style cho nút prev
                >
                    {product.image.map((imageUrl, index) => (
                        <View style={styles.slide} key={index}>
                            <Image source={{ uri: imageUrl }} style={styles.Image} />
                        </View>
                    ))}
                </Swiper>

            </View>
            <View style={styles.containerType}>
                <View style={styles.c}>
                    <View style={styles.itemContainer}>
                        <Text style={styles.nameCategory}>{category.name}</Text>
                    </View>
                    {
                        product.species && <View style={styles.itemContainer}>
                            <Text style={styles.nameCategory}>{product.species}</Text>
                        </View>
                    }
                </View>

            </View>
            <Text style={styles.textPrice}>{formatCurrency(product.price)}</Text>
            <View style={styles.containerContent}>
                <Text style={styles.textDetail}>Chi tiết sản phẩm</Text>
                <View style={styles.line1}></View>
                <View style={styles.item}>
                    <Text style={styles.textDetail}>Kích cỡ</Text>
                    <Text style={styles.textDetail}>{product.size}</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.item}>
                    <Text style={styles.textDetail}>Xuất xứ</Text>
                    <Text style={styles.textDetail}>{product.origin}</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.item}>
                    <Text style={styles.textDetail}>Tình trạng</Text>
                    <Text style={styles.textStatus}>{product.status}</Text>
                </View>
                <View style={styles.line}></View>
            </View>
            <View style={styles.containerFooter}>
                <View style={styles.headerFooter}>
                    <Text style={styles.textChosen}>Đã chọn 1 sản phẩm</Text>
                    <Text style={styles.textChosen}>Tạm tính</Text>
                </View>
                <View style={styles.containerAmount}>
                    <View style={styles.amount}>
                        <TouchableOpacity>
                            <Image style={styles.miuns} source={require('../../../../assets/minus.png')} />

                        </TouchableOpacity>
                        <Text style={styles.amountText}>1</Text>
                        <TouchableOpacity>
                            <Image style={styles.miuns} source={require('../../../../assets/plus.png')} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.total}>250.000đ</Text>
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonBuy}>CHỌN MUA</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Detail
const styles = StyleSheet.create({

    buttonBuy:
    {
        textAlign: 'center', color: 'white', fontSize: 16,
        fontFamily: 'Lato', fontWeight: '500', textTransform: 'uppercase', lineHeight: 20,
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%', height: 50, paddingLeft: 100,
        paddingRight: 100, paddingTop: 10,
        paddingBottom: 10, backgroundColor: '#007537',
        borderRadius: 8, justifyContent: 'center',
        alignItems: 'center', gap: 10, display: 'inline-flex',
        marginTop: 15,
    },
    amountText: {
        paddingHorizontal: 30,
        textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Lato', fontWeight: '400', lineHeight: 20,
    },
    amount: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    miuns: {
    },
    total: {
        width: 181, height: 36, textAlign: 'right', color: '#221F1F', fontSize: 24, fontFamily: 'Lato', fontWeight: '500', lineHeight: 34,
    },
    containerAmount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerFooter: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    textChosen: {
        opacity: 0.60, color: 'black',
        fontSize: 14, fontFamily: 'Lato',
        fontWeight: '400', lineHeight: 20,
    },
    containerFooter: {
        paddingHorizontal: 24,
        marginTop: 10,
        paddingBottom: 15,


    },
    textStatus: {
        color: '#007537', fontSize: 16, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22
    },

    item: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    line: {
        width: '100%',
        backgroundColor: '#ABABAB',
        height: 1,
        marginTop: 5,
    },
    line1: {
        width: '100%',
        backgroundColor: 'black',
        height: 1,
        marginTop: 5,
    },
    textDetail: {
        color: '#3A3A3A', fontSize: 16, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22
    },
    containerContent: {
        paddingHorizontal: 48,
        paddingVertical: 15,
    },
    textPrice: {
        marginLeft: 48,
        width: 279, color: '#007537', fontSize: 24, fontFamily: 'Lato', fontWeight: '500', lineHeight: 34,
    },
    c: {
        marginLeft: 40,
        flexDirection: 'row'
    },
    nameCategory: {
        textAlign: 'center', color: 'white', fontSize: 14,
        fontFamily: 'Lato', fontWeight: '400', lineHeight: 20
    },
    itemContainer: {
        backgroundColor: '#007537',
        height: 28,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        marginTop: 15,
        marginLeft: 8,



    },
    containerType: {
        width: '100%',
        height: 58,
        flexDirection: 'row',
    },
    containerSwipper: {
        height: 290,
    },
    buttonText: {
        color: '#000000',
        fontSize: 38,
        width: 54,
        height: 50,
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    Image: {
        height: 270,

    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    wrapper: {
        height: 290,

    },


})