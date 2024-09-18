import {Text} from 'react-native'

export default function ({ style , children }: {style?: any, children: string}) {
    return (
        <Text style={[
            style,
        ]}>{children}</Text>
    )
}