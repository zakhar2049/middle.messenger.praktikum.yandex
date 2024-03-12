export const tempProfile = {
    firstName: 'Дмитрос',
    secondName: 'Маликос',
    login: 'Chatlanin',
    nickName: 'Чатланин',
    email: 'pochta@electropochta.ru',
    phone: '+7 (777) 107 70 77',
    password: '777777',
    passwordRepeat: '777777',
}

export const tempChats = [
    {
        userName: 'Максим',
        chatId: '15',
        lastMessage: 'Морковка поспела',
        lastMessageDate: new Date(2023, 8, 15, 15, 35, 0),
        notViewed: true,
    },
    {
        userName: 'Путр',
        chatId: '20',
        lastMessage: 'Зима близко',
        lastMessageDate: new Date(2023, 8, 15, 15, 35, 0),
        notViewed: true,
    },
    {
        userName: 'Котлетка',
        chatId: '22',
        lastMessage: 'Проверь почту',
        lastMessageDate: new Date(2023, 8, 15, 15, 35, 0),
        notViewed: false,
    },
    {
        userName: 'Жига',
        chatId: '25',
        lastMessage: 'Ты успеваешь?',
        lastMessageDate: new Date(2023, 8, 15, 15, 35, 0),
        notViewed: false,
    },
    {
        userName: 'Кудато',
        chatId: '26',
        lastMessage: 'Давай закурим, товарищ, по одной, давай закурим, товарииииищ мой любимый мой родной....',
        lastMessageDate: new Date(2023, 8, 15, 15, 35, 0),
        notViewed: true,
    },
    {
        userName: 'Маргарита Васильевна Жупеликова Маргарита Васильевна, Жупеликова Маргарита Васильевна Жупеликова',
        chatId: '29',
        lastMessage: 'Не забудь оплатить квитанцию',
        lastMessageDate: new Date(2023, 8, 15, 15, 35, 0),
        notViewed: true,
    },
    {
        userName: 'Начальник',
        chatId: '33',
        lastMessage: 'Думаешь лучше на море?',
        lastMessageDate: new Date(2023, 8, 15, 15, 35, 0),
        notViewed: false,
    },
    {
        userName: 'Доставка',
        chatId: '26',
        lastMessage: 'Товар доставлен. Уведомление №...',
        lastMessageDate: new Date(2023, 8, 15, 15, 35, 0),
        notViewed: false,
    },
    {
        userName: 'Московское время',
        chatId: '29',
        lastMessage: 'Сегодня с утра взошло солнце, чего не случалось уже несколько лет',
        lastMessageDate: new Date(2023, 8, 15, 15, 35, 0),
        notViewed: true,
    },
    {
        userName: 'Доставка2',
        chatId: '32',
        lastMessage: 'Не забудьте забрать яхту со склада',
        lastMessageDate: new Date(2023, 8, 15, 15, 35, 0),
        notViewed: false,
    },
]

export const tempOpenedChat = {
    userName: 'Начальник',
    chatId: '33',
    messages: [
        {
            message: 'Привет, что-то случилось?',
            date: new Date(2023, 8, 15, 15, 10, 0),
            owner: 'me',

        },
        {
            message: 'Да, привет, очень важный вопрос.',
            date: new Date(2023, 8, 15, 15, 15, 0),
            owner: 'companion',

        },
        {
            message: 'Как думаешь, осилишь командировку?',
            date: new Date(2023, 8, 15, 15, 20, 0),
            owner: 'companion',

        },
        {
            message: 'Хорошо что спросил, я не против.',
            date: new Date(2023, 8, 15, 15, 25, 0),
            owner: 'me',

        },
        {
            message: 'Куда бы ты хотел поехать в отпуск на 3 месяца?',
            date: new Date(2023, 8, 15, 15, 30, 0),
            owner: 'companion',

        },
        {
            message: 'Думаешь лучше на море?',
            date: new Date(2023, 8, 15, 15, 35, 0),
            owner: 'companion',

        },
    ],
}
