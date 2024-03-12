const registrationPage = `
    <div id="registration-page" class="form-page app-border">
        <form action="" method="POST" id="reg-form" class="form">
            <h1 class="form-label">Регистрация</h1>           
            <ul class="inputs-block">
                <li class="input-wrapper">
                    <label for="email" class="input-label">Почта</label>
                    <input class="input-value"  type="text" id="email" name="email" value="{{email}}">
                    <div class="underline"></div>
                </li>                
                <li class="input-wrapper">
                    <label for="login" class="input-label">Логин</label>
                    <input class="input-value" type="text" id="login" name="login" value="{{login}}">
                    <div class="underline"></div>
                </li>
                <li class="input-wrapper">
                    <label for="first_name" class="input-label">Имя</label>
                    <input class="input-value"  type="text" id="first_name" name="first_name" value="{{firstName}}">
                    <div class="underline"></div>
                </li>
                <li class="input-wrapper">
                    <label for="second_name" class="input-label">Фамилия</label>
                    <input class="input-value"  type="text" id="second_name" name="second_name" value="{{secondName}}">
                    <div class="underline"></div>
                </li>
                <li class="input-wrapper">
                    <label for="phone" class="input-label">Телефон</label>
                    <input class="input-value"  type="text" id="phone" name="phone" value="{{phone}}">
                    <div class="underline"></div>
                </li>
                <li class="input-wrapper">
                    <label for="password" class="input-label">Пароль</label>
                    <input class="input-value"  type="password" id="password" name="password" value="{{password}}">
                    <div class="underline"></div>
                </li>
                <li class="input-wrapper">
                    <label for="password-repeat" class="input-label">Пароль (ещё раз)</label>
                    <input class="input-value"  type="password" id="password-repeat" name="password-repeat" value="{{passwordRepeat}}">
                    <div class="underline"></div>
                </li>
            </ul>
            <div class="buttons-block">
                <button
                    id="reg-button"
                    class="button green-background app-border"
                    type="submit"
                    name="Зарегистрироваться"
                    >
                    Зарегистрироваться
                </button>
                <button id="auth-button" class="button red-background app-border" type="button">Войти</button>
                </div>
            </form>
    </div>
`;
export default registrationPage;
