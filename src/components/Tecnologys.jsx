export function Card_Ability({ data }) {

    return (
        <div className="content-tecnology">
            <img src={data.img} alt="tecnologia" />
            <h3>{data.name}</h3>
        </div>
    );
}
