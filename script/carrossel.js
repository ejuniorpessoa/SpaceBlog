initCarrosel = () => {
    const balls = document.querySelector(".balls");
    const quant = document.querySelectorAll(".container .image");
    const imagem = document.getElementById("atual");
    const next = document.getElementById("next");
    const back = document.getElementById("back");
    const windowWidth = window.innerWidth;
    if (windowWidth > 532) {
        let atual = 0;
        let rolar = true;
        for (let i = 0; i < quant.length; i++) {
            let div = document.createElement("div");
            div.id = i
            balls.appendChild(div);
        }
        document.getElementById("0").classList.add("imgAtual");
        let pos = document.querySelectorAll(".balls div");
        for (let i = 0; i < pos.length; i++) {
            pos[i].addEventListener("click", () => {
                atual = pos[i].id;
                rolar = false;
                slide();
            });
        }
        back.addEventListener("click", () => {
            atual--
            rolar = false;
            slide();
        });
        next.addEventListener("click", () => {
            atual++;
            rolar = false;
            slide();
        });
        slide = () => {
            if (atual >= quant.length) {
                atual = 0;
            }
            else if (atual < 0) {
                atual = --quant.length
            }
            document.querySelector(".imgAtual").classList.remove("imgAtual");
            imagem.style.marginLeft = - 512 * atual + "px";
            document.getElementById(atual).classList.add("imgAtual");
        }
        setInterval(() => {
            if (rolar) {
                atual++;
                slide()
            } else {
                rolar = true;
            }
        }, 4000);
        slide();
    } else {
        let atual = 0;
        let rolar = true;
        for (let i = 0; i < quant.length; i++) {
            let div = document.createElement("div");
            div.id = i
            balls.appendChild(div);
        }
        document.getElementById("0").classList.add("imgAtual");
        let pos = document.querySelectorAll(".balls div");
        for (let i = 0; i < pos.length; i++) {
            pos[i].addEventListener("click", () => {
                atual = pos[i].id;
                rolar = false;
                slide();
            });
        }
        back.addEventListener("click", () => {
            atual--
            rolar = false;
            slide();
        });
        next.addEventListener("click", () => {
            atual++;
            rolar = false;
            slide();
        });
        slide = () => {
            if (atual >= quant.length) {
                atual = 0;
            }
            else if (atual < 0) {
                atual = --quant.length
            }
            document.querySelector(".imgAtual").classList.remove("imgAtual");
            imagem.style.marginLeft = - 256 * atual + "px";
            document.getElementById(atual).classList.add("imgAtual");
        }
        setInterval(() => {
            if (rolar) {
                atual++;
                slide()
            } else {
                rolar = true;
            }
        }, 4000);
        slide();
    }
}
initCarrosel();