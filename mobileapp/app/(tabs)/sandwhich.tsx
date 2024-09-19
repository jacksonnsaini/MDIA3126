import { Text } from 'react-native';
import { View } from 'react-native';
import { Link } from 'expo-router'

export default function SandwhichPage() {
  return (
    <View>
        <Text>this is the sandwhich page🥪</Text>
        <br />
        <Link href="/poutine">Poutine</Link>
    </View>
  );
}