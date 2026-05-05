import React, { useState } from 'react';
import { getExamById } from '../api/examService';

const StudentPortal = () => {
  const [examId, setExamId] = useState('');
  const [exam, setExam] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFetchExam = async () => {
    if (!examId) return;
    setLoading(true);
    setError('');
    setExam(null);
    try {
      const data = await getExamById(examId);
      setExam(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Student Portal</h2>
      <hr />
      <div className="card shadow-sm p-4">
        <div className="mb-3">
          <label htmlFor="examId" className="form-label">Enter Exam ID to Start</label>
          <div className="input-group">
            <input
              type="text"
              id="examId"
              className="form-control"
              placeholder="e.g. 1"
              value={examId}
              onChange={(e) => setExamId(e.target.value)}
            />
            <button
              className="btn btn-primary"
              onClick={handleFetchExam}
              disabled={loading || !examId}
            >
              {loading ? 'Searching...' : 'Start Exam'}
            </button>
          </div>
        </div>

        {error && <div className="alert alert-danger mt-3">{error}</div>}

        {exam && (
          <div className="mt-4 border-top pt-3">
            <h3>
              Ready to start: {exam.title}
              <span className="badge bg-info text-dark ms-2">{exam.questions.length} questions</span>
            </h3>
            <p className="lead">This exam has {exam.questions.length} questions.</p>
            <button className="btn btn-success">Begin Now</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentPortal;
