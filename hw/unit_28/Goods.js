class Goods {
    constructor(name, price, image, count) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.count = count;
    }

    draw() {
        let divTask3 = document.createElement('div');
        divTask3.classList.add('goods');
        // document.querySelector('.out-3').append(divTask3);

        let h1Task3 = document.createElement('h1');
        h1Task3.innerHTML = this.name;
        divTask3.append(h1Task3);

        let pTask3 = document.createElement('p');
        pTask3.classList.add('price');
        pTask3.innerHTML = this.price;
        divTask3.append(pTask3);

        let imgTask3 = document.createElement('img');
        imgTask3.src = this.image;
        imgTask3.alt = this.name;
        divTask3.append(imgTask3);
        return divTask3;
    }
}
