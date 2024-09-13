import { View } from "react-native";

export default function subText({subtext}) { 
    return(
        <View>
            <p
                style={{
                    fontFamily:"helvetica",
                    fontWeight:"italic"
                }}
            >
                {subtext}    
            </p>
        </View>
    ) 
}