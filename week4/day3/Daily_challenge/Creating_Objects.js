class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

const video1 = new Video("Introduction to JavaScript", "CodeMaster", 3600);
video1.watch();

const video2 = new Video("Advanced CSS Techniques", "DesignGuru", 1800);
video2.watch();

const videoData = [
  { title: "React Hooks Explained", uploader: "FrontendDev", time: 2700 },
  { title: "Node.js API Development", uploader: "BackendPro", time: 5400 },
  { title: "Database Design Fundamentals", uploader: "DataArchitect", time: 4500 },
  { title: "Python for Data Science", uploader: "AIExplorer", time: 7200 },
  { title: "Mobile App UI/UX Principles", uploader: "UXInnovator", time: 2000 }
];

console.log("\n--- Videos from Array ---");
for (const data of videoData) {
  new Video(data.title, data.uploader, data.time).watch();
}
