export function Card({ data }) {
    const { tecnologies, title, description,image} = data;

    console.log(data)
    console.log(title)

    return (
        <div className="project-card">
            <div className="project-image">
                <img
                    className="project-img"
                    src={image}
                    alt=""
                    layout="responsive"
                />
            </div>

            <div className="section-tecnology">
                {tecnologies.map((tech, index) => (
                    <div className="tecnology">
                        <img src={tech.url} alt="" />
                    </div>
                ))}
            </div>

            <div className="project-info">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
            </div>

        </div>
    );
}
