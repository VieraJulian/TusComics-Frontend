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