function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const myAlert = require('./components/myAlert').default;

    btn.innerHTML = 'Click me';
    btn.onclick = myAlert;

    element.appendChild(btn);
    return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./components/myAlert.js', () => {

        element = component();
        document.body.appendChild(element);
    })
}
