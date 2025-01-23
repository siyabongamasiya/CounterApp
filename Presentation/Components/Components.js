import React from 'react';
import { TouchableOpacity, View,Modal,StyleSheet,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { onprimary, onsecondary, ontertiary, secondary} from '../Styles/ColorStyles';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { ControlButtonstyles, FloatingButtonstyles, PopupDialogueStyles, SprintItemstyles, TopBarStyles } from '../Styles/Component_Styles';


export const ControlButton = ({ icon,onPress}) => {
    return (
      <TouchableOpacity style={ControlButtonstyles.button} onPress={onPress}>
        <View style={ControlButtonstyles.iconContainer}>
          <Icon name= {icon} size={30} color= {ontertiary} />
        </View>
      </TouchableOpacity>
    );
};

export const FloatingButton = ({ onPress }) => {
    return (
      <TouchableOpacity style={FloatingButtonstyles.button} onPress={onPress}>
        <View style={FloatingButtonstyles.iconContainer}>
          <Icon name= "visibility" size={30} color= {ontertiary} />
        </View>
      </TouchableOpacity>
    );
};

export function PopupDialog({ visible, onClose, onSubmit }) {
    const [inputValue, setInputValue] = useState('');
  
    return (
      <Modal
        transparent={true}
        animationType="fade"
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={PopupDialogueStyles.overlay}>
          <View style={PopupDialogueStyles.dialogContainer}>
            <Text style={PopupDialogueStyles.title}>Enter Sprint name</Text>
            <TextInput
              style={PopupDialogueStyles.input}
              placeholder="Type here"
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
            />
            <ControlButton icon="bookmark"  onPress={() => {onSubmit(inputValue)}}/>
          </View>
        </View>
      </Modal>
    );
  }

  export function SprintItem({ title, time, onDelete }) {
    return (
      <View style={SprintItemstyles.container}>
        <View style={SprintItemstyles.textContainer}>
          <Text style={SprintItemstyles.title}>{title}</Text>
          <Text style={SprintItemstyles.time}>{time}</Text>
        </View>
        <TouchableOpacity style={SprintItemstyles.deleteButton} onPress={onDelete}>
          <Icon name="delete" size={24} color={onsecondary} />
        </TouchableOpacity>
      </View>
    );
  }

  const TopBar = () => {
    const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={TopBarStyles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color={onprimary} />
        </TouchableOpacity>
      </View>
    );
  };
  
  