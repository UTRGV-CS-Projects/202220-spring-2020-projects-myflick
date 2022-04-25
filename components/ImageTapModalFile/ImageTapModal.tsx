import React, {useState} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Modal, TouchableHighlight, Text, Button } from 'react-native';
import Screen from '../../components/Screen';


interface Props {
  image ?: any
}

const ImageTapModal:React.FC<Props> = ({image}) => {

    const [modalVisible, setModalVisible] = useState(false)


  return (
    <View style={styles.container}>

        <TouchableOpacity testID='poster' accessibilityLabel='image_modal' activeOpacity={.5} onPress={() => setModalVisible(true)}>
            <Image source={image} style={styles.image}/>
        </TouchableOpacity>
       
    <Modal visible={modalVisible} animationType="fade" transparent={true} onRequestClose={() => setModalVisible(false)}>
        <Screen style={styles.container}>
        <TouchableOpacity testID='' style={styles.modalContainer} onPress={() => setModalVisible(false)}>
             <TouchableOpacity style={styles.modal} onPress={() => console.log('Test')} activeOpacity={1} >
                    <Image source={image} style={styles.imageModal} />
                </TouchableOpacity>
                </TouchableOpacity>
        </Screen>
    </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1
  },
  image: {
    height: 220,
    width: 150,
    borderRadius: 15,
    left: 20,
    top: 220,
    // position: 'absolute',
  },
  imageModal: {
    height: '100%',
    width: '100%'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: 155,
    height: 300
  },
});

export default ImageTapModal;