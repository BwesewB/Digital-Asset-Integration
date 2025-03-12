import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
        <Text>wigure pageular</Text>
        <Link href="/chiese">chiese page</Link>
        <Link href="/">index page go</Link>
    </View>
    )
}   