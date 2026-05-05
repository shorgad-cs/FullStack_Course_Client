import { exams } from './mockDb';

const DELAY = 500;

export const getAllExams = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...exams]);
    }, DELAY);
  });
};

export const getExamById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exam = exams.find(e => e.id === id);
      if (exam) {
        resolve({ ...exam });
      } else {
        reject(new Error("Exam not found"));
      }
    }, DELAY);
  });
};

export const createExam = (exam) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newExam = { ...exam, id: String(exams.length + 1) };
      exams.push(newExam);
      resolve(newExam);
    }, DELAY);
  });
};
