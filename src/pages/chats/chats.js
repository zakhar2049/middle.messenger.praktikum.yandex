import chatsPage from "./chats.tmpl";
import Handlebars from "handlebars";
import {tempChats, tempOpenedChat, tempProfile} from "../../consts/consts";
import userImg from "../../img/user.png";

export default () => {
    const template = Handlebars.compile(chatsPage);
    return template({
        profile: tempProfile,
        chats: tempChats.map(e => ({
            ...e,
            lastMessageTime: `${e.lastMessageDate.getHours()}:${e.lastMessageDate.getMinutes()}`,
            userImg,
        })),
        openedChat: {
            ...tempOpenedChat, messages: tempOpenedChat.messages.map(e => ({
                ...e,
                time: `${e.date.getHours()}:${e.date.getMinutes()}`,
                incomingMessage: e.owner === 'companion',
            }))
        },
        userImg,
    });
}


