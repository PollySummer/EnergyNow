import React from 'react';
//дом нужен для создания вебпакетов из наших реакт файлов
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './services/stateService';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

//React and ReactDOM это два npm пакета, которые и формируют сам react
//reactDOM с помощью webpack перерабатывает все наши компоненты, написанные в react и отправляет это все в div
const root = ReactDOM.createRoot(document.getElementById('root'));
//render - запуск компонентов и перевод их из node.js в html и vanilla.js (самый первы js)
//рендер бывает двух типов:
//1 - mount (первая отрисовка/рендер, попадание компонента в DOM)
//2 - render (все последующие отрисовки)
//также и есть unmoun (компонент пропал из DOM) и рендер при этом не происходит

////////////////////

//для работы с редакс в реакте нужен доп. модуль - react-redux
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
