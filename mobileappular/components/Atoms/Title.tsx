import { View } from "react-native";

export default function title({titleText}) { 
    return(
        <View>
            <h1
                style={{
                    fontFamily:"helvetica",
                    fontWeight:"bold"
                }}
            >
                {titleText}    
            </h1>
        </View>
    ) 
}