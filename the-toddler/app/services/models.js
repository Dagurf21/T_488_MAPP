// services/models.js
export const Board = {
  id: null,
  name: '',
  description: '',
  thumbnail: '',
};

export const List = {
  id: null,
  name: '',
  color: '',
  boardId: null,
};

export const Task = {
  id: null,
  name: '',
  description: '',
  isFinished: false,
  listId: null,
};
