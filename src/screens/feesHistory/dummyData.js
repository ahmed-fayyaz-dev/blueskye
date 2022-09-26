function* generateId() {
    let id = 0;
    while (true) {
        yield id;
        id++;
    }
}

const genId = generateId();

var item = {
    mid: genId.next().value,
    vNo: genId.next().value,
    vDate: new Date(),
    dr: '0.0',
    cr: '23.0',
    vType: 'Fees',
    narration: '1st Installement',
    balance: '2323',
};

export const genData = () => {
    const arr = [];

    for (let i = 0; i < 10; i++) {
        arr.push(item);
    }

    return arr;
};
