const profilePage = `
    <div id="profile-page" class="form-page app-border">
        <form action="" method="POST" id="reg-form" class="form">
            <div class="avatar-wrapper">
                <input type="file" class="profile-avatar" id="profile-avatar">
                    <img width="100" height="100" alt="Аватар" src="{{userImg}}">
                </input>
                <label for="profile-avatar" class="avatar-label">{{firstName}} {{secondName}}</label>
            </div>
            <ul class="inputs-block">
                <li class="input-wrapper">
                    <label class="profile-input-label">
                        Почта                    
                        <input class="profile-input-value" type="text" id="email" name="email" value="{{email}}">   
                    </label>                
                    <div class="underline"></div>  
                </li>              
                <li class="input-wrapper">
                    <label class="profile-input-label">
                        Логин
                        <input class="profile-input-value" type="text" id="login" name="login" value="{{login}}"> 
                    </label>
                    <div class="underline"></div>                   
                </li>
                <li class="input-wrapper">
                    <label class="profile-input-label">
                        Имя
                        <input class="profile-input-value" type="text" id="first_name" name="first_name" value="{{firstName}}">
                    </label>
                    <div class="underline"></div>
                </li>
                <li class="input-wrapper">
                    <label class="profile-input-label">
                        Фамилия
                        <input class="profile-input-value" type="text" id="second_name" name="second_name" value="{{secondName}}">
                    </label>
                    <div class="underline"></div>
                </li>
                <li class="input-wrapper">
                    <label class="profile-input-label">
                        Имя в чате
                        <input class="profile-input-value" type="text" id="nick_name" name="display_name" value="{{nickName}}">
                    </label>
                    <div class="underline"></div>
                </li>
                <li class="input-wrapper">
                    <label class="profile-input-label">
                        Телефон
                        <input class="profile-input-value" type="text" id="phone" name="phone" value="{{phone}}">
                    </label>
                    <div class="underline"></div>
                </li>
            </ul>
            <div class="buttons-block">
                <button class="button green-background app-border" type="submit">Сохранить</button>
                <button id="back" class="button red-background app-border" type="button">Назад</button>
            </div>
        </form>
    </div>
`;
export default profilePage;
