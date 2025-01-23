import { Text, View } from "react-native"
import { PopupDialog,ControlButton, FloatingButton, SprintItem} from "../../Components/Components"
import {primaryvariant} from "../../Styles/ColorStyles"
import { useEffect, useState } from "react"
import { SprintTimerStyles } from "../../Styles/Component_Styles"
import { useNavigation } from "@react-navigation/native"
import { convertMsToString } from "../../../Utils/Utils"
import { repo } from "../../../Data/Repository/Repository"


export default HomeScreen = () => {
    const [time,settime] = useState("00:00:00")
    const [ispaused,setispaused] = useState(true)
    const [isvisibledialogue,setisvisibledialogue] = useState(false)
    const playpause = () => {
        setispaused(!ispaused)
    }
    const [currenttimems,setcurrenttimems] = useState(0)
    const navigation = useNavigation()

    const updatetime = (updatedtime) => {
        settime(convertMsToString(updatedtime)); // Update the string representation
    }

    const saveSprint = (title,time) => {
        repo.addSprint(title,time)
    }

    //initialize repo once
    useEffect(() => {
        const initializeRepo = async () => {
            await repo.initialize()
        }
        initializeRepo()
    },[])

    //start counting interval if is not paused
    useEffect(() => {
        let interval = null;
    
        if (!ispaused) {
          // Start the interval
          interval = setInterval(() => {
            setcurrenttimems((prevTime) => {
              const updatedTime = prevTime + 1000; // Increment time by 1000ms
              updatetime(updatedTime)
              return updatedTime;
            });
          }, 1000); // Update every second
        } else {
          // Clear the interval if paused
          clearInterval(interval);
        }
    
        // Cleanup the interval on component unmount or when `ispaused` changes
        return () => clearInterval(interval);
      }, [ispaused]);

    return(
        <View style = {{flex : 1,
            backgroundColor : primaryvariant,
            padding : 16,
            alignItems : "center",
             justifyContent : "center"}}>

            
            <View style = {{width : "100%",alignItems : "center",justifyContent : "center"}}>
            <Text style={[SprintTimerStyles.displayLarge,{bottom : 50}]}>
                {time}
            </Text>
            <View style = {{width : "100%",height : 80,
                flexDirection : "row",justifyContent : "space-between",alignItems : "center"}}>
                <ControlButton icon= "refresh" onPress={() => {
                    setcurrenttimems(0)
                    updatetime(0)
                    setispaused(true)}}/>
                {
                    ispaused ? (<ControlButton icon= "play-arrow" onPress={playpause}/>) : 
                    (<ControlButton icon= "pause" onPress={playpause}/>)
                }
                
                <ControlButton icon= "bookmark" onPress={() => {
                    setispaused(true)
                    setisvisibledialogue(true)}}/>
            </View>
            </View>
            <FloatingButton onPress={() => {
                setispaused(true)
                navigation.navigate("Sprints")}}/>
            <PopupDialog visible={isvisibledialogue} onClose={() => {setisvisibledialogue(false)}} onSubmit={(newtitle) => {
                saveSprint(newtitle,time)
                setisvisibledialogue(false)
            }}/>
        </View>
    )

}

