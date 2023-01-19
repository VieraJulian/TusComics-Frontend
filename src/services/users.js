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