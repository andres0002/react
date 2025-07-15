// js
// react
// third
// own

export function fetchUsers({ pageParam = 1 }: { pageParam?: number }) {
    return fetch(`https://randomuser.me/api/?results=10&seed=w.a.r.j&page=${pageParam}`)
        .then(res => {
            if (!res.ok) { // mejor forma de manejar los error con fetch.
                console.log(res);
                throw new Error("Error in the request...");
            }
            return res.json();
        })
        .then(data => {
            const pageNumber = Number(data.info.page);

            return {
                users: data.results,
                nextPage: pageNumber >= 2
                    ? undefined
                    : pageNumber + 1
            }
        });
}