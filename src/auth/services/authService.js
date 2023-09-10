

export const loginUser = async (username, password) => {
    console.log(username, password);
    return username.trim() === "admin" && password.trim() === "12345";
}