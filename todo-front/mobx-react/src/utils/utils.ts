import axios from 'axios';

const baseURL = 'http://localhost:4000';
const http = axios.create({
  baseURL
});

// Get (/todo) - 학습지 리스트 조회
// Get (/todo/:id) - 학습지 상세 조회
// Post (/todo) - 학습지 생성
// Update (/:id) - 학습지 업데이트
// Delete (/:id) - 학습지 삭제

export const util = {
  async getTodoList() {
    return http.get('/todo');
  },
  async getTodoById(id: number) {
    return http.get(`/todo/${id}`);
  },
  async createTodo(data: { title: string }) {
    return http.post(`/todo`, data);
  },
  async updateTodo(data: { title: string; completed: boolean; id: number }) {
    return http.put(`/todo/${data.id}`, data);
  },
  async deleteTodoById(id: number) {
    return http.delete(`/todo/${id}`);
  }
};
