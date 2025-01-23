import { secondary, tertiary } from "./ColorStyles";
import { StyleSheet } from "react-native";

export const ControlButtonstyles = StyleSheet.create({
    button: {
      backgroundColor: tertiary, 
      borderRadius: 60,
      width: 90, 
      height: 80, 
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5, 
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: "center",
    },
  });


  export const FloatingButtonstyles = StyleSheet.create({
    button: {
      backgroundColor: tertiary, 
      borderRadius: 50,
      width: 80, 
      height: 80, 
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      position :"absolute",
      bottom : 20,
      right : 20,
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5, 
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: "center",
    },
  });

  export const SprintTimerStyles = StyleSheet.create({
    displayLarge: {
      fontSize: 57, 
      fontWeight: '400', 
      letterSpacing: -0.25, 
      lineHeight: 64, 
      color: '#000', 
    },
  });

export const SaveSprintDialogueStyles = StyleSheet.create({
    container: {
      height : "auto",
      justifyContent: 'center',
      padding: 16,
      backgroundColor: secondary,
    },
});

export const PopupDialogueStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogContainer: {
    width: '80%',
    backgroundColor: secondary,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#6200ee',
    borderRadius: 50,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export const SprintItemstyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius : 16,
    backgroundColor : secondary,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  textContainer: {
    flex: 1, // Takes up remaining space
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
  deleteButton: {
    padding: 8,
  },
});

export const TopBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200ea',
    height: 56,
    paddingHorizontal: 16,
    elevation: 4,
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});