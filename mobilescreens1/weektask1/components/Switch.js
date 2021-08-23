import React, {useState} from 'react'
import { } from 'react-native';
import Screen from './Screen';
const Switch = () => {
    const [val, setval] = useState(false);
    return (
        <Screen>
        <Switch value={val}
                onValueChange={newVal=>setval(newVal)} 
        >
        
        </Switch></Screen>
    );
}

export default Switch;