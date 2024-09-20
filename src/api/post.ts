const url: string = import.meta.env.VITE_SERVER_ORIGIN;

export async function getPosts() {
    const res = await fetch(`${url}/posts`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return res;
}

export async function getPost(id: string) {
    const res = await fetch(`${url}/posts/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return res;
}

export async function postPost(category_id: string, content: string, title: string) {
    const res = await fetch(`${url}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            category_id,
            content,
            title,
        }),
    });
    return res;
}
