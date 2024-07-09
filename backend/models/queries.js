import pool from '../config/db.js';

export const addPost = async(titulo, img, descripcion, likes) => {
    const sql = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4)";
    const values = [titulo, img, descripcion, 0]

    try {
        const result = await pool.query(sql, values)
        return result.rows;

    } catch (error) {
        console.error('Error adding post', error.stack);
    }
}

export const getPost = async() => {
    const sql = "SELECT * FROM posts";

    try {
        const result = await pool.query(sql)
        return result.rows;

    } catch (error) {
        console.error('Error getting posts', error.stack);
    }
}

export const  like = async(id) => {
    const sql = "UPDATE posts SET likes = likes + 1 WHERE id = $1";
    const values = [id]

    try {
        const result = await pool.query(sql, values)
        return result.rows;

    } catch (error) {
        console.error('Error updating likes', error.stack);
    }
}

export const deletePost = async(id) => {
    const sql = "DELETE FROM posts WHERE id = $1";
    const values = [id]

    try {
        const result = await pool.query(sql, values)
        return result.rows;

    } catch (error) {
        console.error('Error deleting post', error.stack);
    }
}