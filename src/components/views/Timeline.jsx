import { useState } from "react";
import Header from "../shared/Header";

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState("All");

  const posts = [
    {
      id: 1,
      title: "Beautiful Song Title 1",
      composer: "Composer A",
      date: "2023-08-01",
      comments: ["Great song!", "Love the melody."],
    },
    {
      id: 2,
      title: "Melancholy Melodies",
      composer: "Composer B",
      date: "2023-07-15",
      comments: ["This song hits hard.", "Can't get enough of it."],
    },
    {
      id: 3,
      title: "Sunset Serenade",
      composer: "Composer C",
      date: "2023-06-22",
      comments: ["Perfect for a relaxing evening."],
    },
    // ... Add more posts ...
  ];

  const years = ["All", "2023", "2022" /* Add more years... */];

  const filteredPosts =
    selectedYear === "All"
      ? posts
      : posts.filter((post) => post.date.startsWith(selectedYear));

  return (
    <div className="bg-gray-100 min-h-full overflow-y-auto ">
      <Header title="Your Collections" />
      <div className="flex flex-row justify-end  sticky top-0 z-10">
        <select
          className="p-2 border rounded-md shadow-md w-[20%]  "
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-6">
        {filteredPosts.map((post) => (
          <div key={post.id} className="border rounded-md shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-1">Composer: {post.composer}</p>
            <p className="text-gray-600 mb-1">Created: {post.date}</p>
            <ul className="list-disc pl-6">
              {post.comments.map((comment, index) => (
                <li key={index} className="text-gray-600">
                  {comment}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
