const authorizationPage = `
<div id="authorization-page" class="form-page app-border">
    <form action="" method="POST" class="form" id="auth-form">
        <h1 class="form-label">Авторизация</h1>
        <ul class="inputs-block">
            <li class="input-wrapper">
                <label for="login" class="input-label">Логин</label>
                <input  class="input-value" type="text" id="login" name="login" value="{{login}}">
                <div class="underline"></div>
            </li>

            <li class="input-wrapper">
                <label for="password" class="input-label">Пароль</label>
                <input  class="input-value" type="password" id="password" name="password" value="{{password}}">
                <div class="underline"></div>
            </li>
        </ul>

        <div class="buttons-block">
            <button class="button green-background app-border" type="submit" name="Войти">Войти</button>
            <button id="reg-button" class="button red-background app-border" type="button">Зарегистрироваться</button>
        </div>
    </form>
</div>
`;
export default authorizationPage;
