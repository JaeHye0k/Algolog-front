const url: string = import.meta.env.VITE_SERVER_ORIGIN;

export async function fetchAllPosts() {
    const res = await fetch(`${url}/posts`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return res;
}

export async function fetchPost(id: string) {
    const res = await fetch(`${url}/posts/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return res;
}

export async function createPost(category_id: string, content: string, title: string) {
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
