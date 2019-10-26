import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state:{
        profilePage:{
            postsData: [
                {id: 1, message: "Hi, how're you??", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
            ],
            newPostText: 'thewwiing'
        },
        dialogsPage: {
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
        },
        sideBar:{}

    },
    _callSubscriber() {

    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this.getState().profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        // this._state.sideBar = profileReducer(this._state.sideBar, action)
        this._callSubscriber(this._state)
    }

}


export default store;
window.store = store
