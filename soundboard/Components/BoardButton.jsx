import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const BoardButton = () => {
    const [toggled, setToggled] = React.useState(false)

    const handleTouch = () => {
        setToggled(!toggled);
        window.alert("Clicked!")
    }

    // style={toggled ? styles.wrapper : styles.wrapperToggled}>}
    return (
            <TouchableOpacity
                onPress={handleTouch}
                style={[styles.btnBase, toggled ? styles.btn : styles.btnToggled]}
            >
                <Text style={styles.btnLabel}>{toggled ? 'Yes' : 'No' }</Text>
            </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btnLabel: {
      color: 'white'  
    },
    btnBase: {
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: 'red'
    },
    btnToggled: {
        backgroundColor: 'blue'
    }
})

export default BoardButton;
