

export const loginUser = async (username, password) => {
    return username.trim() === "admin" && password.trim() === "12345";
}