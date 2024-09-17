import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Text>this be the index pageular</Text>
      <Link href="/home">home</Link>
      <Link href="/chiese">chiese</Link>
    </View>
  );
}