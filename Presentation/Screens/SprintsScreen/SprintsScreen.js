import { View,FlatList,Text} from "react-native"
import { primaryvariant } from "../../Styles/ColorStyles"
import { SprintItem } from "../../Components/Components";
import { useEffect, useState } from "react";
import { repo, SprintRepository } from "../../../Data/Repository/Repository";
import { SprintTimerStyles } from "../../Styles/Component_Styles";



export default SprintsScreen = () => {
    const [data,setData] = useState([])
    const getSprints = async () => {
        const results = await repo.getAllSprints()
        setData(results)
    }

    useEffect(() => {
        getSprints()
    })

    return(
        data.length > 0 ?(
            <FlatList
              data={data}
              keyExtractor={(item) => `${item.title} ${item.time}`}
              renderItem={({ item}) => (
                 <SprintItem
                    title={item.title}
                    time={item.time}
                    onDelete={async() => {
                        await repo.deleteSprint(item.id)
                        getSprints()
                    }}
               />
               )}
               contentContainerStyle={{
                flex : 1,
                padding: 16,
              }}
           />
        ) : (<View style = {{flex : 1,justifyContent : "center",alignItems : "center",backgroundColor : primaryvariant}}>
            <Text style ={SprintTimerStyles.displayLarge}>No sprints Saved!!</Text>
        </View>)
        
    )
}