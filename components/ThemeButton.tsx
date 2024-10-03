import React from "react";
import {Pressable, Text, StyleSheet} from "react-native";

interface ThemeButtonProps {
    onLongPress?: () => void;
    onPress?: () => void;
    label: string;
    position?: 'left' | 'right';
}

const ThemeButton = ({ onLongPress, onPress, label, position = 'right' }: ThemeButtonProps) => {
    return <Pressable onLongPress={onLongPress} onPress={onPress} style={({ pressed }) => [styles.pressable, position === 'right' ? styles.sumButton: styles.resetButton, pressed ? { opacity: 0.5 } : { opacity: 1}]}>
        <Text style={styles.textButton}>{label}</Text>
    </Pressable>
};

const styles = StyleSheet.create({
    textButton: {
        fontSize: 22,
        color: 'white'
    },
    pressable: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 50,
        width: 80,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },
    sumButton:{
        bottom: 20,
        right: 30,
    },
    resetButton: {
        bottom: 20,
        left: 30,
    },
});

export default ThemeButton;
