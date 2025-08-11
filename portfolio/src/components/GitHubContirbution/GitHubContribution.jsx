import React, { useEffect, useState } from "react";
import './GitHubContribution.css'

import { HiArrowDownCircle } from 'react-icons/hi2';
import { FiMail } from 'react-icons/fi';

function GitHubContributions() {

  const [calendar, setCalendar] = useState(null);
  const [year, setYear] = useState(new Date().getFullYear());
  const [error, setError] = useState(null);

  const darkMode = window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

    const getColor = (count) => {
      if (darkMode) {
        if (count === 0) return "#161b22";
        if (count < 3) return "#0e4429";
        if (count < 6) return "#006d32";
        if (count < 9) return "#26a641";
        return "#39d353";
      } else {
        // Light mode
        if (count === 0) return "#ebedf0";
        if (count < 3) return "#9be9a8";
        if (count < 6) return "#40c463";
        if (count < 9) return "#30a14e";
        return "#216e39";
      }
    };

  useEffect(() => {
    const fetchContributions = async () => {
      const token = process.env.REACT_APP_GITHUB_TOKEN;
      const username = process.env.REACT_APP_GITHUB_USERNAME;

      if (!token || !username) {
        setError("GitHub token or username is missing in .env");
        return;
      }

      const query = `
          {
            user(login: "${username}") {
              contributionsCollection(
                from: "${year}-01-01T00:00:00Z"
                to: "${year}-12-31T23:59:59Z"
              ) {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                    }
                  }
                }
              }
            }
          }
        `;

      try {
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();
        console.log("GitHub API raw response:", data);

        if (data.errors || data.message) {
          setError(
            data.message === "Bad credentials"
              ? "Invalid GitHub token. Please check your .env file."
              : "Error fetching GitHub contributions."
          );
          return;
        }

        setCalendar(
          data.data.user.contributionsCollection.contributionCalendar
        );
      } catch (err) {
        console.error(err);
        setError("Failed to fetch GitHub contributions.");
      }
    };

    fetchContributions();
  }, [year]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!calendar) {
    return <p>Loading GitHub contributions...</p>;
  }

  return (
    <div>
        <div className="contribution-column">
            <div className="contribution-details">
                <h2>GitHub Contributions</h2>
                <p>Total: {calendar.totalContributions}</p>
            </div>

            <div className="about-contact">
                <a href="/Platon_Alexander_CV.pdf" download="Platon_Alexander_CV.pdf"><button><HiArrowDownCircle size={25}/>Download CV</button></a>
                <a href="#Contact"><button><FiMail size={25} />Work with Me</button></a>
            </div>
        </div>

      <div className="contribution-calendar">
        {calendar.weeks.map((week, i) => (
          <div key={i} className="week">
            {week.contributionDays.map((day, j) => (
              <div
                key={j}
                className="day"
                title={`${day.date}: ${day.contributionCount} contributions`}
                style={{
                  backgroundColor: getColor(day.contributionCount),
                  width: "12px",
                  height: "12px",
                  borderRadius: "2px",
                }}
              />
            ))}
          </div>
        ))}

        <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
          {[2025, 2024, 2023, 2022].map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default GitHubContributions;
