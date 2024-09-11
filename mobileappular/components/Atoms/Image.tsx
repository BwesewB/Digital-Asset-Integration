import { View } from "react-native";

export default function image({imageURL}) { 
    return(
        <View>
            <img 
                src={imageURL}
            />
        </View>
    ) 
}