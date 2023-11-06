import { useState } from "react";
import './Portfolio.css'

export default function Portfolio(props) {
    const { data } = props;

    const filters = ["All"];
    data.forEach((el) => {
        if (!filters.includes(el.category)) {
            filters.push(el.category)
        }
    })

    const filterProjects = (category) => {
        return category === "All" ? data : data.filter((el) => el.category === category)
    }

    const [select, setSelect] = useState({ filter: 'All', projectsToShow: filterProjects('All') });

    function handler(category) {
        setSelect(
            {
                filter: category,
                projectsToShow: filterProjects(category)
            }
        )
    }

    return (
        <div className="portfolio">
            <Toolbar
                filters={filters}
                selected={select.filter}
                onSelectFilter={handler}
            />
            <ProjectList projects={select.projectsToShow} />
        </div>
    )
}

function Toolbar(props) {
    const { filters, selected, onSelectFilter } = props;

    return <div className="buttons">
        {
            filters.map((el) => (
                el === selected ?
                    <button onClick={() => onSelectFilter(el)} key={el} className="active">{el}</button> :
                    <button onClick={() => onSelectFilter(el)} key={el}>{el}</button>
            ))
        }

    </div>
}

function ProjectList(props) {
    const { projects } = props;

    return <div className="projectList">
        {
            projects.map((el, index) => (
                <img src={el.img} alt="/" key={index}></img>
            ))
        }
    </div>

}
