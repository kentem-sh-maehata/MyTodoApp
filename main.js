"use strict";
// 'use strict'
{
    const add = document.getElementById("add");
    let remove = document.querySelectorAll("#remove");
    const purge = document.getElementById("purge");
    const textArea = document.getElementById("text");
    const ul = document.querySelector("ul");
    function stop() { return false; }
    add === null || add === void 0 ? void 0 : add.addEventListener('click', () => {
        let text;
        if (textArea && "value" in textArea && textArea.value) {
            text = textArea.value.toString();
            let li = document.createElement("li");
            let label = document.createElement("label");
            let input = document.createElement("input");
            input.type = "checkbox";
            label.appendChild(input);
            let span = document.createElement("span");
            span.textContent = text;
            label.appendChild(span);
            let button = document.createElement("button");
            button.id = "remove";
            button.textContent = "X";
            li.appendChild(label);
            li.appendChild(button);
            li.id = Date.now().toString();
            ul === null || ul === void 0 ? void 0 : ul.appendChild(li);
            textArea.value = "";
        }
        setId();
    });
    function setId() {
        remove = document.querySelectorAll("#remove");
        remove.forEach(re => {
            re.addEventListener('click', () => {
                var _a;
                let id = -1;
                if (re.parentNode && "id" in re.parentNode)
                    id = Number((_a = re.parentNode) === null || _a === void 0 ? void 0 : _a.id);
                const liList = document.querySelectorAll("li");
                liList.forEach(li => {
                    if (Number(li.id) === id) {
                        li.remove();
                    }
                });
            });
        });
    }
}
