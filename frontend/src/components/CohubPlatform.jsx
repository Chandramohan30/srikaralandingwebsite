const FEATURES = [
  { title: "Live Class Recordings", detail: "Missed a session? Every live class is uploaded to CoHub so you can revisit it anytime." },
  { title: "Assignments & Capstones", detail: "Submit your capstone projects and get mentor feedback, all tracked in one place." },
  { title: "Progress Tracking", detail: "See exactly which modules and capstones you've completed as you move through the course." },
  { title: "Doubt & Mentor Support", detail: "Reach your trainers between live sessions for help unblocking your projects." },
];

export default function CohubPlatform() {
  return (
    <section className="section cohub">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Our Learning Platform</span>
          <h2>Every student gets access to CoHub</h2>
          <p className="center">
            CoHub is our own learning platform — your home base for recordings, assignments and progress
            throughout the program.
          </p>
        </div>

        <div className="grid grid-4">
          {FEATURES.map((f) => (
            <div className="card cohub__card" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
