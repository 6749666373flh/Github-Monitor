import request from '@/utils/request';
import { API_HOST } from '../constants';

export async function queryLeakageLists({ page = 1, pageSize = 10, status = 'a' }) {
  let url = `${API_HOST}/api/monitor/result.json?page=${page}&page_size=${pageSize}`;

  if (status !== 'a') url += `&status=${status}`;

  return request(url, {
    credentials: 'same-origin',
  });
}

export async function queryUpdateLeakageStatus({ id, status }) {
  return request(`${API_HOST}/api/monitor/result/${id}.json`, {
    method: 'PUT',
    body: {
      status,
    },
    credentials: 'same-origin',
  });
}

export async function queryTaskLists({ page = 1, pageSize = 10 }) {
  const url = `${API_HOST}/api/monitor/task.json?page=${page}&page_size=${pageSize}`;

  return request(url, {
    credentials: 'same-origin',
  });
}

export async function queryCreateTask(payload) {
  const url = `${API_HOST}/api/monitor/task.json`;

  return request(url, {
    method: 'POST',
    body: payload,
    credentials: 'same-origin',
  });
}

export async function queryTokenLists({ page = 1, pageSize = 10 }) {
  const url = `${API_HOST}/api/monitor/token.json?page=${page}&page_size=${pageSize}`;

  return request(url, {
    credentials: 'same-origin',
  });
}