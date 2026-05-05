export const exams = [
  {
    id: "1",
    title: "JavaScript Basics",
    questions: [
      { id: "q1", question: "What is a closure?", options: ["A function with its lexical environment", "A type of loop", "A data structure"], answer: 0 },
      { id: "q2", question: "What does DOM stand for?", options: ["Data Object Model", "Document Object Model", "Digital Online Module"], answer: 1 }
    ]
  },
  {
    id: "2",
    title: "React Fundamentals",
    questions: [
      { id: "q1", question: "What is JSX?", options: ["A database language", "A CSS preprocessor", "A syntax extension for JavaScript"], answer: 2 },
      { id: "q2", question: "What is the purpose of useEffect?", options: ["To handle side effects", "To style components", "To manage global state"], answer: 0 }
    ]
  }
];

export const studentScores = [
  { studentId: "s1", examId: "1", score: 85 },
  { studentId: "s2", examId: "1", score: 92 }
];
