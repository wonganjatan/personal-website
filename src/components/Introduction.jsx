import { useState } from "react"

function Introduction() {
    return (
        <section>
            <h1>
                Hi, I am <span className="border-b border-current">William Hok</span>
            </h1>
            <div className="">
                <p>
                    A passionate RMIT Computer Science student from Indonesia.
                    I am interested to build scalable applications, learning 
                    technologies, and contributing to projects that solve real
                    world problems
                </p>
            </div>
        </section>
    )
}

export default Introduction