export const PersonInfo = [
    {
        id: 1,
        name: "Рустам",
        surname: "Юсупов",
        currentJobTitle: "Инженер Прочнист",
        imageFace: "../images/Face_Ru.jpg",
        linkGitHub: "https://github.com/YouRain/",
        linkLinkedIn: "https://www.linkedin.com/in/xrustic",
        linkTwitter: "https://twitter.com/RustamYusupov20",
        aboutMe: "Привет, Я Юсупов Рустам инженер-конструктор отдела прочности. Решаю вопросы прочностного проектирования деталей турбин ГТД. Участвую в работах по повышению надёжности авиационных и индустриальных двигателей, по расчётно-экспериментальному анализу причин дефектов. Владею современными методами расчёта и проектирования деталей ГТД, а также всем необходимым программным обеспечением для решения поставленных задач",
        birthDay: "09.07.1994",
        eMail: "rustam.men@mail.ru",
        numberTelephone: "+7 937 183 99 59",
        // address: "Россия, Самара, Силина, 14",
        address: {
            country: "Россия",
            city: "Самара",
            street: "Силина",
            flat: "14",
        },
        language: "Русский, Английский",
        skills: [
            {soft: "NX CAD", progress: "20"},
            {soft: "NX CAE", progress: "50"},
            {soft: "ANSYS APDL", progress: "40"},
            {soft: "Workbench Mechanical", progress: "20"},
            {soft: "КОМПАС-3D", progress: "60"},
            {soft: "Excel", progress: "50"},
        ],
        experience: [
            {periodDate: "март 2018 - настоящее время", company: "ОДК-Кузнецов", postTitle: "Инженер конструктор - Прочнист", postText: "Первого марта 2018 года трудоустроился в отдел прочности опытно конструкторского бюро (ОКБ)"}
        ],
        education: [
            {periodDate: "2012 - 2018", educationPost: "Специалист",  educationPostTitle: "Инженер", institution: "Самарский университет", educationText: "Получил диплом специалиста с отличием по специальности 24.05.02 Проектирование авиационных и ракетных двигателей с присвоением квалификаии \"Инженер\""},
            {periodDate: "2000 - 2012", educationPost: "Среднее образование",  educationPostTitle: "Студент", institution: "МОУ СОШ №9", educationText: "Получил среднее (полное) общее образование в муниципальном общеобразовательном учерждение \"Средняя общеобразовательная школа №9\" г. Ртищево Саратовской области 23 июня 2012 года"},
        ]
    },
    {
        id: 2,
        name: "Ринат",
        surname: "Юсупов",
        currentJobTitle: "QA automation engineer",
        imageFace: "../images/Face_Ri.jpg",
        linkGitHub: "https://github.com/mrrinatino",
        linkLinkedIn: "https://www.linkedin.com/in/mrrinatino/",
        linkTwitter: "https://twitter.com/MRinatino?s=09",
        aboutMe: "Привет, Я Юсупов Ринат, обеспечиваю контроль качества продукта. Я уже несколько лет профессионально занимаюсь тестированием программного обеспечения на WEB и мобильных платформах. В последнее время автоматизирую тесты на Cypress и Selenium.",
        birthDay: "06.05.1989",
        eMail: "mrrinatino@yandex.ru",
        numberTelephone: "+7 931 303 48 57",
        // address: "Россия, Санкт-Петербург, Кондратьевский пр-кт, д.64, к.8",
        address: {
            country: "Россия",
            city: "Санкт-Петербург",
            street: "Кондратьевский пр-кт",
            flat: "64",
        },
        language: "Русский, Английский",
        skills: [
            {soft: "Проектирование тест-планов", progress: "70"},
            {soft: "Написание тест-кейсов", progress: "80"},
            {soft: "Ручное тестирование", progress: "60"},
            {soft: "Postman", progress: "50"},
            {soft: "Cypress (javaScript)", progress: "60"},
            {soft: "Selenium (C#)", progress: "30"},
        ],
        experience: [
            {periodDate: "Февраль 2022 - Настоящее время", company: "Нордклауд", postTitle: "QA automation engineer", postText: "Автоматизация тестирования программного обеспечения"},
            {periodDate: "Февраль 2021 - Февраль 2022", company: "Интеллектуальная разработка", postTitle: "Инженер по тестированию", postText: "Тестирование программного обеспечения (Web, backend, mobile)"},
            {periodDate: "Май 2020 - Август 2021", company: "Яндекс", postTitle: "Ассессор-тестировщик", postText: "Тестирование программного обеспечения (Web, mobile)"},
        ],
        education: [
            {periodDate: "2006-2011", educationPost: "Специалист",  educationPostTitle: "Инженер путей сообщения", institution: "СамГУПС", educationText: "Получил диплом специалиста по специальности Электроснабжение железных дорог"},
            {periodDate: "1996-2006", educationPost: "Среднее образование",  educationPostTitle: "Студент", institution: "МОУ СОШ №9", educationText: "Получил среднее (полное) общее образование в муниципальном общеобразовательном учерждение \"Средняя общеобразовательная школа №9\" г. Ртищево Саратовской области 2006 года"},
        ]
    },
]

export const emptyPerson = {
    id: "",
    name: "",
    surname: "",
    currentJobTitle: "",
    imageFace: "",
    linkGitHub: "",
    linkLinkedIn: "",
    linkTwitter: "",
    aboutMe: "",
    birthDay: "",
    eMail: "",
    numberTelephone: "",
    address: {
        country: "",
        city: "",
        street: "",
        flat: "",
    },
    language: "",
    skills: [
      { soft: "", progress: "" },
    ],
    experience: [
      { periodDate: "", company: "", postTitle: "", postText: "" }
    ],
    education: [
      { periodDate: "", educationPost: "", educationPostTitle: "", institution: "", educationText: "" },
    ]
  }