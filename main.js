"use strict";
// 'use strict'
{
    const add = document.getElementById("add");
    const remove = document.getElementById("delete");
    const purge = document.getElementById("purge");
    const textArea = document.getElementById("text");
    const ul = document.querySelector("ul");
    function stop() { return false; }
    add === null || add === void 0 ? void 0 : add.addEventListener('click', () => {
        let text;
        if (textArea && "value" in textArea && textArea.value) {
            text = textArea.value.toString();
            console.log(text);
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
            ul === null || ul === void 0 ? void 0 : ul.appendChild(li);
            textArea.value = "";
        }
    });
}
