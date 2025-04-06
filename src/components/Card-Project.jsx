export function Card({ data }) {
    const { tecnologies, title, description } = data;

    console.log(data)
    console.log(title)

    return (
        <div className="project-card">
            <div className="project-image">
                <img
                    src=""
                    alt=""
                    width={400}
                    height={200}
                    layout="responsive"
                />
            </div>

            <div className="section-tecnology">
                {tecnologies.map((tech, index) => (
                    <div className="tecnology">
                        <p key={index}>{tech.name}</p>
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
