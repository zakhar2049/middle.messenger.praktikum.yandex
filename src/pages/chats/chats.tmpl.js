const chatsPage = `
<div class="chats-page">
    <aside class="chats-block">
        <div class="profile-block app-border">
            <img width="80" height="80" alt="Аватар" src="{{userImg}}">
            <div class="profile-title-wrapper">
                <span class="profile-title">{{profile.firstName}} {{profile.secondName}}</span>
            </div>
        </div>
        <div class="search-block app-border">
            <input placeholder="Поиск">
        </div>
            <ul class="chats-list app-border">
                {{#if chats.length}}
                    {{#each chats}}
                        <li>
                            <div class="chats-item">
                                <img width="60" height="60" alt="Аватар" src="{{userImg}}">
                                <div class="chats-item-content">
                                    <div class="chats-item-info">
                                        <span class="chats-item-info-name">{{userName}}</span>
                                        <span class="chats-item-info-time">{{lastMessageTime}}</span>
                                    </div>
                                    <div class="chats-item-message">
                                        <span class="chats-item-message-text">{{lastMessage}}</span>                                        
                                        {{#if notViewed}}
                                        <span class="chats-item-message-not-viewed-sign"></span>
                                        {{/if}}
                                    </div>
                                </div>
                            </div>
                            <div class="underline"></div>
                        </li>
                    {{/each}}
                {{else}}  
                    <li class="chats-item">
                        <span>Нет чатов</span>
                        <div class="underline"></div>
                    </li>
                {{/if}}                  
            </ul>
    </aside>
    <div class="vertical-border"></div>
    <main class="messages-block app-border">  
        <div class="opponent-profile-block">
                <img width="60" height="60" alt="Аватар" src="{{userImg}}">
            <span class="opponent-name-wrapper">
                <span class="opponent-name">{{openedChat.userName}}</span>
            </span>
        </div>  
        <div class="underline"></div>
        <ul class="messages-list">
            {{#if openedChat.messages.length}}
                {{#each openedChat.messages}}
                    {{#if incomingMessage}}
                    <li class="messages-item incoming-message">
                        <div class="message-content app-border">
                            <span>{{message}}</span>
                            <span class="message-time">{{time}}</span>
                        </div>
                    </li>
                    {{else}}                    
                    <li class="messages-item outgoing-message">
                        <div class="message-content app-border">
                            <span>{{message}}</span>
                            <span class="message-time">{{time}}</span>
                        </div>
                    </li>
                    {{/if}}
                {{/each}}
            {{else}}  
                <li class="chats-item">
                    <span>Нет сообщений</span>
                    <div class="underline"></div>
                </li>
            {{/if}}
        </ul>
        <div class="message-input-block"></div>
              
    </main>    
</div>
`;
export default chatsPage;
