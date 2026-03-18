import { useState } from "react"

function Courses() {
    const courses = [
        { name: "Java Programming Bootcamp", grade: "PX", status: "Completed" },
        { name: "Java Programming Studio", grade: "DI", status: "Completed" },
        { name: "Intro to Maths for Computing", grade: "DI", status: "Completed" },
        { name: "C++ Programming Bootcamp", grade: "PA", status: "Completed" },
        { name: "C++ Programming Studio", grade: "DI", status: "Completed" },
        { name: "Mathematics for Computing 1", grade: "PA", status: "Completed" },
        { name: "Introduction to Cyber Security", grade: "HD", status: "Completed" },
        { name: "Foundations of AI for STEM", grade: "HD", status: "Completed" },
        { name: "Algorithms and Analysis", grade: "PA", status: "Completed" },
        { name: "Software Eng Fundamentals", grade: "HD", status: "Completed" },
        { name: "Essentials of Computing", grade: "PA", status: "Completed" },
        { name: "Further Programming", grade: "HD", status: "Completed" },
        { name: "Software Eng: Process & Tools", grade: "DI", status: "Completed" },
        { name: "Software Testing", grade: "DI", status: "Completed" },
        { name: "Full Stack Development", grade: "N/A", status: "In Progress" },
        { name: "Machine Learning", grade: "N/A", status: "In Progress" },
        { name: "Innov Ecosys & Future of Work", grade: "N/A", status: "In Progress" },
        { name: "Database Applications", grade: "N/A", status: "In Progress" },
    ];

    return (
        <div>
            <h2 className="font-sans font-medium text-xs uppercase text-gray-400 pb-2">Courses</h2>
            <div className="flex flex-wrap gap-4 justify-between">
                {courses.map((course, index) => {
                    let statusColor = ""
                    if (course.status === "Completed") {
                        statusColor = "bg-green-500 text-white"
                    } else if (course.status === "In Progress") {
                        statusColor = "bg-yellow-100 text-black"
                    }

                    return (
                    <div key={index} className="flex flex-col justify-between border rounded-2xl p-4 w-60 hover:shadow-xl hover:opacity-75 transition-shadow">
                        <h2 className="text-lg">{course.name}</h2>
                        <div className="flex justify-between items-center">
                            <p className="text-sm">Grade: {course.grade}</p>
                            <p className={`text-sm border rounded-full p-2 ${statusColor}`}>{course.status}</p>
                        </div>
                    </div>
                )})}
            </div>
        </div>
    )
}

export default Courses