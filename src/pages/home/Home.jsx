import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero Section */}
      <div className="home">
        <div className="home-content">
          <h1>Welcome to Eduverse</h1>
          <p>Learn, Grow, Excel</p>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature-card">
          <h3>📚 Expert Courses</h3>
          <p>Top-notch content designed by industry experts.</p>
        </div>
        <div className="feature-card">
          <h3>⏰ Learn Anytime</h3>
          <p>Access learning materials anywhere, anytime.</p>
        </div>
        <div className="feature-card">
          <h3>🌍 Easy Access</h3>
          <p>Learn across all devices with a smooth experience.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;