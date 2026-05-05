import React, { useState, useEffect } from 'react';
import { getAllExams } from '../api/examService';

const TeacherDashboard = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const data = await getAllExams();
        setExams(data);
      } catch (error) {
        console.error("Failed to fetch exams:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExams();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Teacher Dashboard</h2>
      <hr />
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {exams.map((exam) => (
            <div key={exam.id} className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{exam.title}</h5>
                  <p className="card-text text-muted">Exam ID: {exam.id}</p>
                  <p className="card-text">{exam.questions.length} Questions</p>
                  <button className="btn btn-outline-primary btn-sm">View Details</button>
                </div>
              </div>
            </div>
          ))}
          {exams.length === 0 && <p>No exams found.</p>}
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
