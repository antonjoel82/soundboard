import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import BoardRow from './BoardRow';

const Board = ({ width, height }) => {
    if (!height) {
        height = width;
    }

    const renderRows = () => {
        return Array(height).fill().map((_, index) => {
            return <BoardRow rowIndex={index} width={width} key={`row-${index}`}/>
        });
    }

    return (
        <View style={styles.container}>
            {renderRows()}
        </View>
    );
};

Board.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number
}

export default Board;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        height: 300,
        width: 300
    }
})