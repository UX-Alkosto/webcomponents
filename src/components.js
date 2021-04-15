const components = [
    "banner",
    "button",
    "card",
    "link",
    "product-container",
    "select",
    "slider",
];

components.forEach(async component => {
    let tag = `k-${component}`;

    if (document.querySelectorAll(tag).length) {
        await import(`./components/${component}/${component}.js`)
            .then(module => window.customElements.define(tag, module.default));
    }
});