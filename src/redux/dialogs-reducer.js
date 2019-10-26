const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogsData: [
        {id: 1, name: "Alex"},
        {id: 2, name: "Max"},
        {id: 3, name: "Elena"},
        {id: 4, name: "Bob"},
        {id: 5, name: "Marat"},
    ],
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "What's your name?"},
        {id: 3, message: "Let's fun"},
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [ ...state.messagesData, {id: 6, message: body} ]
            }

        default:
            return state

    }
}
export let sendMessageActionCreator = () =>
    ( {type:SEND_MESSAGE} )
export let updateNewMessageBodyCreator = (body) =>
    ( {type: UPDATE_NEW_MESSAGE_BODY,body: body} )

export default dialogsReducer
