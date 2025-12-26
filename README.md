# Glowing-Button-Effect-02

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/guskfontes/Glowing-Button-Effect-02)

# 🌟 Glowing Button Effect (Cyberpunk Style)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

> Um projeto de estudo de interface focado em **CSS Avançado**, **Pseudo-elementos** e **Micro-interações**.

## 📸 Preview

*(Se possível, adicione um print ou GIF do botão aqui depois)*

## 🚀 Sobre o Projeto

Este projeto recria um efeito de botão estilo "Cyberpunk/Sci-Fi" utilizando apenas HTML e CSS puro. O objetivo principal foi explorar como manipular luz, sombra e posicionamento para criar uma interface rica sem a necessidade de imagens ou JavaScript complexo.

O diferencial deste código é a **reusabilidade**: as cores são definidas dinamicamente via variáveis, permitindo criar botões de qualquer cor apenas alterando um atributo no HTML.

## 🛠 Tecnologias e Conceitos

* **HTML5 Semântico**
* **CSS3 Variables (`var(--name)`)**: Para injeção dinâmica de cores.
* **Pseudo-elements (`::before` e `::after`)**: Para criar os detalhes estéticos (chips) nas bordas sem poluir o DOM.
* **CSS Transitions & Transforms**: Para animações suaves de hover e clique.
* **Box-shadow**: Manipulação de sombras para criar o efeito de luz "Neon".

## 🧠 Lógica e Aprendizados

### 1. Variáveis CSS para Reusabilidade
Em vez de criar classes fixas como `.btn-green` ou `.btn-pink`, utilizei variáveis CSS inline. O CSS lê o valor de `--clr` e o aplica em bordas, textos e sombras automaticamente.

```html
<button style="--clr:#0f0">Button</button>