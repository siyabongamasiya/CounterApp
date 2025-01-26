import { View,FlatList,ActivityIndicator,Text} from "react-native"
import { primary, primaryvariant } from "../../Styles/ColorStyles"
import { CustomSnackBar, SprintItem } from "../../Components/Components";
import { useEffect, useState } from "react";
import { repo } from "../../../Data/Repository/Repository";
import { SprintTimerStyles } from "../../Styles/Component_Styles";



export default SprintsScreen = () => {
    const [data,setData] = useState([])
    const [isloading,setisloading] = useState(true)
    const [isSnackBarVisible, setIsSnackBarVisible] = useState(false);
    const [isFailSnackBarVisible, setIsFailSnackBarVisible] = useState(false);
    const getSprints = async () => {
        setisloading(true)
        const results = await repo.getAllSprints()
        setData(results)
        setisloading(false)
    }

    useEffect(() => {
        getSprints()
    },[])

    return(
        data.length > 0 ?(
            <View style = {{flex : 1}}>
                <FlatList
              data={data}
              keyExtractor={(item) => `${item.title} ${item.time}`}
              renderItem={({ item}) => (
                 <SprintItem
                    title={item.title}
                    time={item.time}
                    onDelete={async() => {
                        try {
                            await repo.deleteSprint(item.id)
                            setIsSnackBarVisible(true)
                            getSprints()
                        } catch (error) {
                            setIsFailSnackBarVisible(true)
                        }
                        
                    }}
               />
               )}
               contentContainerStyle={{
                flex : 1,
                padding: 16,
              }}
           />
           {isSnackBarVisible ? <CustomSnackBar  text= "Sprint Deleted!!" onDismiss={() => {setIsSnackBarVisible(false)}}/> : <View></View>}
           {isFailSnackBarVisible ? <CustomSnackBar isSuccess = {false} text= "Something Went Wronng!!" onDismiss={() => {setIsFailSnackBarVisible(false)}}/> : <View></View>}
            </View>
            
        ) : (
        //draw circular indicator if loading else show no sprints saved
        isloading ? <View style = {{flex : 1,justifyContent : "center",alignItems : "center"}}>
               <ActivityIndicator size={"large"} color= {primary} />
            </View> :
        <View style = {{flex : 1,justifyContent : "center",alignItems : "center",backgroundColor : primaryvariant}}>
            <Text style ={SprintTimerStyles.displayLarge}>No sprints Saved!!</Text>
        </View>)
        
        
    )
}