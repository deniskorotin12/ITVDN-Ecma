let opt = {
    name : "denis",
    age : 11,
    type : "human"
};

function render(options) {
    let { name, age, type } = options;
    console.log(`${name},\n ${age},\n ${type}`);
};

render(opt);