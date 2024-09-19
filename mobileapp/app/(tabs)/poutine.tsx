import { Text } from 'react-native';
import { Link } from 'expo-router'
import { View } from 'react-native';

export default function Poutine() {
    return(
        <View>
            <Text>this is the poutine page</Text>
            <br />
            <Link href="/sandwhich">Sandwhich</Link>
        </View>
    );
}