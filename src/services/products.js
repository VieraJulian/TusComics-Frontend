export async function newProduct(formData) {
    try {
        let query = await fetch("http://localhost:3000/products/create", {
            method: "POST",
            headers: {
            },
            body: formData
        })

        let data = await query.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function detail(id) {
    try {
        let query = await fetch(`http://localhost:3000/products/${id}`)
        let data = await query.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function allProducts() {
    try {
        let query = await fetch(`http://localhost:3000/products/allProducts`)
        let data = await query.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function editProduct(id, formData) {
    try {
        let query = await fetch(`http://localhost:3000/products/edit/${id}`, {
            method: "POST",
            headers: {
            },
            body: formData
        })

        let data = await query.json()
        return data
    } catch (error) {
        console.log(error)
    }
}