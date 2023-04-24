export const server_calls = {
    get: async() => {
        const response = await fetch(`https://drink-me.glitch.me/api/drinks`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token':	'Bearer 52a712b673f29cbb13095ada69399b800e59403f5fe98c51',
            },
        })   

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://drink-me.glitch.me/api/drinks`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token':	'Bearer 52a712b673f29cbb13095ada69399b800e59403f5fe98c51',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://drink-me.glitch.me/api/drinks/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'Bearer 52a712b673f29cbb13095ada69399b800e59403f5fe98c51',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://drink-me.glitch.me/api/drinks/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'Bearer 52a712b673f29cbb13095ada69399b800e59403f5fe98c51',
            }
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}
