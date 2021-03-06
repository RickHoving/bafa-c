import './header.css';
import { createTitle } from '../controls/title/title.js';
import { createSubtitle } from '../controls/subtitle/subtitle.js';
import { createButton } from '../controls/button/button.js';

let model = {
    title: createTitle('BAFA Sample Application'),
    subtitle: createSubtitle('This is a sample application that is being created to test out best practices for creating frontend applications with the virtual dom library Maquettejs.'),
    button : createButton('Console Say Hello!', function() {
        console.log('Hello!');
    })
}

export var headerSection = {
    renderMaquette: function (h) {
        return h('div#header', [model.title.renderMaquette(h), model.subtitle.renderMaquette(h)], model.button.renderMaquette(h));
    }
};