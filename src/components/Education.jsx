function Education() {
    return (
        <section>
            <h2 className="font-sans font-medium text-xs uppercase text-gray-400 pb-2">Education</h2>
            <div>
                <a href="https://www.rmit.edu.au/">
                    <span className="text-lg hover:text-yellow-500">RMIT University</span>
                </a>
                <div className="flex flex-col">
                    <span className="text-sm">Jan 2024 - Dec 2027</span>
                    <span className="text-xs">GPA: 2.7</span>
                    <span className="text-xs">WAM: 72</span>
                </div>
            </div>
        </section>
    )
}

export default Education