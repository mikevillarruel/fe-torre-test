import "./Avatar.css";
interface Props {
    name: string;
    picture?: string;
}

export const Avatar = ({ name, picture }: Props) => {

    const defaultPicture = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'

    return (
        <div className="avatar-container">
            <div>
                <img src={picture ? picture : defaultPicture} alt={name} />
            </div>
            <div className="user-name" >
                {name}
            </div>
        </div>
    )
}
