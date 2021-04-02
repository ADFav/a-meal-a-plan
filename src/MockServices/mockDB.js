const tables = {
    ingredients: require('../mockdata/ingredients'),
    recipes: require('../mockdata/recipes')
}

const lag = () => 2000 + (2 * Math.random() - 1) * 1000
const returnWithLag = value => new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), lag())
});

export async function read(query) {
    const { table, filters } = query;
    let result = tables[table];
    for (let filter of filters) {
        const [field, op, value] = filter;
        switch (op) {
            case "=":
            case "==":
            case "===":
                result = result.filter(row => row[field] === value);
                break;
            default:
                break;
        }
    }

    return returnWithLag(result);
}

export async function update(table, records) {
    const result = []
    for (let record of records) {
        let oldRecord = tables[table].find(row => row.id === record.id);
        oldRecord = {...oldRecord, ...record };
        result.push(oldRecord);
    }

    return returnWithLag(result);
}

const mockDB = { read, update };
export default mockDB;