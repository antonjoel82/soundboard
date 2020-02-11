import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import BoardButton from './BoardButton';

const BoardRow = ({ rowIndex, width }) => {
    const renderRow = () => {
        return Array(width).fill().map((_, index) => {
            return <BoardButton key={`btn-${rowIndex}-${index}`} />
        });
    }

    return (
        <View style={styles.container}>
            {renderRow()}
        </View>
    );
};

BoardRow.propTypes = {
    rowIndex: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
}

export default BoardRow;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between'
    }
})