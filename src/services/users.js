export async function register(formData) {
    try {
        let query = await fetch("http://localhost:3000/users/register", {
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

export async function login(body) {
    try {
        let query = await fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body:  JSON.stringify(body)
        })

        let data = await query.json()
        return data
    } catch (error) {
        console.log(error)
    }
}