import query from "./utility";

function findAll() {
    return query("SELECT * FROM products")
    .then((result) => {
        return result;
    })
    .catch((err) => {
        return err;
    });
}

async function findOne(id) {
    return await query('SELECT * FROM products WHERE id = ?', [id]);
}

async function addOne(name, price, description) {
    return await query('INSERT INTO products (name, price, description) VALUES (?, ?, ?)', [name, price, description]);
}

async function updateOne(name, price, description, id) {
    return await query('UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?', [name, price, description, id]);
}

async function removeOne(id) {
    return await query('DELETE FROM products WHERE id = ?', [id]);
}

export {
    findAll,
    findOne,
    addOne,
    updateOne,
    removeOne
}