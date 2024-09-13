import { Text, View } from "react-native";
import Post from "@/components/Molecules/post";

export default function Index() {
  return (
    <View
      style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <Post 
        imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYEHqf_GIAGJIYbIYyz3KF0DXWG9X4mNxwqw&s"
        titleText="Kinmedai (Splendid Alfonsino)"
        subtext="Kinmedai has a peculiar appearance; it is a bright red fish with very large eyes due to its preference for deep waters."
      />
    </View>
  )}