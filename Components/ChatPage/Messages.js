import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native'

import MessageList from './MessageList';
import { messages } from '../../redux/reducers/MessageReducer'
//import { updateMessagesHeight } from '../actions';

const updateMessagesHeight = event => {
    return null;
};


const mapStateToProps = (state) => ({
    messages: state.messages,
    isFetching: false
});

const Messages = connect(
    mapStateToProps
)(({ messages=[], isFetching}) => {
    console.log('Current List', messages);
    if (isFetching) {
        return (
            <View style={{paddingTop: 50,
                          paddingBottom: 50}}>
            </View>
        )
    }else{
        return <MessageList messages={messages}
                            style={{minHeight: 100}}
                            />
    }
});

export default Messages;